import { Component, input, signal, output, HostListener } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  imports: [],
  templateUrl: './multi-select.html',
  styleUrl: './multi-select.css',
})
export class MultiSelect {
  options = input<{ id: number; name: string }[]>([]);
  selected = input<number[]>([]);
  selectedChange = output<number[]>();

  isOpen = signal(false);

  toggleDropdown() {
    this.isOpen.update((v) => !v);
  }

  isSelected(id: number) {
    return this.selected().includes(id);
  }

  toggleOption(id: number) {
    const current = this.selected();

    if (current.includes(id)) {
      this.selectedChange.emit(current.filter((i) => i !== id));
    } else {
      this.selectedChange.emit([...current, id]);
    }
  }

  removeItem(id: number) {
    this.selectedChange.emit(this.selected().filter((i) => i !== id));
  }

  @HostListener('document:click', ['$event'])
  closeOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.multi-select')) {
      this.isOpen.set(false);
    }
  }
}
