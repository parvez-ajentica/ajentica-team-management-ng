import { Component } from '@angular/core';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { ProfileInfo } from '../../../../shared/components/profile-info/profile-info';
import { EditButton } from '../../../../shared/components/edit-button/edit-button';
import { Card } from '../../../../shared/card/card';

@Component({
  selector: 'app-view-member-details-page',
  imports: [BackButton, EditButton, Card],
  templateUrl: './view-member-details-page.html',
  styleUrl: './view-member-details-page.css',
})
export class ViewMemberDetailsPage {}
