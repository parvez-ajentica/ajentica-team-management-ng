import { Component, signal } from '@angular/core';
import { Header } from './layout/header/header';
import { Sidebar } from './layout/sidebar/sidebar';
import { RouterOutlet } from '@angular/router';
import { Loading } from './shared/components/loading/loading';

@Component({
  selector: 'app-root',
  imports: [Header, Sidebar, RouterOutlet, Loading],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ajentica-team-management-frontend');
}
