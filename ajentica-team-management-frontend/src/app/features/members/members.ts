import { Component, signal } from '@angular/core';
import { Card } from '../../shared/card/card';
import { ProfileInfo } from '../../shared/components/profile-info/profile-info';
import { ViewDetailsButton } from '../../shared/components/view-details-button/view-details-button';

@Component({
  selector: 'app-members',
  imports: [Card, ProfileInfo, ViewDetailsButton],
  templateUrl: './members.html',
  styleUrl: './members.css',
})
export class Members {
  pageName: string = 'Members';

  members = signal([
    { id: 1, name: 'Alice', role: 'Backend Dev' },
    { id: 2, name: 'Bob', role: 'UI Designer' },
  ]);
}
