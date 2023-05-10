import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CatalogueItemModel } from '../models/catalogue-item';

@Injectable({
  providedIn: 'root',
})
export class CatalogueItemsService {
  url = '/products';

  constructor(private http: HttpClient) {}

  getItems(): Observable<CatalogueItemModel[]> {
    return this.http.get<{ data: CatalogueItemModel[] }>(`${this.url}`).pipe(
      map((res) => {
        return res.data;
      })
    );
  }

  getItem(id: number): Observable<CatalogueItemModel | undefined> {
    return this.http.get<CatalogueItemModel>(`${this.url}/${id}`);
  }
}
