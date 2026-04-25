import { Component, input } from '@angular/core';
import { ImagePlaceholder } from '../image-placeholder/image-placeholder';

@Component({
  selector: 'app-profile-info',
  imports: [ImagePlaceholder],
  templateUrl: './profile-info.html',
  styleUrl: './profile-info.css',
})
export class ProfileInfo {
  user = input<{ id: number; name: string; email: string; designation: string; about: string }>();
}
