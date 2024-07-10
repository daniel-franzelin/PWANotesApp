import { DBService } from './../db.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Note } from 'src/shared/note';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Component({
  selector: 'app-notizen',
  templateUrl: './notizen.component.html',
  styleUrls: ['./notizen.component.scss']
})
export class NotizenComponent implements OnInit {

  notizen: Note[] = [];
  sortOrder: string = "notizen";

  constructor(
    private db: DBService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe( params => {
      this.sortOrder = params['sortOrder'];
      switch (this.sortOrder) {
        case 'titel':
          this.notizen = [];
          console.log()
          this.db.getNotesByTitle().then( res => this.notizen = res ).catch( err => console.log(err) );
          break;
        case 'thema':
          this.notizen = [];
          this.db.getNotesByTheme().then( res => this.notizen = res ).catch( err => console.log(err) );
          break;
        case 'datum':
          this.notizen = [];
          this.db.getNotesByDate().then( res => this.notizen = res ).catch( err => console.log(err) );
          break;
        default:
          break;
      }
    });
  }

  addNotiz() {
    this.router.navigate(['/addnotiz']);
  }

}
