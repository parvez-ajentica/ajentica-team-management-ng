import { Component, signal, computed, input } from '@angular/core';
import { MultiSelect } from '../../../../shared/components/multi-select/multi-select';
import { JsonPipe } from '@angular/common';
import { BackButton } from '../../../../shared/components/back-button/back-button';

@Component({
  selector: 'app-add-edit-project-form',
  imports: [MultiSelect, BackButton],
  templateUrl: './add-edit-project-form.html',
  styleUrl: './add-edit-project-form.css',
})
export class AddEditProjectForm {
  pageName = input<string>('');
  projectName = signal('');
  dueDate = signal(''); // yyyy-mm-dd
  progress = signal<number | null>(null);

  teams = signal<number[]>([]);

  // ======================
  // DATA
  // ======================

  teamList = signal([
    { id: 1, name: 'Frontend Team' },
    { id: 2, name: 'Backend Team' },
    { id: 3, name: 'Design Team' },
  ]);

  // ======================
  // DERIVED STATE
  // ======================

  formValue = computed(() => ({
    projectName: this.projectName(),
    dueDate: this.dueDate(),
    progress: this.progress(),
    teams: this.teams(),
  }));

  // ======================
  // HANDLERS
  // ======================

  setValue(signalFn: any, value: string) {
    signalFn.set(value);
  }

  setProgress(value: string) {
    this.progress.set(value ? Number(value) : null);
  }

  submit() {
    console.log('Project Form:', this.formValue());
  }
}
