import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private members = signal([
    {
      id: 1,
      name: 'John Doe',
      designation: 'Senior Frontend Engineer',
      email: 'john@doe.com',
      about: 'Full-stack developer with 14 years of experience',
      teams: ['Frontend Team'],
      projects: ['Project A'],
      activity: ['Edited task "Implement auth" • 2 days ago', 'Commented on PR #42 • 5 days ago'],
    },
    {
      id: 2,
      name: 'Alice',
      designation: 'Backend Developer',
      email: 'alice@mail.com',
      about: 'API specialist',
      teams: ['API Team'],
      projects: ['Payment System'],
      activity: ['Created new endpoint • 1 day ago'],
    },
  ]);

  getAllMembers() {
    return this.members; // ✅ signal
  }

  getMemberById(id: number) {
    return this.members().find((m) => m.id === id);
  }
}
