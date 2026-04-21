import { Component } from '@angular/core';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { EditButton } from '../../../../shared/components/edit-button/edit-button';
import { Card } from '../../../../shared/card/card';
import { ProfileInfo } from '../../../../shared/components/profile-info/profile-info';
import { ViewDetailsButton } from '../../../../shared/components/view-details-button/view-details-button';

@Component({
  selector: 'app-view-team-details-page',
  imports: [BackButton, EditButton, Card, ProfileInfo, ViewDetailsButton],
  templateUrl: './view-team-details-page.html',
  styleUrl: './view-team-details-page.css',
})
export class ViewTeamDetailsPage {
  pageName: string = 'Frontend Team';
}
