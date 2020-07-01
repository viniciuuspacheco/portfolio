import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { StudiesComponent } from './components/studies/studies.component';
import { WorksComponent } from './components/works/works.component';
import { CodesComponent } from './components/codes/codes.component';
import { ContactsComponent } from './components/contacts/contacts.component';


const routes: Routes = [
  { path: 'profile', component: ProfileComponent, pathMatch: 'full' },
  { path: 'studies', component: StudiesComponent, pathMatch: 'full' },
  { path: 'works', component: WorksComponent, pathMatch: 'full' },
  { path: 'codes', component: CodesComponent, pathMatch: 'full' },
  { path: 'contacts', component: ContactsComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
