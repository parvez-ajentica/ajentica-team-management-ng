import { Component } from '@angular/core';
import { AddEditProjectForm } from '../../components/add-edit-project-form/add-edit-project-form';

@Component({
  selector: 'app-add-project-page',
  imports: [AddEditProjectForm],
  templateUrl: './add-project-page.html',
  styleUrl: './add-project-page.css',
})
export class AddProjectPage {
  pageName: string = 'Add New project';
}
