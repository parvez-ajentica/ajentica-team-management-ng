import { Component } from '@angular/core';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { AddEditMemberForm } from '../../components/add-edit-member-form/add-edit-member-form';

@Component({
  selector: 'app-add-member-page',
  imports: [AddEditMemberForm],
  templateUrl: './add-member-page.html',
  styleUrl: './add-member-page.css',
})
export class AddMemberPage {
  pageName: string = 'Add New Member';
}
