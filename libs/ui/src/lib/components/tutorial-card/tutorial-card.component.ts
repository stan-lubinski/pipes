import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pipes-tutorial-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tutorial-card.component.html',
  styleUrls: ['./tutorial-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TutorialCardComponent {}
