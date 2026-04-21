import { Component } from '@angular/core';
import { Card } from '../../shared/card/card';
import { LucideCirclePlus, LucideSquarePen, LucideTrash } from '@lucide/angular';

@Component({
  selector: 'app-teams',
  imports: [Card, LucideSquarePen, LucideTrash, LucideCirclePlus],
  templateUrl: './teams.html',
  styleUrl: './teams.css',
})
export class Teams {
  pageName: string = 'Teams';
}
