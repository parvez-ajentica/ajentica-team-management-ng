import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProjectForm } from './add-edit-project-form';

describe('AddEditProjectForm', () => {
  let component: AddEditProjectForm;
  let fixture: ComponentFixture<AddEditProjectForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditProjectForm],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEditProjectForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
