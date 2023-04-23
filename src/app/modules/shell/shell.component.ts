import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pipes-shell',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {}
