import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
//import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
//import { environment } from '../environments/environment';
//import { NotizenComponent } from './notizen/notizen.component';
import {MatInputModule} from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
//import { ThemenComponent } from './themen/themen.component';
import {MatSelectModule} from '@angular/material/select';
//import { AddNotizComponent } from './add-notiz/add-notiz.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddNotizComponent } from './add-notiz/add-notiz.component';
import { NotizenComponent } from './notizen/notizen.component';
import { ThemenComponent } from './themen/themen.component';
import { DialogFensterComponent } from './dialog-fenster/dialog-fenster.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AddNotizComponent,
    NotizenComponent,
    ThemenComponent,
    DialogFensterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatListModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
