import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authState: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
  }

  isAuthenticated(): Observable<boolean> {
    return this.authState.asObservable();
  }

  passed() {
    this.authState.next(true);
  }

  rejected() {
    this.authState.next(false);
  }
}
