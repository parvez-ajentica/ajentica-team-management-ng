import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeamPage } from './edit-team-page';

describe('EditTeamPage', () => {
  let component: EditTeamPage;
  let fixture: ComponentFixture<EditTeamPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTeamPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditTeamPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
