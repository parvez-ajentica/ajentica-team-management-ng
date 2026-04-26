import { Component, signal, computed, input, inject, effect } from '@angular/core';
import { MultiSelect } from '../../../../shared/components/multi-select/multi-select';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../../../../core/services/team.service';
import { MemberService } from '../../../../core/services/member.service';
import { ProjectsServiceTs } from '../../../../core/services/projects.service.ts';

@Component({
  selector: 'app-add-edit-team-form',
  imports: [MultiSelect, BackButton],
  templateUrl: './add-edit-team-form.html',
  styleUrl: './add-edit-team-form.css',
})
export class AddEditTeamForm {
  // pageName = input<string>('');

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  private teamService = inject(TeamService);
  private memberService = inject(MemberService);
  private projectService = inject(ProjectsServiceTs);

  teamId = Number(this.route.snapshot.paramMap.get('id'));
  isEditMode = computed(() => !!this.teamId);

  teamName = signal<string>('');
  lead = signal<number | ''>('');
  leadName = signal<string>('');
  selectedProjects = signal<number[]>([]);
  selectedMembers = signal<number[]>([]);

  membersList = this.memberService.getAllMembers();
  projectsList = this.projectService.getAllProjects();

  showLeadWarning = signal(false);

  isLeadDisabled = computed(() => this.selectedMembers().length === 0);

  leadOptions = computed(() => {
    const selectedIds = this.selectedMembers();

    return this.membersList().filter((m: any) => selectedIds.includes(m.id));
  });

  pageName = computed(() => (this.isEditMode() ? 'Edit Team' : 'Add Team'));

  ngOnInit() {
    // load data
    this.memberService.loadMembers();
    this.projectService.loadProjects();

    // edit mode preload
    if (this.isEditMode()) {
      const team = this.teamService.getTeamById(this.teamId);

      if (team) {
        this.teamName.set(team.name);

        this.selectedMembers.set(team.members.map((m: any) => m.id));
        this.selectedProjects.set(team.projects.map((p: any) => p.id));
        this.leadName.set(team.lead.name);

        this.lead.set(team.lead?.id || '');
      }
    }
  }

  setValue(signalRef: any, value: any) {
    signalRef.set(value);
  }
  setLead(value: string) {
    this.lead.set(value ? Number(value) : '');
  }

  handleLeadClick() {
    if (this.isLeadDisabled()) {
      this.showLeadWarning.set(true);

      setTimeout(() => this.showLeadWarning.set(false), 2000);
    }
  }
  constructor() {
    effect(() => {
      const selected = this.selectedMembers();
      const currentLead = this.lead();

      if (currentLead && !selected.includes(currentLead)) {
        this.lead.set('');
      }
    });
  }

  submit() {
    if (!this.lead()) {
      alert('Please select a team lead');
      return;
    }

    const payload = {
      name: this.teamName(),
      lead: this.lead(), // ✅ guaranteed number
      memberIds: this.selectedMembers(),
      projectIds: this.selectedProjects(),
    };

    console.log('FINAL PAYLOAD:', payload);

    if (this.isEditMode()) {
      this.teamService.updateTeam(this.teamId, payload);
    } else {
      this.teamService.addTeam(payload);
    }

    this.router.navigate(['/teams']);
  }
}
