import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TutorialModel } from '../models/tutorial';

@Injectable({
  providedIn: 'root',
})
export class TutorialsService {
  items: TutorialModel[] = [
    {
      title: 'Tutorial title',
      id: 1,
      img: '/assets/img/coals.jpg',
      desc: 'Tutorial desc',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      title: 'Tutorial title',
      id: 2,
      img: '/assets/img/bowl.jpg',
      desc: 'Tutorial desc',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
  ];

  getItems(): Observable<TutorialModel[]> {
    return of(this.items);
  }

  getItem(id: number): Observable<TutorialModel | undefined> {
    return of(this.items.find((el) => el.id === id) || undefined);
  }
}
