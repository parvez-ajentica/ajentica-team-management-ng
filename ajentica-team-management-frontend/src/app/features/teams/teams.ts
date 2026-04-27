import { Component, signal, inject } from '@angular/core';
import { Card } from '../../shared/card/card';
import { LucideSquarePen, LucideTrash } from '@lucide/angular';
import { AddButton } from '../../shared/components/add-button/add-button';
import { RouterLink } from '@angular/router';
import { ViewDetailsButton } from '../../shared/components/view-details-button/view-details-button';
import { ConfirmModal } from '../../shared/components/confirm-modal/confirm-modal';
import { TeamService } from '../../core/services/team.service';
import { ApiError } from '../../shared/components/api-error/api-error';

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
    ApiError,
  ],
  templateUrl: './teams.html',
  styleUrl: './teams.css',
})
export class Teams {
  pageName: string = 'Teams';

  private teamService = inject(TeamService);

  teams = this.teamService.getAllTeams();
  apiError = this.teamService.apiError$;

  ngOnInit() {
    this.teamService.loadTeams();
  }

  selectedTeamId = signal<number | null>(null);
  selectedName = signal<string>('');
  isModalOpen = signal(false);

  // ✅ OPEN MODAL
  openModal(team: any) {
    this.selectedTeamId.set(team.id);
    this.selectedName.set(team.name);
    this.isModalOpen.set(true);
  }

  // ✅ CLOSE MODAL
  closeModal() {
    this.isModalOpen.set(false);
    this.selectedTeamId.set(null);
    this.selectedName.set('');
  }

  // ✅ CONFIRM DELETE
  handleConfirm() {
    const id = this.selectedTeamId();

    if (id !== null) {
      this.teamService.deleteTeam(id);
    }

    this.closeModal();
  }

  // ✅ RETRY LOADING
  handleRetry() {
    this.teamService.loadTeams();
  }
}
