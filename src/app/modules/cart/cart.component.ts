import { Component, OnInit } from '@angular/core';
import { CatalogueItemModel } from '../catalogue/models/catalogue-item';
import { CartService } from './services/cart.service';

@Component({
  selector: 'pipes-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items: CatalogueItemModel[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.items$.subscribe((res) => {
      this.items = res;
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
}
