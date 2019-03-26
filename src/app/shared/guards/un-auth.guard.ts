import { Injectable } from '@angular/core';
import {
  CanLoad, Route,
  Router,
  UrlSegment,
} from '@angular/router';
import { AuthService } from '@shared/services/auth.service';

@Injectable()
export class UnAuthGuard implements CanLoad {
  constructor(private router: Router,
              private auth: AuthService) {
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    console.log('canLoad UnAuthGuard', !this.auth.isAuthenticated(), route, segments);
    return this.condition(!this.auth.isAuthenticated());
  }

  // canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //   console.log('canActivateChild UnAuthGuard', !this.auth.isAuthenticated());
  //   return this.condition(!this.auth.isAuthenticated());
  // }

  condition(isAuthenticated: boolean): boolean {
    if (!isAuthenticated) {
      const interruptedUrl = !!this.auth.interruptedUrl;
      this.router.navigate([interruptedUrl ? this.auth.interruptedUrl : ''])
        .then(() => {
          this.auth.interruptedUrl = '';
        });
    }
    return isAuthenticated;
  }
}
