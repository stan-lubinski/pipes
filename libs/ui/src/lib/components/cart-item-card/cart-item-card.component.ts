import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'pipes-cart-item-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './cart-item-card.component.html',
  styleUrls: ['./cart-item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemCardComponent {
  // TODO: add type
  @Input() item!: {
    name: string;
    image: string;
    count: number;
    id: number;
  };
  @Output() increase: EventEmitter<any> = new EventEmitter();
  @Output() decrease: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();

  protected onAction(action: EventEmitter<any>): void {
    action.emit();
  }
}
