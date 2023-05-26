import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItemModel } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartStorageService {
  items$: BehaviorSubject<CartItemModel[] | null> = new BehaviorSubject<
    CartItemModel[] | null
  >(null);
}
