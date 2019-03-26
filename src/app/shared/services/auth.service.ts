import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from '@gorniv/ngx-universal';
import { Router } from '@angular/router';

@Injectable()
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
    return this._authToken ? this._authToken : '';
  }

  public set token(token: string) {
    this._authToken = token;
    this._authState.next(!!token);
  }

  public set changeAuthState(newState: boolean) {
    this._authState.next(newState);
  }

  constructor(private _cookie: CookieService, private router: Router) {
    this._authState = new BehaviorSubject(!1);
    // this.saveTokenInCookieStorage('token plug');
    this.token = this._cookie.get('token');
  }

  isAuthenticated(): boolean {
    // This method is required to implement authentication.
    return !!this.token;
  }

  saveTokenInCookieStorage(token: string): void {
    // For saving auth token in Cookie storage.
    this._cookie.put('token', token);
  }

  logIn() {
    if (this.interruptedUrl && this.interruptedUrl.length) {
      this.router.navigate([this.interruptedUrl])
        .then(() => {
          // TODO: If Notification (toast) service is present we can show successfully Logged in message
        });
    }
  }

  logOut() {
    this.changeAuthState = false;
    this._cookie.removeAll();
  }
}
