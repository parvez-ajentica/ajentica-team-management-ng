import { Component } from '@angular/core';
import { AddEditTeamForm } from '../../components/add-edit-team-form/add-edit-team-form';
import { BackButton } from '../../../../shared/components/back-button/back-button';

@Component({
  selector: 'app-add-team-page',
  imports: [AddEditTeamForm, BackButton],
  templateUrl: './add-team-page.html',
  styleUrl: './add-team-page.css',
})
export class AddTeamPage {}
