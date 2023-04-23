import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pipes-catalogue',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogueComponent {}
