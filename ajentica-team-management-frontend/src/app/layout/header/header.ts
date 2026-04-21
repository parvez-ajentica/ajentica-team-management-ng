import { Component } from '@angular/core';
import { LucideBell } from '@lucide/angular';
import { ImagePlaceholder } from '../../shared/components/image-placeholder/image-placeholder';

@Component({
  selector: 'app-header',
  imports: [LucideBell, ImagePlaceholder],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
