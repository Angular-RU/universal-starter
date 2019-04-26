import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
import { UniversalStorage } from '@shared/storage/universal.storage';

@Injectable()
export class AuthService {
  private _authToken: string;
  private _authState: BehaviorSubject<boolean>;
  private _interruptedUrl: string;
  private _initialData: string[] = [
    'token', 'interruptedUrl',
  ];

  constructor(@Inject(UniversalStorage) private _appStorage: Storage,
              // private _http: HttpClient,
              private _router: Router) {
    this._authState = new BehaviorSubject(!1);
    this._initialData.forEach((value) => {
      this[value] = this._getStoredItems(value);
    });
  }

  public get interruptedUrl(): string {
    return this._interruptedUrl;
  }

  public set interruptedUrl(url: string) {
    this._interruptedUrl = url;
    if (!url) {
      this._appStorage.removeItem('interruptedUrl');
    } else {
      this._saveValueInCookieStorage('interruptedUrl', url);
    }
  }

  public get token(): string {
    return this._authToken ? this._authToken : '';
  }

  public set token(token: string) {
    this._authToken = token;
    this.changeAuthState = !!token;
  }

  public set changeAuthState(newState: boolean) {
    this._authState.next(newState);
  }

  public isAuthenticated(): boolean {
    // This method is required to implement authentication.
    return !!this.token;
  }

  public logIn(formValue: { email: string, password: string }) {
    // this._http.post('', formValue).subscribe((response: string) => {
    this._saveValueInCookieStorage('token', formValue.email + formValue.password);
    // });

    // If the entrance url was interrupted.
    this._router.navigate([this.interruptedUrl && this.interruptedUrl.length ? this.interruptedUrl : '/home'])
      .then(() => {
        this.interruptedUrl = '';
        // TODO: If Notification (toast) service is present can show successfully Logged in message
      });
  }

  public logOut() {
    this.token = '';
    this._appStorage.clear();
    this._router.navigate(['/auth', 'login']).then(() => {
      // TODO: If Notification (toast) service is present can show successfully Logged out message
    });
  }

  private _getStoredItems(key: string): any {
    return this._appStorage.getItem(key);
  }

  private _saveValueInCookieStorage(key: string, value: string): void {
    // For saving auth token in Cookie storage.
    this._appStorage.setItem(key, value);
    if (key === 'token') {
      this.token = value;
    }
  }
}
