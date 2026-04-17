import { Component, signal } from '@angular/core';
import { Header } from './layout/header/header/header';

@Component({
  selector: 'app-root',
  imports: [Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ajentica-team-management-frontend');
}
