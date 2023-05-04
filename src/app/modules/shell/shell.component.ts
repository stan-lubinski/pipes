import { ChangeDetectionStrategy, Component } from '@angular/core';
import { headerLinkModel } from '@pipes/ui';
import { CartService } from '../cart/services/cart.service';

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
    // { route: '/cart', name: 'Cart' },
  ];

  get cartItemCount(): number {
    return this.cartService.items.length;
  }

  constructor(private cartService: CartService) {}
}
