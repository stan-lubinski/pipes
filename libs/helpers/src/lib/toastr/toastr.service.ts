import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToastModel, ToastType } from './toast.model';

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  private _toastEvents: Subject<ToastModel> = new Subject<ToastModel>();
  toastEvents: Observable<ToastModel> = this._toastEvents.asObservable();

  toast(message: string, type: ToastType) {
    this._toastEvents.next({ message, type });
  }
}
