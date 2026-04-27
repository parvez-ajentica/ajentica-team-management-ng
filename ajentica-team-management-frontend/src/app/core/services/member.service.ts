import { inject, Injectable, signal } from '@angular/core';
import { MembersApi } from './api/members.api';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private api = inject(MembersApi);

  private members = signal<any[]>([]);
  members$ = this.members.asReadonly();

  private apiError = signal<any>(null);
  apiError$ = this.apiError.asReadonly();

  loadMembers() {
    this.apiError.set(null);
    this.api.getAll().subscribe({
      next: (data) => {
        this.members.set(data);
      },
      error: (error) => {
        this.apiError.set(error);
      },
    });
  }

  getAllMembers() {
    return this.members$;
  }

  getMemberById(id: number) {
    return this.members().find((m) => m.id === id);
  }

  addMember(member: any) {
    this.api.create(member).subscribe(() => {
      this.loadMembers();
    });
  }
  updateMember(id: number, updated: any) {
    this.api.update(id, updated).subscribe(() => {
      this.loadMembers();
    });
  }

  deleteMember(id: number) {
    this.api.delete(id).subscribe(() => {
      this.members.update((prev) => prev.filter((m) => m.id !== id));
    });
  }
}
