import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  imports: [],
  templateUrl: './confirm-modal.html',
  styleUrl: './confirm-modal.css',
})
export class ConfirmModal {
  itemName = input<string>('');
  isOpen = input<boolean>(false);

  confirm = output<void>();
  cancel = output<void>();

  close() {
    this.cancel.emit();
  }

  onConfirm() {
    console.log('content deleted');
    this.confirm.emit();
  }
}
