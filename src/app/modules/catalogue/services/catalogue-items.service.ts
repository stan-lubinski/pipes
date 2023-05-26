import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { CatalogueItemModel } from '../models/catalogue-item';
import { CatalogueItemsStorageService } from './catalogue-items-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CatalogueItemsService {
  url = '/products';
  http = inject(HttpClient);
  catalogItemsStorage = inject(CatalogueItemsStorageService);

  getItems(): Observable<CatalogueItemModel[]> {
    return this.http.get<{ data: CatalogueItemModel[] }>(`${this.url}`).pipe(
      map((res) => {
        return res.data;
      }),
      tap((res) => {
        this.catalogItemsStorage.items$.next(res);
      })
    );
  }

  getItem(id: number): Observable<CatalogueItemModel | undefined> {
    return this.http.get<CatalogueItemModel>(`${this.url}/${id}`).pipe(
      tap((res) => {
        this.catalogItemsStorage.item$.next(res);
      })
    );
  }
}
