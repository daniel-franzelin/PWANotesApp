import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotizenComponent } from './notizen/notizen.component';
import { AddNotizComponent } from './add-notiz/add-notiz.component';
import { ThemenComponent } from './themen/themen.component';

const routes: Routes = [
  { path: "", component: NotizenComponent },
  { path: "notizen", component: NotizenComponent },
  { path: "notizen/:sortOrder", component: NotizenComponent },
  { path: "themen", component: ThemenComponent },
  { path: 'addnotiz/:notiz', component: AddNotizComponent },
  { path: 'addnotiz', component: AddNotizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
