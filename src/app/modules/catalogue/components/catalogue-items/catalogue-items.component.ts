import { ChangeDetectionStrategy, Component } from '@angular/core';

export interface CatalogueItemShortModel {
  image: string,
  name: string,
  desc: string,
  price: string,
  id: number
}

@Component({
  selector: 'pipes-catalogue-items',
  templateUrl: './catalogue-items.component.html',
  styleUrls: ['./catalogue-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogueItemsComponent {
  items: CatalogueItemShortModel[] = [
    {name: 'Item name', id: 1, image: '', price: '100$', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
    {name: 'Item name', id: 1, image: '', price: '100$', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
    {name: 'Item name', id: 1, image: '', price: '100$', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
    {name: 'Item name', id: 1, image: '', price: '100$', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
    {name: 'Item name', id: 1, image: '', price: '100$', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
    {name: 'Item name', id: 1, image: '', price: '100$', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
    {name: 'Item name', id: 1, image: '', price: '100$', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
  ]
}
