import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AuthenticationService } from './Authentication-Service/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
@Injectable() 
export class AuthInterceptor implements HttpInterceptor {
  constructor(private AuthService:AuthenticationService,private Toster:ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const Token = this.AuthService.Userislogin();
    if(Token)
    {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${Token}`
        }
      });
    }
    return next.handle(request).pipe(
      tap(() => {
        if(Token)
          {
            const expirationTime = this.getExpirationTime(Token);
            if(expirationTime)
            {
                this.AuthService.resetTokenTimer(expirationTime)
            }
          }
      }),
      catchError(err=>{
        if(err)
          {
            switch(err.status)
            {
              case 401:
                this.Toster.error("Unauthorized User!!",err.status.toString(),{
                  closeButton:true
                });
                break;
              case 500:
                this.Toster.error(err.error.message,err.status.toString(),{
                  closeButton:true
                });
                break;
              default:
                break;
            }
          }
          return throwError(()=>err)
      })
    );
  }

  private getExpirationTime(token: string): number | null {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp ? payload.exp * 1000 : null; // Convert to milliseconds
    } catch (err) {
      console.error('Error parsing JWT Token:', err);
      return null;
    }
  }
  
  
}