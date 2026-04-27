import { Component, inject, signal } from '@angular/core';
import { Card } from '../../shared/card/card';
import { ViewDetailsButton } from '../../shared/components/view-details-button/view-details-button';
import { LucideSquarePen, LucideTrash } from '@lucide/angular';
import { RouterLink } from '@angular/router';
import { Statusbar } from '../../shared/components/statusbar/statusbar';
import { ProjectsServiceTs } from '../../core/services/projects.service.ts';
import { AddButton } from '../../shared/components/add-button/add-button';
import { ConfirmModal } from '../../shared/components/confirm-modal/confirm-modal';

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
    ConfirmModal,
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  pageName: string = 'Projects';
  private projectService = inject(ProjectsServiceTs);

  projects = this.projectService.getAllProjects();

  dateConverter(date: string) {
    return new Date(date).toISOString().split('T')[0];
  }

  ngOnInit() {
    this.projectService.loadProjects(); //  fetch from API
  }

  selectedProjectId = signal<number | null>(null);
  selectedName = signal<string>('');
  isModalOpen = signal(false);

  openModal(project: any) {
    this.selectedProjectId.set(project.id);
    this.selectedName.set(project.name);
    this.isModalOpen.set(true);
  }

  // ✅ CLOSE MODAL
  closeModal() {
    this.isModalOpen.set(false);
    this.selectedProjectId.set(null);
    this.selectedName.set('');
  }

  // ✅ CONFIRM DELETE
  handleConfirm() {
    const id = this.selectedProjectId();

    if (id !== null) {
      this.projectService.deleteProject(id);
    }

    this.closeModal();
  }
}
