import { DBService } from './../db.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/shared/note';
import { User } from 'src/shared/user';
import * as moment from 'moment';
import { Location } from '@angular/common';
import { Theme } from 'src/shared/theme';

@Component({
  selector: 'app-add-notiz',
  templateUrl: './add-notiz.component.html',
  styleUrls: ['./add-notiz.component.scss']
})
export class AddNotizComponent implements OnInit {

  id!: string;
  notiz: Note | undefined;
  registerForm!: FormGroup;
  selected: string | undefined;
  themes: Theme[] = [];

  constructor(private location: Location, private db: DBService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    if (!this.notiz) this.notiz = Note.empty();
    const user = User.emptySepp();
    this.registerForm = this.fb.group({
      id: [uuidv4(), Validators.required],
      title: [this.notiz?.title, Validators.required],
      theme: [this.notiz?.theme?.description, Validators.required],
      text: [this.notiz?.text, Validators.required],
      user: [user, Validators.required],
      read: [false],
      creationDate: [moment().valueOf(), Validators.required],
      modificationDate: [0, Validators.required]
    });
    this.route.params.subscribe( params => {
      //get ID
      this.id = params['notiz'];

      //get Note
      this.db.getNoteById(this.id).then(res => {
        this.notiz = res;
        console.log(this.notiz)
        this.selected = this.notiz?.theme?.description;

      }).catch(err => {
        this.notiz = Note.empty();
      });


    });
    this.db.getThemes().then(res => this.themes = res).catch(err => console.log(err));

  }

  createForm() {
    // console.log(this.notiz?.theme?.description);
    // this.registerForm = this.fb.group({
    //   id: [uuidv4(), Validators.required],
    //   title: [this.notiz?.title, Validators.required],
    //   theme: [this.notiz?.theme?.description, Validators.required],
    //   text: [this.notiz?.text, Validators.required],
    //   user: [user, Validators.required],
    //   read: [false],
    //   creationDate: [moment().valueOf(), Validators.required],
    //   modificationDate: [0, Validators.required]
    // });
  }

  async register() {
    const note = Note.empty();
    let theme: Theme = await this.db.getThemeByDescription(
      this.registerForm.get('theme')?.value
    );

    Object.assign(note, this.registerForm.value);
    note.theme = theme;
    this.db
      .addNote(note)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    this.registerForm.reset(Note.empty());
    this.router.navigate(['notizen/titel']);
  }

  back() {
    this.location.back();
  }

  deleteNote() {
    if(this.notiz)
      this.db.deleteNote(this.notiz);
    this.location.back();
  }

  async change() {
    if(this.help()) {
      if (this.notiz) {
        Object.assign(this.notiz, this.registerForm.value);
        console.log(this.registerForm.get('text')?.value);
        this.notiz.modificationDate = moment().valueOf();
        await this.db.updateNote(this.notiz);
        this.router.navigate(['notizen']);
      }
    } else
      this.register();
  }

  help() {
    if(this.route.snapshot.params['notiz'])
      return true;
    else
      return false;

  }
}
