import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ProjectsApi {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/projects`;

  getAll() {
    return this.http.get<any[]>(this.baseUrl);
  }

  getById(id: number) {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  create(project: any) {
    return this.http.post(this.baseUrl, project);
  }

  update(id: number, project: any) {
    return this.http.put(`${this.baseUrl}/${id}`, project);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
