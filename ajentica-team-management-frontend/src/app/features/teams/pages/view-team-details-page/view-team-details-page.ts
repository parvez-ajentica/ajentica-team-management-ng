import { Component, inject, computed } from '@angular/core';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { EditButton } from '../../../../shared/components/edit-button/edit-button';
import { Card } from '../../../../shared/card/card';
import { ProfileInfo } from '../../../../shared/components/profile-info/profile-info';
import { ViewDetailsButton } from '../../../../shared/components/view-details-button/view-details-button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TeamService } from '../../../../core/services/team.service';
import { Statusbar } from '../../../../shared/components/statusbar/statusbar';

@Component({
  selector: 'app-view-team-details-page',
  imports: [BackButton, EditButton, Card, ProfileInfo, ViewDetailsButton, RouterLink, Statusbar],
  templateUrl: './view-team-details-page.html',
  styleUrl: './view-team-details-page.css',
})
export class ViewTeamDetailsPage {
  pageName: string = 'Frontend Team';
  private route = inject(ActivatedRoute);
  private teamService = inject(TeamService);

  ngOnInit() {
    this.teamService.loadTeams();
  }

  team = computed(() => {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.teamService.getTeamById(id);
  });
}
