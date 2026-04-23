import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsServiceTs {
  private projects = signal([
    {
      id: 1,
      name: 'Project A',
      teams: ['Frontend Team', 'Backend Team'],
      progress: 75,
      deadline: '12/31/2026',
      overview: 'Project Rethink Care is focused on building core platform features.',
      members: ['John Doe', 'Jane Doe', 'Uchiha Itachi', 'Alice Gray', 'Ali Karim', 'Bob Niller'],
      timeline: 'Milestone 1 - Complete, Milestone 2 - In progress',
      activity: ['Alice pushed changes • 1 day ago', 'Bob updated design • 3 days ago'],
    },
    {
      id: 2,
      name: 'Project B',
      teams: ['API Team', 'Fronent Team'],
      progress: 65,
      deadline: '08/10/2026',
      overview: 'Backend restructuring project.',
      members: ['Alice', 'Bob'],
      timeline: 'Phase 1 ongoing',
      activity: ['API updated • today'],
    },
    {
      id: 3,
      name: 'Project C',
      teams: ['API Team', 'Engineering Team'],
      progress: 45,
      deadline: '12/10/2026',
      overview: 'Backend Building project.',
      members: ['Alice Gray', 'Boby Fisher', 'Arther Shelby', 'Sirious Black'],
      timeline: 'Milestone-4 ongoing',
      activity: ['API updated • today', 'Arthur updated the backend'],
    },
  ]);

  getAllProjects() {
    return this.projects; // ✅ signal
  }

  getProjectById(id: number) {
    return this.projects().find((p) => p.id === id);
  }
}
