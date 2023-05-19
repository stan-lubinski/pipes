import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, Subject } from 'rxjs';
import { CatalogueItemsService } from '../../catalogue/services/catalogue-items.service';

export interface cartItem {
  id: number;
  count: number;
  image: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // _items: CatalogueItemModel[] = [];

  // get items(): CatalogueItemModel[] {
  //   return this._items;
  // }

  // set items(items: CatalogueItemModel[]) {
  //   this._items = items;
  // }

  // items$: BehaviorSubject<CatalogueItemModel[]> = new BehaviorSubject(
  //   this._items
  // );

  update$: Subject<any> = new Subject();

  constructor(
    private catalogueService: CatalogueItemsService,
    private http: HttpClient
  ) {}

  getCart(): Observable<any> {
    return this.http.get('/cart');
  }

  add(id: number): Observable<any> {
    return this.http.post('/cart', { id, count: 1 }).pipe(
      finalize(() => {
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

    return this.http.delete(`/cart/${id}`, params).pipe(
      finalize(() => {
        this.update$.next(true);
      })
    );
  }
}
