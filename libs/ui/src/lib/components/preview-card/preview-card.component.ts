import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pipes-preview-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewCardComponent {
  @Input() image = '';
  @Input() title = 'Alpha Hookah X';
  @Input() desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book';
  @Input() price = '100$';
}
