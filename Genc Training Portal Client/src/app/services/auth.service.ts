
// // src/app/services/auth.service.ts
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable, of } from 'rxjs';
// import { delay, tap } from 'rxjs/operators';
// import { ROLES } from '../shared/constants/roles'; // <--- Import ROLES here

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private currentUserRoles: string[] = [];
//   private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
//   isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

//   constructor() {
//     // Simulate initial authentication state (e.g., from local storage)
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       this.isAuthenticatedSubject.next(true);
//       this.currentUserRoles = JSON.parse(localStorage.getItem('userRoles') || '[]');
//     }
//   }

//   // Sample login (replace with your actual backend call)
//   login(username: string, password: string, roles: string[]): Observable<boolean> {
//     return of(true).pipe(
//       delay(500),
//       tap(() => {
//         localStorage.setItem('authToken', 'sample-jwt-token-' + username);
//         localStorage.setItem('userRoles', JSON.stringify(roles));
//         this.currentUserRoles = roles;
//         this.isAuthenticatedSubject.next(true);
//         console.log('User logged in:', username, 'with roles:', this.currentUserRoles);
//       })
//     );
//   }

//   logout(): void {
//     localStorage.removeItem('authToken');
//     localStorage.removeItem('userRoles');
//     this.currentUserRoles = [];
//     this.isAuthenticatedSubject.next(false);
//     console.log('User logged out.');
//   }

//   isLoggedIn(): boolean {
//     return this.isAuthenticatedSubject.value;
//   }

//   hasRole(requiredRoles: string[]): boolean {
//     if (!this.isLoggedIn() || !this.currentUserRoles || this.currentUserRoles.length === 0) {
//       return false;
//     }
//     return requiredRoles.some(role => this.currentUserRoles.includes(role));
//   }

//   getCurrentUserRoles(): string[] {
//     return [...this.currentUserRoles];
//   }
// }


// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators'; // <--- Removed 'delay' import
import { ROLES } from '../shared/constants/roles'; // Ensure correct path for ROLES

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserRoles: string[] = [];
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {
    // Simulate initial authentication state (e.g., from local storage)
    // This runs once when the service is instantiated.
    const token = localStorage.getItem('authToken');
    if (token) {
      this.isAuthenticatedSubject.next(true);
      this.currentUserRoles = JSON.parse(localStorage.getItem('userRoles') || '[]');
      console.log('AuthService constructor: Initialized with token. Authenticated:', this.isAuthenticatedSubject.value, 'Roles:', this.currentUserRoles);
    } else {
      console.log('AuthService constructor: No token found. Not authenticated initially.');
    }
  }

  // Sample login (replace with your actual backend call)
  login(username: string, password: string, roles: string[]): Observable<boolean> {
    // In a real app, you'd call Spring Boot API for login and get roles from response
    // For this sample, we just use the roles provided to simulate a successful login
    return of(true).pipe(
      // Removed delay(500)
      tap(() => {
        localStorage.setItem('authToken', 'sample-jwt-token-' + username); // Store a dummy token
        localStorage.setItem('userRoles', JSON.stringify(roles)); // Store roles
        this.currentUserRoles = roles;
        this.isAuthenticatedSubject.next(true); // <--- This now updates immediately
        console.log('AuthService login: User state updated. Authenticated:', this.isAuthenticatedSubject.value, 'Roles:', this.currentUserRoles);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRoles');
    this.currentUserRoles = [];
    this.isAuthenticatedSubject.next(false);
    console.log('User logged out.');
  }

  isLoggedIn(): boolean {
    const loggedIn = this.isAuthenticatedSubject.value;
    console.log('AuthService isLoggedIn(): Returning', loggedIn);
    return loggedIn;
  }

  hasRole(requiredRoles: string[]): boolean {
    const loggedIn = this.isLoggedIn();
    const hasAnyRole = requiredRoles.some(role => this.currentUserRoles.includes(role));
    console.log('AuthService hasRole(): LoggedIn:', loggedIn, 'Required:', requiredRoles, 'User has:', this.currentUserRoles, 'Result:', loggedIn && hasAnyRole);
    if (!loggedIn || !this.currentUserRoles || this.currentUserRoles.length === 0) {
      return false;
    }
    return hasAnyRole;
  }

  getCurrentUserRoles(): string[] {
    console.log('AuthService getCurrentUserRoles(): Returning', [...this.currentUserRoles]);
    return [...this.currentUserRoles];
  }
}