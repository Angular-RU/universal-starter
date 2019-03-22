import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UnAuthGuard implements CanLoad {
  constructor(private auth: AuthService) {}
  canLoad(route: Route, segments: UrlSegment[]): boolean {
    return !this.auth.authState.getValue();
  }
}
