import { Component, signal, computed, input, inject } from '@angular/core';
import { MultiSelect } from '../../../../shared/components/multi-select/multi-select';
import { JsonPipe } from '@angular/common';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../../../../core/services/team.service';
import { ProjectsServiceTs } from '../../../../core/services/projects.service.ts';

@Component({
  selector: 'app-add-edit-project-form',
  imports: [MultiSelect, BackButton],
  templateUrl: './add-edit-project-form.html',
  styleUrl: './add-edit-project-form.css',
})
export class AddEditProjectForm {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  private teamService = inject(TeamService);
  private projectService = inject(ProjectsServiceTs);

  projectId = Number(this.route.snapshot.paramMap.get('id'));
  isEditMode = computed(() => !!this.projectId);

  projectName = signal<string>('');
  selectedTeams = signal<number[]>([]);
  deadline = signal<string>('');
  progress = signal<number | null>(null);

  teamList = this.teamService.getAllTeams();

  pageName = computed(() => (this.isEditMode() ? 'Edit Project' : 'Add Project'));

  ngOnInit() {
    this.teamService.loadTeams();
    this.projectService.loadProjects();

    if (this.isEditMode()) {
      const project = this.projectService.getProjectById(this.projectId);

      if (project) {
        this.projectName.set(project.name);

        this.selectedTeams.set(project.teams?.map((t: any) => t.id) ?? []);

        this.deadline.set(this.dateConverter(project.deadline) ?? '');
        this.progress.set(project.progress ?? 0);
      }
    }
  }
  // ======================
  // HANDLERS
  // ======================

  setValue(signalFn: any, value: string) {
    signalFn.set(value);
  }
  dateConverter(date: string) {
    return new Date(date).toISOString().split('T')[0];
  }
  setDate(value: string) {
    this.deadline.set(value ? new Date(value).toISOString().split('T')[0] : '');
  }

  setProgress(value: string) {
    this.progress.set(value ? Number(value) : null);
  }

  submit() {
    const payload = {
      name: this.projectName(),
      teamIds: this.selectedTeams().map(Number), // 🔥 important
      deadline: new Date(this.deadline()).toISOString(),
      progress: Number(this.progress() ?? 0),
    };

    console.log('PROJECT PAYLOAD:', payload);

    if (this.isEditMode()) {
      this.projectService.updateProject(this.projectId, payload);
    } else {
      this.projectService.addProject(payload);
    }

    this.router.navigate(['/projects']);
  }
}
