import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMainPage } from './team-main-page';

describe('TeamMainPage', () => {
  let component: TeamMainPage;
  let fixture: ComponentFixture<TeamMainPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamMainPage],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamMainPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
