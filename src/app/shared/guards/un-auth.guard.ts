import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';

@Injectable()
export class UnAuthGuard implements CanLoad {
  constructor(private router: Router,
              private auth: AuthService) {
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    return this.condition(!this.auth.isAuthenticated());
  }

  condition(isAuthenticated: boolean): boolean {
    if (!isAuthenticated) {
      this.router.navigate([!!this.auth.interruptedUrl ? this.auth.interruptedUrl : ''])
        .then(() => {
          this.auth.interruptedUrl = '';
        });
    }
    return isAuthenticated;
  }
}
