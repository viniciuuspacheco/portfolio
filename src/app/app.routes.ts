import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';

export const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'certificates', component: CertificatesComponent },
];
