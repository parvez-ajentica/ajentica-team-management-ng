import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTeamForm } from './add-edit-team-form';

describe('AddEditTeamForm', () => {
  let component: AddEditTeamForm;
  let fixture: ComponentFixture<AddEditTeamForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditTeamForm],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEditTeamForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
