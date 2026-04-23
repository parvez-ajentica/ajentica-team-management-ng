import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMemberPage } from './edit-member-page';

describe('EditMemberPage', () => {
  let component: EditMemberPage;
  let fixture: ComponentFixture<EditMemberPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMemberPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditMemberPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
