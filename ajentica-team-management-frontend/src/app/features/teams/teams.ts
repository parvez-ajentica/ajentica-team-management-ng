import { Component, signal } from '@angular/core';
import { Card } from '../../shared/card/card';
import { LucideSquarePen, LucideTrash } from '@lucide/angular';
import { AddButton } from '../../shared/components/add-button/add-button';
import { RouterLink } from '@angular/router';
import { ViewDetailsButton } from '../../shared/components/view-details-button/view-details-button';
import { ConfirmModal } from '../../shared/components/confirm-modal/confirm-modal';

@Component({
  selector: 'app-teams',
  imports: [
    Card,
    LucideSquarePen,
    LucideTrash,
    AddButton,
    AddButton,
    RouterLink,
    ViewDetailsButton,
    ConfirmModal,
  ],
  templateUrl: './teams.html',
  styleUrl: './teams.css',
})
export class Teams {
  pageName: string = 'Teams';

  teams = signal([
    {
      id: 1,
      name: 'Team Alpha',
      lead: 'John Doe',
      members: ['Alice', 'Bob'],
      projects: ['Project Apollo'],
    },
    {
      id: 2,
      name: 'Team Beta',
      lead: 'Jane Smith',
      members: ['Charlie'],
      projects: ['Website Redesign'],
    },
  ]);

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
