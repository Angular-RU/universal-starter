import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from '@gorniv/ngx-universal';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authToken: string;
  private _authState: BehaviorSubject<boolean>;
  private _interruptedUrl: string;

  public get interruptedUrl(): string {
    return this._interruptedUrl;
  }

  public set interruptedUrl(url: string) {
    this._interruptedUrl = url;
  }

  public get token(): string {
    return this._authToken;
  }

  public set token(token: string) {
    this._authToken = token;
    if (!token) {
      this._authState.next(false);
    }
  }

  set changeAuthState(newState: boolean) {
    this._authState.next(newState);
  }

  constructor(private cookie: CookieService) {
    this.cookie.put('token', 'token');
    this.token = this.cookie.get('token');
    this._authState = new BehaviorSubject(!!this.token);
    setTimeout(() => {
      this.changeAuthState = false;
      console.count('1');
    }, 3000);
  }

  isAuthenticated(): Observable<boolean> {
    // This method is required to implement authentication.
    return this._authState.asObservable();
  }

  logOut() {
    this.changeAuthState = false;
    this.cookie.removeAll();
  }
}
