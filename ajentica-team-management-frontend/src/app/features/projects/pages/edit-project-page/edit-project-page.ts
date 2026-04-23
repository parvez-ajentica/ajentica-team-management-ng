import { Component } from '@angular/core';
import { AddEditProjectForm } from '../../components/add-edit-project-form/add-edit-project-form';

@Component({
  selector: 'app-edit-project-page',
  imports: [AddEditProjectForm],
  templateUrl: './edit-project-page.html',
  styleUrl: './edit-project-page.css',
})
export class EditProjectPage {
  pageName = 'Update Project Info';
}
