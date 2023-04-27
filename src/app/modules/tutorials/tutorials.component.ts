import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pipes-tutorials',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TutorialsComponent {}
