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
    this.api.create(project).subscribe((newProject) => {
      this.projects.update((prev) => [...prev, newProject]);
    });
  }

  //  Update
  updateProject(id: number, updated: any) {
    this.api.update(id, updated).subscribe(() => {
      this.projects.update((prev) => prev.map((p) => (p.id === id ? updated : p)));
    });
  }

  //  Delete
  deleteProject(id: number) {
    this.api.delete(id).subscribe(() => {
      this.projects.update((prev) => prev.filter((p) => p.id !== id));
    });
  }
}
