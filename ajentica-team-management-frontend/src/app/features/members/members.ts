import { Component, inject, signal } from '@angular/core';
import { Card } from '../../shared/card/card';
import { ProfileInfo } from '../../shared/components/profile-info/profile-info';
import { ViewDetailsButton } from '../../shared/components/view-details-button/view-details-button';
import { MemberService } from '../../core/services/member.service';

@Component({
  selector: 'app-members',
  imports: [Card, ProfileInfo, ViewDetailsButton],
  templateUrl: './members.html',
  styleUrl: './members.css',
})
export class Members {
  pageName: string = 'Members';

  private memberService = inject(MemberService);

  members = this.memberService.getAllMembers();
}
