import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-statusbar',
  imports: [],
  templateUrl: './statusbar.html',
  styleUrl: './statusbar.css',
})
export class Statusbar {
  value = input<number>(0);

  label = input<string>('');

  clampedValue = computed(() => {
    return Math.min(Math.max(this.value(), 0), 100);
  });
}
