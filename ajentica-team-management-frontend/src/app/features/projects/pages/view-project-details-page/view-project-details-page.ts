import { Component, inject, computed } from '@angular/core';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { EditButton } from '../../../../shared/components/edit-button/edit-button';
import { Card } from '../../../../shared/card/card';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectsServiceTs } from '../../../../core/services/projects.service.ts';

@Component({
  selector: 'app-view-project-details-page',
  imports: [BackButton, EditButton, Card, RouterLink],
  templateUrl: './view-project-details-page.html',
  styleUrl: './view-project-details-page.css',
})
export class ViewProjectDetailsPage {
  private route = inject(ActivatedRoute);
  private projectService = inject(ProjectsServiceTs);

  project = computed(() => {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.projectService.getProjectById(id);
  });
}
