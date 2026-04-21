import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailsButton } from './view-details-button';

describe('ViewDetailsButton', () => {
  let component: ViewDetailsButton;
  let fixture: ComponentFixture<ViewDetailsButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewDetailsButton],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewDetailsButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
