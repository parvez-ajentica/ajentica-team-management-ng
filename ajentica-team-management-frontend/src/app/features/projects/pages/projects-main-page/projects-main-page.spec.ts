import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsMainPage } from './projects-main-page';

describe('ProjectsMainPage', () => {
  let component: ProjectsMainPage;
  let fixture: ComponentFixture<ProjectsMainPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsMainPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsMainPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
