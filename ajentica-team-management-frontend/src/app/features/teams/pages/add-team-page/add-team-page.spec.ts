import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamPage } from './add-team-page';

describe('AddTeamPage', () => {
  let component: AddTeamPage;
  let fixture: ComponentFixture<AddTeamPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTeamPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AddTeamPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
