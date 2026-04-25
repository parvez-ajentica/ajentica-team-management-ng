import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Teams } from './features/teams/teams';
import { Members } from './features/members/members';
import { Projects } from './features/projects/projects';
import { NotFound } from './shared/components/not-found/not-found';
import { AddTeamPage } from './features/teams/pages/add-team-page/add-team-page';
import { EditTeamPage } from './features/teams/pages/edit-team-page/edit-team-page';
import { TeamMainPage } from './features/teams/pages/team-main-page/team-main-page';
import { ViewTeamDetailsPage } from './features/teams/pages/view-team-details-page/view-team-details-page';
import { MemberMainPage } from './features/members/pages/member-main-page/member-main-page';
import { AddMemberPage } from './features/members/pages/add-member-page/add-member-page';
import { EditMemberPage } from './features/members/pages/edit-member-page/edit-member-page';
import { ViewMemberDetailsPage } from './features/members/pages/view-member-details-page/view-member-details-page';
import { AddProjectPage } from './features/projects/pages/add-project-page/add-project-page';
import { EditProjectPage } from './features/projects/pages/edit-project-page/edit-project-page';
import { ViewProjectDetailsPage } from './features/projects/pages/view-project-details-page/view-project-details-page';
import { ProjectsMainPage } from './features/projects/pages/projects-main-page/projects-main-page';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: Dashboard,
  },
  {
    path: 'teams',
    component: TeamMainPage,
    children: [
      { path: '', component: Teams },
      { path: 'add', component: AddTeamPage },
      { path: 'edit/:id', component: EditTeamPage },
      { path: 'view-details/:id', component: ViewTeamDetailsPage },
    ],
  },
  {
    path: 'members',
    component: MemberMainPage,
    children: [
      { path: '', component: Members },
      { path: 'add', component: AddMemberPage },
      { path: 'edit/:id', component: EditMemberPage },
      { path: 'view-details/:id', component: ViewMemberDetailsPage },
    ],
  },
  {
    path: 'projects',
    component: ProjectsMainPage,
    children: [
      { path: '', component: Projects },
      { path: 'add', component: AddProjectPage },
      { path: 'edit/:id', component: EditProjectPage },
      { path: 'view-details/:id', component: ViewProjectDetailsPage },
    ],
  },

  {
    path: '**',
    component: NotFound,
  },
];
