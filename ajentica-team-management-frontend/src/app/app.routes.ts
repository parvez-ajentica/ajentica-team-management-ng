import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard/dashboard';
import { Teams } from './features/teams/teams/teams';
import { Members } from './features/members/members/members';
import { Projects } from './features/projects/projects/projects';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: Dashboard,
  },
  {
    path: 'teams',
    component: Teams,
  },
  {
    path: 'members',
    component: Members,
  },
  {
    path: 'projects',
    component: Projects,
  },
];
