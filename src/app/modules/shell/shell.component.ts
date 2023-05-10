import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { headerLinkModel } from '@pipes/ui';
import { CartService } from '../cart/services/cart.service';

@Component({
  selector: 'pipes-shell',
  templateUrl: './shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent implements OnInit {
  title = 'Pipes';
  links: headerLinkModel[] = [
    { route: '/catalogue', name: 'Catalogue' },
    { route: '/tutorials', name: 'Tutorials' },
    // { route: '/cart', name: 'Cart' },
  ];

  get cartItemCount(): number {
    return JSON.parse(localStorage.getItem('cart') || '[]').length;
  }

  constructor(
    private cartService: CartService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cartService.update$.subscribe({
      next: () => {
        this.cdRef.markForCheck();
      },
    });
  }
}
