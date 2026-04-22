import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private teams = signal([
    {
      id: 1,
      name: 'Team Alpha',
      lead: {
        name: 'John Doe',
        role: 'Senior Frontend Engineer',
      },
      members: [
        { id: 1, name: 'Alice', role: 'Backend Dev' },
        { id: 2, name: 'Bob', role: 'UI Designer' },
      ],
      projects: [
        {
          id: 1,
          name: 'Project Apollo',
          deadline: '2026-12-31',
        },
      ],
    },
    {
      id: 2,
      name: 'Team Beta',
      lead: { name: 'Jane Smith', role: 'Lead Dev' },
      members: [{ id: 2, name: 'Bob', role: 'UI' }],
      projects: [{ id: 2, name: 'Zeus', deadline: '2027' }],
    },
  ]);

  getTeamById(id: number) {
    return this.teams().find((team) => team.id === id);
  }

  getAllTeams() {
    return this.teams;
  }
}
