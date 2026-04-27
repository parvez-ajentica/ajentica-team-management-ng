import { inject, Injectable, signal } from '@angular/core';
import { ProjectsApi } from './api/projects.api';

@Injectable({
  providedIn: 'root',
})
export class ProjectsServiceTs {
  private api = inject(ProjectsApi);

  private projects = signal<any[]>([]);
  projects$ = this.projects.asReadonly();

  //  Load from API
  loadProjects() {
    this.api.getAll().subscribe((data) => {
      this.projects.set(data);
    });
  }

  getAllProjects() {
    return this.projects$;
  }

  getProjectById(id: number) {
    return this.projects().find((p) => p.id === id);
  }

  //  Create
  addProject(project: any) {
    this.api.create(project).subscribe(() => {
      this.loadProjects();
    });
  }

  //  Update
  updateProject(id: number, project: any) {
    this.api.update(id, project).subscribe(() => {
      this.loadProjects(); // 🔥 keeps UI updated
    });
  }

  //  Delete
  deleteProject(id: number) {
    this.api.delete(id).subscribe(() => {
      this.projects.update((prev) => prev.filter((p) => p.id !== id));
    });
  }
}
