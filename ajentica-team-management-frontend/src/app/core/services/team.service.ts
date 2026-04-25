import { Injectable, signal, inject } from '@angular/core';
import { TeamsApi } from './api/teams.api';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private api = inject(TeamsApi);

  private teams = signal<any[]>([]);
  teams$ = this.teams.asReadonly();

  // ✅ Load from API
  loadTeams() {
    this.api.getAll().subscribe((data) => {
      this.teams.set(data);
    });
  }

  getAllTeams() {
    return this.teams$;
  }

  getTeamById(id: number) {
    return this.teams().find((t) => t.id === id);
  }

  // ✅ Create
  addTeam(team: any) {
    this.api.create(team).subscribe((newTeam) => {
      this.teams.update((prev) => [...prev, newTeam]);
    });
  }

  // ✅ Update
  updateTeam(id: number, updated: any) {
    this.api.update(id, updated).subscribe(() => {
      this.teams.update((prev) => prev.map((t) => (t.id === id ? updated : t)));
    });
  }

  // ✅ Delete
  deleteTeam(id: number) {
    this.api.delete(id).subscribe(() => {
      this.teams.update((prev) => prev.filter((t) => t.id !== id));
    });
  }
}
