import { Component } from '@angular/core';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-members',
  imports: [Card],
  templateUrl: './members.html',
  styleUrl: './members.css',
})
export class Members {
  pageName: string = 'Members';
}
