import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMemberForm } from './add-edit-member-form';

describe('AddEditMemberForm', () => {
  let component: AddEditMemberForm;
  let fixture: ComponentFixture<AddEditMemberForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditMemberForm],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEditMemberForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
