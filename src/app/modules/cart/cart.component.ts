import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CatalogueItemModel } from '../catalogue/models/catalogue-item';
import { cartItem, CartService } from './services/cart.service';

@Component({
  selector: 'pipes-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items: cartItem[] = [];

  constructor(
    private cartService: CartService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cartService.update$.subscribe({
      next: () => {
        this.cdRef.markForCheck();
        this.getItems();
      },
    });
    this.getItems();
  }

  getItems(): void {
    this.cartService.getCart().subscribe({
      next: (res) => {
        this.items = res.data;
        this.cdRef.markForCheck();
      },
    });
  }

  incrQuantity(item: CatalogueItemModel): void {
    if (item.quantity) {
      item.quantity += 1;
    }
  }

  decrQuantity(item: CatalogueItemModel): void {
    if (item.quantity) {
      item.quantity -= 1;
    }
  }

  addItem(id: number) {
    this.cartService.add(id).subscribe({ next: () => {} });
  }

  remove(id: number, count?: boolean) {
    this.cartService
      .remove(id, count)
      .pipe()
      .subscribe({
        next: (res) => {
          this.getItems();
        },
      });
  }
}
