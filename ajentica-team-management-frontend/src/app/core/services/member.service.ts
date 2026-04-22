import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private members = signal([
    {
      id: 1,
      name: 'John Doe',
      role: 'Senior Frontend Engineer',
      teams: ['Frontend Team'],
      projects: ['Rethink BH'],
    },
    {
      id: 2,
      name: 'Alice Smith',
      role: 'Backend Developer',
      teams: ['API Team'],
      projects: ['Payment Gateway'],
    },
    {
      id: 3,
      name: 'Bob Johnson',
      role: 'UI Designer',
      teams: ['Design Team'],
      projects: ['Website Redesign'],
    },
  ]);

  getAllMembers() {
    return this.members; // ✅ return signal
  }
}
