import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CatalogueItemModel } from '../models/catalogue-item';

@Injectable({
  providedIn: 'root',
})
export class CatalogueItemsStorageService {
  items$: BehaviorSubject<CatalogueItemModel[] | null> = new BehaviorSubject<
    CatalogueItemModel[] | null
  >(null);
  item$: BehaviorSubject<CatalogueItemModel | null> =
    new BehaviorSubject<CatalogueItemModel | null>(null);
}
