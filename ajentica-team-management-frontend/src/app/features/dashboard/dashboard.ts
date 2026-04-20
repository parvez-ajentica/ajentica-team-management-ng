import { Component, signal } from '@angular/core';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-dashboard',
  imports: [Card],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  dashboardData = signal([
    { title: 'Teams', value: 12 },
    { title: 'Members', value: 58 },
    { title: 'Active Projects', value: 9 },
    { title: 'Pending Tasks', value: 37 },
  ]);
}
