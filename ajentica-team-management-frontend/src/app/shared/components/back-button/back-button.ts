import { Component } from '@angular/core';
import { LucideMoveLeft } from '@lucide/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-button',
  imports: [LucideMoveLeft],
  templateUrl: './back-button.html',
  styleUrl: './back-button.css',
})
export class BackButton {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
