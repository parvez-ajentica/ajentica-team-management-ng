import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {
  errorCode: string = '404';
  errorTitle: string = 'Page Not Found';
  errorMessage: string = 'The page you are looking for does not exist or has been moved.';

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
