import { AsyncValidierer } from './../async-validierer';
import { DBService } from './../db.service';
import { Theme } from './../../shared/theme';
import { Component, Inject, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface DialogData {
  theme: string;
}

@Component({
  selector: 'app-dialog-fenster',
  templateUrl: './dialog-fenster.component.html',
  styleUrls: ['./dialog-fenster.component.scss']
})
export class DialogFensterComponent implements OnInit {

  private theme!: Theme;
  registerForm!: FormGroup;
  new: boolean = false;

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private db: DBService,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      theme: [this.data, Validators.required, AsyncValidierer.AsyncValid(this.db)]
    });
    if(this.data.theme == '') {
      this.new = true;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }



  async deleteTheme(description: string) {
    await this.db
      .getThemeByDescription(description)
      .then((res) => this.db.deleteTheme(res));
    this.dialogRef.close("");
  }

  async addTheme(description: string) {

    let theme: Theme = new Theme(uuidv4(), description);
    await this.db.addTheme(theme);
    this.dialogRef.close(description);
  }

  /*async changeTheme(description: string) {

    await this.db.getThemeByDescription(this.data.theme).then((res) => {
      res.description = description;
      this.db.updateTheme(res);
    }).catch(err => console.log("err"));
    this.dialogRef.close("");
  }*/

}

export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
