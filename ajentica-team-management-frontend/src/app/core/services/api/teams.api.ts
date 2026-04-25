import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamsApi {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8080/api/teams';

  getAll() {
    return this.http.get<any[]>(this.baseUrl);
  }

  getById(id: number) {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  create(team: any) {
    return this.http.post(this.baseUrl, team);
  }

  update(id: number, team: any) {
    return this.http.put(`${this.baseUrl}/${id}`, team);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
