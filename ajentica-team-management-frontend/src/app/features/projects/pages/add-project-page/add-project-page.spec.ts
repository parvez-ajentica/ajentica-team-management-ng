import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectPage } from './add-project-page';

describe('AddProjectPage', () => {
  let component: AddProjectPage;
  let fixture: ComponentFixture<AddProjectPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProjectPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AddProjectPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
