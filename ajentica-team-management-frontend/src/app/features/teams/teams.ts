import { Component } from '@angular/core';
import { Card } from '../../shared/card/card';
import { LucideSquarePen, LucideTrash } from '@lucide/angular';
import { AddButton } from '../../shared/components/add-button/add-button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-teams',
  imports: [Card, LucideSquarePen, LucideTrash, AddButton, AddButton, RouterLink],
  templateUrl: './teams.html',
  styleUrl: './teams.css',
})
export class Teams {
  pageName: string = 'Teams';
}
