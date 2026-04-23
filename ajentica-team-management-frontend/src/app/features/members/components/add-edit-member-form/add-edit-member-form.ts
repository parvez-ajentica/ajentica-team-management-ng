import { Component, signal, computed } from '@angular/core';
import { MultiSelect } from '../../../../shared/components/multi-select/multi-select';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-add-edit-member-form',
  imports: [MultiSelect, JsonPipe],
  templateUrl: './add-edit-member-form.html',
  styleUrl: './add-edit-member-form.css',
})
export class AddEditMemberForm {
  fullName = signal('');
  email = signal('');
  designation = signal('');
  about = signal('');

  teams = signal<number[]>([]);
  projects = signal<number[]>([]);

  // ======================
  // DATA
  // ======================

  teamList = signal([
    { id: 1, name: 'Frontend Team' },
    { id: 2, name: 'Backend Team' },
    { id: 3, name: 'Design Team' },
  ]);

  projectList = signal([
    { id: 1, name: 'Project A' },
    { id: 2, name: 'Project B' },
    { id: 3, name: 'Project C' },
  ]);

  // ======================
  // DERIVED STATE
  // ======================

  formValue = computed(() => ({
    fullName: this.fullName(),
    email: this.email(),
    designation: this.designation(),
    about: this.about(),
    teams: this.teams(),
    projects: this.projects(),
  }));

  // ======================
  // HANDLERS
  // ======================

  setValue(signalFn: any, value: string) {
    signalFn.set(value);
  }

  submit() {
    console.log('Member Form:', this.formValue());
  }
}
