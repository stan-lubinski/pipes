import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pipes-tutorials-items',
  templateUrl: './tutorials-items.component.html',
  styleUrls: ['./tutorials-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TutorialsItemsComponent {}
