import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from '@gorniv/ngx-universal';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authToken: string;
  private authState: BehaviorSubject<boolean>;

  public get token(): string {
    return this.authToken;
  }

  public set token(token: string) {
    this.authToken = token;
  }

  set changeAuthState(newState: boolean) {
    this.authState.next(newState);
  }

  constructor(private cookie: CookieService) {
    this.authToken = this.cookie.get('token');
    this.authState = new BehaviorSubject(!!this.authToken);
  }

  isAuthenticated(): Observable<boolean> {
    // This method is required to implement authentication.
    return this.authState.asObservable();
  }

  logOut() {
    this.changeAuthState = false;
    this.cookie.removeAll();
  }
}
