import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor( private toastr: ToastrService) { }

  showInToast(message: string) {
    this.toastr.error(message, 'Error message');
  }
}
