import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, Subject, tap } from 'rxjs';
import { CartItemModel } from '../models/cart';
import { CartStorageService } from './cart-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  update$: Subject<any> = new Subject();
  http = inject(HttpClient);
  storage = inject(CartStorageService);

  getCart(): Observable<CartItemModel[]> {
    return this.http.get<{ data: CartItemModel[] }>('/cart').pipe(
      map((res) => {
        return res.data;
      }),
      tap((res) => {
        this.update$.next(true);
        this.storage.items$.next(res);
      })
    );
  }

  add(id: number, count = 1): Observable<any> {
    return this.http
      .post('/cart', { id, count })
      .pipe(tap(() => this.update$.next(true)));
  }

  clear(): Observable<any> {
    return this.http.delete('/cart').pipe(
      tap(() => {
        this.storage.items$.next(null);
        this.update$.next(true);
      })
    );
  }

  remove(id: number, useCounter?: boolean): Observable<any> {
    const params = {
      body: {
        useCounter,
      },
    };

    return this.http
      .delete(`/cart/${id}`, params)
      .pipe(tap(() => this.update$.next(true)));
  }
}
