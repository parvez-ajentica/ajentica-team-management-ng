import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberMainPage } from './member-main-page';

describe('MemberMainPage', () => {
  let component: MemberMainPage;
  let fixture: ComponentFixture<MemberMainPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberMainPage],
    }).compileComponents();

    fixture = TestBed.createComponent(MemberMainPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
