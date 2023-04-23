import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pipes-tutorials-item',
  templateUrl: './tutorials-item.component.html',
  styleUrls: ['./tutorials-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TutorialsItemComponent {}
