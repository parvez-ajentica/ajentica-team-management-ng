import { Component, input } from '@angular/core';
import { LucideCirclePlus, LucideTrash } from '@lucide/angular';

@Component({
  selector: 'app-add-button',
  imports: [LucideCirclePlus],
  templateUrl: './add-button.html',
  styleUrl: './add-button.css',
})
export class AddButton {
  label = input<string>('');
}
