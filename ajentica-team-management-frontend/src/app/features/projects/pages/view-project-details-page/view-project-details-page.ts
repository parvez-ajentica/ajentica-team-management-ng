import { Component } from '@angular/core';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { EditButton } from '../../../../shared/components/edit-button/edit-button';
import { Card } from '../../../../shared/card/card';

@Component({
  selector: 'app-view-project-details-page',
  imports: [BackButton, EditButton, Card],
  templateUrl: './view-project-details-page.html',
  styleUrl: './view-project-details-page.css',
})
export class ViewProjectDetailsPage {}
