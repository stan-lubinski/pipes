import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CatalogueItemModel } from '../../catalogue/models/catalogue-item';
import { CatalogueItemsService } from '../../catalogue/services/catalogue-items.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  _items: CatalogueItemModel[] = [];

  get items(): CatalogueItemModel[] {
    return this._items;
  }

  set items(items: CatalogueItemModel[]) {
    this._items = items;
  }

  items$: BehaviorSubject<CatalogueItemModel[]> = new BehaviorSubject(
    this._items
  );

  constructor(private catalogueService: CatalogueItemsService) {}

  add(id: number): void {
    const existing = this.items.find((el) => el.id === id);
    if (existing && existing.quantity) {
      existing.quantity += 1;
    } else {
      this.catalogueService.getItem(id).subscribe({
        next: (res) => {
          if (res) {
            res.quantity = 1;
            this.items.push(res);
            this.items$.next(this.items);
          }
        },
      });
    }
  }

  remove(id: number): void {
    const item = this.items.find((el) => el.id === id);

    if (item?.quantity && item.quantity > 1) {
      item.quantity -= 1;
    } else {
      this.items = this.items.filter((el) => el.id !== id);
      this.items$.next(this.items);
    }
  }
}
