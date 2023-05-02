import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CatalogueItemModel } from '../models/catalogue-item';

@Injectable({
  providedIn: 'root',
})
export class CatalogueItemsService {
  items: CatalogueItemModel[] = [
    {
      name: 'Alpha Hookah X',
      id: 1,
      image: '/assets/img/alpha-x.jpg',
      price: '100$',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      name: 'Shishabucks Cloud Micro',
      id: 2,
      image: '/assets/img/shishabucks-cloud-micro-grey.jpg',
      price: '189.99$',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      name: 'Item name',
      id: 1,
      image: '',
      price: '100$',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      name: 'Item name',
      id: 1,
      image: '',
      price: '100$',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      name: 'Item name',
      id: 1,
      image: '',
      price: '100$',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      name: 'Item name',
      id: 1,
      image: '',
      price: '100$',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      name: 'Item name',
      id: 1,
      image: '',
      price: '100$',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
  ];

  getItems(): Observable<CatalogueItemModel[]> {
    return of(this.items);
  }

  getItem(id: number): Observable<CatalogueItemModel | undefined> {
    return of(this.items.find((el) => el.id === id) || undefined);
  }
}
