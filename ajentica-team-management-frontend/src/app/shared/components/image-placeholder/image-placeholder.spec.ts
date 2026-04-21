import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePlaceholder } from './image-placeholder';

describe('ImagePlaceholder', () => {
  let component: ImagePlaceholder;
  let fixture: ComponentFixture<ImagePlaceholder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagePlaceholder],
    }).compileComponents();

    fixture = TestBed.createComponent(ImagePlaceholder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
