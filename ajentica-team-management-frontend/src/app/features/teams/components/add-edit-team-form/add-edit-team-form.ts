import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-add-edit-team-form',
  imports: [],
  templateUrl: './add-edit-team-form.html',
  styleUrl: './add-edit-team-form.css',
})
export class AddEditTeamForm {
  teamName = signal<string>('');
  lead = signal<number | null>(null);
  projects = signal<number[]>([]);
  members = signal<number[]>([]);

  leads = signal([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]);

  projectList = signal([
    { id: 1, name: 'Project A' },
    { id: 2, name: 'Project B' },
    { id: 3, name: 'Project C' },
  ]);

  memberList = signal([
    { id: 1, name: 'Dev 1' },
    { id: 2, name: 'Dev 2' },
    { id: 3, name: 'Dev 3' },
    { id: 4, name: 'Dev 3' },
    { id: 5, name: 'Dev 3' },
    { id: 6, name: 'Dev 3' },
    { id: 7, name: 'Dev 3' },
  ]);

  formValue = computed(() => ({
    teamName: this.teamName(),
    lead: this.lead(),
    projects: this.projects(),
    members: this.members(),
  }));

  setTeamName(value: string) {
    this.teamName.set(value);
  }

  setLead(value: string) {
    this.lead.set(value ? Number(value) : null);
  }

  setProjectsFromSelect(event: Event) {
    const select = event.target as HTMLSelectElement;
    const values = Array.from(select.selectedOptions).map((opt) => Number(opt.value));
    this.projects.set(values);
  }

  setMembersFromSelect(event: Event) {
    const select = event.target as HTMLSelectElement;
    const values = Array.from(select.selectedOptions).map((opt) => Number(opt.value));
    this.members.set(values);
  }

  submit() {
    console.log('submit button clicked');
    console.log('Final Form:', this.formValue());
  }
}
