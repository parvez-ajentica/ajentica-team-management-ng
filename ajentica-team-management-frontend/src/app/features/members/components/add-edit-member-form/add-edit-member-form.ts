import { Component, signal, computed, inject } from '@angular/core';
import { MultiSelect } from '../../../../shared/components/multi-select/multi-select';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { ActivatedRoute, Router } from '@angular/router';

import { TeamService } from '../../../../core/services/team.service';
import { MemberService } from '../../../../core/services/member.service';
import { ProjectsServiceTs } from '../../../../core/services/projects.service.ts';

@Component({
  selector: 'app-add-edit-member-form',
  imports: [MultiSelect, BackButton],
  templateUrl: './add-edit-member-form.html',
  styleUrl: './add-edit-member-form.css',
})
export class AddEditMemberForm {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  private teamService = inject(TeamService);
  private memberService = inject(MemberService);
  private projectService = inject(ProjectsServiceTs);

  memberId = Number(this.route.snapshot.paramMap.get('id'));
  isEditMode = computed(() => !!this.memberId);

  fullName = signal<string>('');
  email = signal<string>('');
  designation = signal<string>('');
  about = signal<string>('');
  selectedProjects = signal<number[]>([]);
  selectedTeams = signal<number[]>([]);

  teamsList = this.teamService.getAllTeams();
  projectsList = this.projectService.getAllProjects();

  pageName = computed(() => (this.isEditMode() ? 'Edit Member' : 'Add Member'));

  ngOnInit() {
    this.memberService.loadMembers();
    this.teamService.loadTeams();
    this.projectService.loadProjects();

    if (this.isEditMode()) {
      const member = this.memberService.getMemberById(this.memberId);

      if (member) {
        this.fullName.set(member.name);
        this.email.set(member.email);
        this.about.set(member.about);
        this.designation.set(member.designation);

        this.selectedProjects.set(member.projects.map((p: any) => p.id));
        this.selectedTeams.set(member.teams.map((t: any) => t.id));
      }
    }
  }

  setValue(signalRef: any, value: any) {
    signalRef.set(value);
  }

  // ======================
  // HANDLERS
  // ======================

  submit() {
    const payload = {
      name: this.fullName(),
      email: this.email(),
      designation: this.designation(),
      about: this.about(),
      teamIds: this.selectedTeams().map(Number),
      projectIds: this.selectedProjects().map(Number),
    };
    console.log('Payload', payload);

    if (this.isEditMode()) {
      this.memberService.updateMember(this.memberId, payload);
    } else {
      this.memberService.addMember(payload);
    }
    this.router.navigate(['/members']);
  }
}
