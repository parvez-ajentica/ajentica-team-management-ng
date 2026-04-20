import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Teams } from './features/teams/teams';
import { Members } from './features/members/members';
import { Projects } from './features/projects/projects';
import { NotFound } from './shared/components/not-found/not-found';

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
  {
    path: '**',
    component: NotFound,
  },
];
