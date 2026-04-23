import { Component } from '@angular/core';
import { Card } from '../../shared/card/card';
import { ViewDetailsButton } from '../../shared/components/view-details-button/view-details-button';
import { LucideSquarePen, LucideTrash } from '@lucide/angular';
import { RouterLink } from '@angular/router';
import { Statusbar } from '../../shared/components/statusbar/statusbar';

@Component({
  selector: 'app-projects',
  imports: [Card, ViewDetailsButton, LucideSquarePen, LucideTrash, RouterLink, Statusbar],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  pageName: string = 'Projects';
}
