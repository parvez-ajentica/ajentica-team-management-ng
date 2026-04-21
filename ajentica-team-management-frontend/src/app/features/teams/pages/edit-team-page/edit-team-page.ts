import { Component } from '@angular/core';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { AddEditTeamForm } from '../../components/add-edit-team-form/add-edit-team-form';

@Component({
  selector: 'app-edit-team-page',
  imports: [BackButton, AddEditTeamForm],
  templateUrl: './edit-team-page.html',
  styleUrl: './edit-team-page.css',
})
export class EditTeamPage {}
