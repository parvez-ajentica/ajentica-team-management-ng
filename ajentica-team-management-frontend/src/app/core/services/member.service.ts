import { inject, Injectable, signal } from '@angular/core';
import { MembersApi } from './api/members.api';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private api = inject(MembersApi);

  private members = signal<any[]>([]);
  members$ = this.members.asReadonly();

  loadMembers() {
    this.api.getAll().subscribe((data) => {
      this.members.set(data);
    });
  }

  getAllMembers() {
    return this.members$;
  }

  getMemberById(id: number) {
    return this.members().find((m) => m.id === id);
  }

  addMember(member: any) {
    this.api.create(member).subscribe((newMember) => {
      this.members.update((prev) => [...prev, newMember]);
    });
  }
  updateMember(id: number, updated: any) {
    this.api.update(id, updated).subscribe(() => {
      this.members.update((prev) => prev.map((m) => (m.id === id ? updated : m)));
    });
  }

  deleteMember(id: number) {
    this.api.delete(id).subscribe(() => {
      this.members.update((prev) => prev.filter((m) => m.id !== id));
    });
  }
}
