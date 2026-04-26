import { Component, inject, signal } from '@angular/core';
import { Card } from '../../shared/card/card';
import { ProfileInfo } from '../../shared/components/profile-info/profile-info';
import { ViewDetailsButton } from '../../shared/components/view-details-button/view-details-button';
import { MemberService } from '../../core/services/member.service';
import { RouterLink } from '@angular/router';
import { LucideSquarePen, LucideTrash } from '@lucide/angular';
import { ConfirmModal } from '../../shared/components/confirm-modal/confirm-modal';
import { AddButton } from '../../shared/components/add-button/add-button';

@Component({
  selector: 'app-members',
  imports: [
    Card,
    ProfileInfo,
    ViewDetailsButton,
    RouterLink,
    LucideSquarePen,
    LucideTrash,
    ConfirmModal,
    AddButton,
  ],
  templateUrl: './members.html',
  styleUrl: './members.css',
})
export class Members {
  pageName: string = 'Members';

  private memberService = inject(MemberService);

  members = this.memberService.getAllMembers();

  ngOnInit() {
    this.memberService.loadMembers();
    console.log('The Member signal', this.members);
    console.log('The member Value', this.members());
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
