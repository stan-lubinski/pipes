import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'pipes-preview-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterModule],
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewCardComponent {
  @Input() image = '';
  @Input() name = 'Alpha Hookah X';
  @Input() disableAction = false;
  @Input() desc =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book';
  @Input() price = '100$';
  @Input() id: number | undefined;
  @Output() action: EventEmitter<any> = new EventEmitter();

  onAction(): void {
    this.action.emit();
  }
}
