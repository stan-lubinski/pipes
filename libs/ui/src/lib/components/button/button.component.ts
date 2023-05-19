import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pipes-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text = '';
  @Input() disabled = false;
  @Input() dark = false;
  @Output() onAction: EventEmitter<any> = new EventEmitter();

  emitAction(): void {
    this.onAction.emit();
  }
}
