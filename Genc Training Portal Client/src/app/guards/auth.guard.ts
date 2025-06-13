// src/app/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service'; // Adjust path if needed

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const requiredRoles = route.data['roles'] as string[];

    if (this.authService.isLoggedIn()) {
      if (requiredRoles && requiredRoles.length > 0) {
        // Check if user has AT LEAST ONE of the required roles
        if (this.authService.hasRole(requiredRoles)) {
          return true; // User is logged in and has required role(s)
        } else {
          // User is logged in but doesn't have the required role
          console.warn('Access Denied: User does not have required roles.', { requiredRoles, userRoles: this.authService.getCurrentUserRoles() });
          // Redirect to an unauthorized page
          return this.router.createUrlTree(['/authentication/unauthorized']);
        }
      } else {
        // No specific roles required for this route, just needs authentication
        return true;
      }
    } else {
      // User is not logged in
      console.warn('Access Denied: User not logged in.');
      // Redirect to login page
      return this.router.createUrlTree(['/authentication/login']);
    }
  }
}