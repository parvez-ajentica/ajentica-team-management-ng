import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMemberPage } from './add-member-page';

describe('AddMemberPage', () => {
  let component: AddMemberPage;
  let fixture: ComponentFixture<AddMemberPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMemberPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AddMemberPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
