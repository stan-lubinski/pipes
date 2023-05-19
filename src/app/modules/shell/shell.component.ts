import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  OnInit,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { headerLinkModel } from '@pipes/ui';
import { cartItem, CartService } from '../cart/services/cart.service';

@UntilDestroy()
@Component({
  selector: 'pipes-shell',
  templateUrl: './shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent implements OnInit {
  title = 'Pipes';
  links: headerLinkModel[] = [
    // { route: '/catalogue', name: 'Catalogue' },
    // { route: '/tutorials', name: 'Tutorials' },
    // { route: '/cart', name: 'Cart' },
  ];
  titleRoute = '/';
  cartSize = 0;
  @HostBinding('class.dark') darkMode = JSON.parse(
    localStorage.getItem('darkMode') || 'false'
  );

  constructor(
    private cartService: CartService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getCartSize();
    this.cartService.update$.pipe(untilDestroyed(this)).subscribe({
      next: () => {
        this.getCartSize();
      },
    });
  }

  private getCartSize(): void {
    this.cartSize = 0;
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');

    if (cartItems.length) {
      cartItems.forEach((el: cartItem) => {
        this.cartSize += el.count;
      });

      this.cdRef.markForCheck();
    }
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
  }
}
