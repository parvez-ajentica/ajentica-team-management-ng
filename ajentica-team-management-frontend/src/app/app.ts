import { Component, signal } from '@angular/core';
import { Header } from './layout/header/header/header';
import { Sidebar } from './layout/sidebar/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [Header, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ajentica-team-management-frontend');
}
