import { ChangeDetectionStrategy, Component } from '@angular/core';
import { headerLinkModel } from '@pipes/ui';

@Component({
  selector: 'pipes-shell',
  templateUrl: './shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  title = 'Pipes';
  links: headerLinkModel[] = [
    { route: '/catalogue', name: 'Catalogue' },
    { route: '/tutorials', name: 'Tutorials' },
    { route: '/cart', name: 'Cart' },
  ];
}
