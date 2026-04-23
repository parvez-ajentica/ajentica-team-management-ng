import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsServiceTs {
  private projects = signal([
    {
      id: 1,
      name: 'Project A',
      teams: ['Frontend Team', 'Engineering Team'],
      progress: 75,
      deadline: '06/24/2026',
    },
    {
      id: 2,
      name: 'Project B',
      teams: ['API Team', ' Backend Team'],
      progress: 45,
      deadline: '08/10/2026',
    },
    {
      id: 3,
      name: 'Project C',
      teams: ['Design Team', 'Frontend Team'],
      progress: 90,
      deadline: '05/01/2026',
    },
  ]);

  getAllProjects() {
    return this.projects; // ✅ signal
  }

  getProjectById(id: number) {
    return this.projects().find((p) => p.id === id);
  }
}
