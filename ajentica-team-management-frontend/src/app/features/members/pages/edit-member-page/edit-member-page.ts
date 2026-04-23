import { Component } from '@angular/core';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { AddEditMemberForm } from '../../components/add-edit-member-form/add-edit-member-form';

@Component({
  selector: 'app-edit-member-page',
  imports: [AddEditMemberForm],
  templateUrl: './edit-member-page.html',
  styleUrl: './edit-member-page.css',
})
export class EditMemberPage {
  pageName: string = 'Edit Member Info';
}
