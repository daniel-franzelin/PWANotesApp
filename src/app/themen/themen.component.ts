import { DialogFensterComponent } from './../dialog-fenster/dialog-fenster.component';
import { DBService } from './../db.service';
import { Theme } from './../../shared/theme';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-themen',
  templateUrl: './themen.component.html',
  styleUrls: ['./themen.component.scss']
})
export class ThemenComponent implements OnInit {

  themen: Theme[] = [];
  theme!: Theme;

  constructor(private db: DBService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.db
      .getThemesByDescription()
      .then((res) => (this.themen = res))
      .catch((err) => console.log(err));
  }

  addTheme() {
    this.openDialog(Theme.empty());
  }

  openDialog(theme: Theme): void {
    const dialogRef = this.dialog.open(DialogFensterComponent, {
      width: '300px',
      data: {theme: ''},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.theme.description = result;
      console.log(this.theme)
    });
  }

  changeTheme(a: Theme) {
    const dialogRef = this.dialog.open(DialogFensterComponent, {
      width: '300px',
      data: { theme: a.description },
    });
    dialogRef.afterClosed().subscribe(async (result) => {
      console.log('The dialog was closed');
      this.themen = await this.db.getThemesByDescription();
    });
  }

}
