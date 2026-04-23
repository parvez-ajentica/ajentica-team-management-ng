import { Component, inject } from '@angular/core';
import { Card } from '../../shared/card/card';
import { ViewDetailsButton } from '../../shared/components/view-details-button/view-details-button';
import { LucideSquarePen, LucideTrash } from '@lucide/angular';
import { RouterLink } from '@angular/router';
import { Statusbar } from '../../shared/components/statusbar/statusbar';
import { ProjectsServiceTs } from '../../core/services/projects.service.ts';
import { AddButton } from '../../shared/components/add-button/add-button';

@Component({
  selector: 'app-projects',
  imports: [
    Card,
    ViewDetailsButton,
    LucideSquarePen,
    LucideTrash,
    RouterLink,
    Statusbar,
    AddButton,
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  pageName: string = 'Projects';
  private projectService = inject(ProjectsServiceTs);

  projects = this.projectService.getAllProjects();
}
