import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MentionsComponent } from './mentions/mentions.component';

const routes: Routes = [
  { path : "", component : HomeComponent},
  { path : "accueil", component : HomeComponent},
  { path : "contact", component : ContactComponent},
  { path : "mentions", component : MentionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
