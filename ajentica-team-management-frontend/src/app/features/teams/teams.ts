import { Component } from '@angular/core';
import { Card } from '../../shared/card/card';
import { LucideSquarePen } from '@lucide/angular';

@Component({
  selector: 'app-teams',
  imports: [Card, LucideSquarePen],
  templateUrl: './teams.html',
  styleUrl: './teams.css',
})
export class Teams {
  pageName: string = 'Teams';
}
