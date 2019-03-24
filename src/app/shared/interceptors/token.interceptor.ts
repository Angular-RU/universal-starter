import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {AuthService} from '@shared/services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  authPrefix: string;

  constructor(private auth: AuthService) {
    this.authPrefix =
      /** condition is:
       * If we have some specific auth prefix we use it,
       * Else we use default JWT (json web token) prefix - 'Bearer' */
      environment && environment['AUTH_KEY']
        ? environment['AUTH_KEY']
        : 'Bearer';
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Add auth-token to http-header if available
    const currentToken = this.auth.token;
    if (currentToken) {
      request = request.clone({
        setHeaders: {
          'Authorization': `${this.authPrefix} ${currentToken}`
        }
      });
    }
    return next.handle(request);
  }
}
