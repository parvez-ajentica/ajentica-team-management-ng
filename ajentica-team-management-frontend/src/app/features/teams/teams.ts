import { Component, signal, inject } from '@angular/core';
import { Card } from '../../shared/card/card';
import { LucideSquarePen, LucideTrash } from '@lucide/angular';
import { AddButton } from '../../shared/components/add-button/add-button';
import { RouterLink } from '@angular/router';
import { ViewDetailsButton } from '../../shared/components/view-details-button/view-details-button';
import { ConfirmModal } from '../../shared/components/confirm-modal/confirm-modal';
import { TeamService } from '../../core/services/team.service';

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

  private teamService = inject(TeamService);

  teams = this.teamService.getAllTeams();

  ngOnInit() {
    this.teamService.loadTeams();
    console.log('Teams signal:', this.teams);
    console.log('Teams value:', this.teams());
  }

  getMemberNames(team: any) {
    return team.members.map((m: any) => m.name).join(', ');
  }

  getProjectNames(team: any) {
    return team.projects.map((p: any) => p.name).join(', ');
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
