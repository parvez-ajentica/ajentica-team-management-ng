import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProjectDetailsPage } from './view-project-details-page';

describe('ViewProjectDetailsPage', () => {
  let component: ViewProjectDetailsPage;
  let fixture: ComponentFixture<ViewProjectDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewProjectDetailsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewProjectDetailsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
