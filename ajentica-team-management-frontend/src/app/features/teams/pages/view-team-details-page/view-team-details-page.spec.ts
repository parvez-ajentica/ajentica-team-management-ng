import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTeamDetailsPage } from './view-team-details-page';

describe('ViewTeamDetailsPage', () => {
  let component: ViewTeamDetailsPage;
  let fixture: ComponentFixture<ViewTeamDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTeamDetailsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewTeamDetailsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
