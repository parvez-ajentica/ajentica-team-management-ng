import { Component, inject, computed } from '@angular/core';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { EditButton } from '../../../../shared/components/edit-button/edit-button';
import { Card } from '../../../../shared/card/card';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MemberService } from '../../../../core/services/member.service';

@Component({
  selector: 'app-view-member-details-page',
  imports: [BackButton, EditButton, Card, RouterLink],
  templateUrl: './view-member-details-page.html',
  styleUrl: './view-member-details-page.css',
})
export class ViewMemberDetailsPage {
  private route = inject(ActivatedRoute);
  private memberService = inject(MemberService);

  member = computed(() => {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.memberService.getMemberById(id);
  });
}
