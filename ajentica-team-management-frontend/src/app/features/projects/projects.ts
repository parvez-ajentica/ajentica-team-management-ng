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

  ngOnInit() {
    this.projectService.loadProjects(); //  fetch from API
  }

  isModalOpen = signal(false);
  selectedName = signal('');

  openModal(name: string) {
    this.selectedName.set(name);
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  handleConfirm() {
    console.log('Confirmed delete for:', this.selectedName());
    this.closeModal();
  }
}
