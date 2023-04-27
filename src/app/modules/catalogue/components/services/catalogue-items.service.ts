import { Injectable } from '@angular/core';
import { CatalogueItemModel } from '../models/catalogue-item';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueItemsService {
  items: CatalogueItemModel[] = [
    {name: 'Item name', id: 1, image: '', price: '100$', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
    {name: 'Item name', id: 1, image: '', price: '100$', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
    {name: 'Item name', id: 1, image: '', price: '100$', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
    {name: 'Item name', id: 1, image: '', price: '100$', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
    {name: 'Item name', id: 1, image: '', price: '100$', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
    {name: 'Item name', id: 1, image: '', price: '100$', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
    {name: 'Item name', id: 1, image: '', price: '100$', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
  ]

  getItems(): Observable<CatalogueItemModel[]> {
    return of(this.items);
  }

  getItem(id: number): Observable<CatalogueItemModel | undefined> {
    return of(this.items.find(el => el.id === id) || undefined)
  }
}
