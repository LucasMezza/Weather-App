import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import { ErrorService } from "../service/error.service";

@Injectable({
    providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {
    
    constructor(private errorService: ErrorService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(error => {
                let errorMessage = '';
                if (error instanceof ErrorEvent) {
                // client-side error
                errorMessage = `Client-side error: ${error.error.message}`;
                } else {
                // backend error
                errorMessage = `Server-side error: ${error.status} 
                ${error.message}`;
                }
                // aquí podrías agregar código que muestre el error en alguna parte fija de la pantalla.
                this.errorService.showInToast(errorMessage);
                console.log(errorMessage);
                return throwError(errorMessage);
            })
        );
    }
}