import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToastEvent } from '../models/toast-event.model';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  toastEvents: Observable<ToastEvent>;
  private _toastEvents = new Subject<ToastEvent>();

  constructor() {
    this.toastEvents = this._toastEvents.asObservable();
  }

  showInToast(message: string) {
    this._toastEvents.next({
      message,
      title: 'Error',
      type: 'success',
    });
  }
}
