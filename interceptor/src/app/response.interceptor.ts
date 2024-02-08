import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class responseInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if(event instanceof HttpResponse){
          this.toastr.success(JSON.stringify(event));

        }
      }),
      catchError(err => {
        this.toastr.error(JSON.stringify(err.message));
        return throwError(err);
      })
    );
  }
}
