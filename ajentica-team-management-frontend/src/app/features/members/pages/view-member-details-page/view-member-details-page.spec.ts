import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMemberDetailsPage } from './view-member-details-page';

describe('ViewMemberDetailsPage', () => {
  let component: ViewMemberDetailsPage;
  let fixture: ComponentFixture<ViewMemberDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMemberDetailsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewMemberDetailsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
