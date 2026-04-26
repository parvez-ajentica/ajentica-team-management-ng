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

  selectedMemberId = signal<number | null>(null);
  selectedName = signal<string>('');
  isModalOpen = signal(false);

  openModal(member: any) {
    this.selectedMemberId.set(member.id);
    this.selectedName.set(member.name);
    this.isModalOpen.set(true);
  }

  // ✅ CLOSE MODAL
  closeModal() {
    this.isModalOpen.set(false);
    this.selectedMemberId.set(null);
    this.selectedName.set('');
  }

  // ✅ CONFIRM DELETE
  handleConfirm() {
    const id = this.selectedMemberId();

    if (id !== null) {
      this.memberService.deleteMember(id);
    }

    this.closeModal();
  }
}
