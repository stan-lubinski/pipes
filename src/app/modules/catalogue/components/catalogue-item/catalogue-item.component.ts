import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pipes-catalogue-item',
  templateUrl: './catalogue-item.component.html',
  styleUrls: ['./catalogue-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogueItemComponent {}
