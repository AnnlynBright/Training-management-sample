
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

// // src/app/services/auth.service.ts
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable, of } from 'rxjs';
// import { tap, delay } from 'rxjs/operators'; // Re-added delay for simulation
// import { ROLES } from '../shared/constants/roles'; // Ensure correct path for ROLES

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private currentUserRoles: string[] = [];
//   private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
//   isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

//   // --- ADDED SAMPLE USER DATA ---
//   private sampleUsers: { [key: string]: { password: string; roles: string[] } } = {
//     'skilling.lead@example.com': { password: 'Lead@123', roles: [ROLES.SKILLING_LEAD] },
//     'academy.coord@example.com': { password: 'Coord@123', roles: [ROLES.ACADEMY_COORDINATOR] },
//     'team.lead@example.com': { password: 'Team@123', roles: [ROLES.LEAD] },
//     'tech.trainer@example.com': { password: 'Trainer@123', roles: [ROLES.TECHNICAL_TRAINER] },
//     'bh.trainer@example.com': { password: 'BHTrainer@123', roles: [ROLES.BH_TRAINER] },
//     'mentor@example.com': { password: 'Mentor@123', roles: [ROLES.MENTOR] },
//     'cr@example.com': { password: 'CR@123', roles: [ROLES.CR] },
//     'coach@example.com': { password: 'Coach@123', roles: [ROLES.COACH] },
//     'super.user@example.com': { password: 'Super@123', roles: [ROLES.SKILLING_LEAD, ROLES.LEAD] }
//   };
//   // --- END SAMPLE USER DATA ---

//   constructor() {
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       this.isAuthenticatedSubject.next(true);
//       this.currentUserRoles = JSON.parse(localStorage.getItem('userRoles') || '[]');
//       console.log('AuthService constructor: Initialized with token. Authenticated:', this.isAuthenticatedSubject.value, 'Roles:', this.currentUserRoles);
//     } else {
//       console.log('AuthService constructor: No token found. Not authenticated initially.');
//     }
//   }

//   // --- MODIFIED LOGIN METHOD ---
//   // Now takes selectedRole for validation and returns Observable<{ success: boolean, roles?: string[] }>
//   login(username: string, password: string, selectedRole: string): Observable<{ success: boolean, roles?: string[], primaryRole?: string }> {
//     const user = this.sampleUsers[username];

//     if (user && user.password === password) {
//       // Check if the selected role is among the user's actual roles
//       if (user.roles.includes(selectedRole)) {
//         // Simulate a successful login response from backend
//         return of({ success: true, roles: user.roles, primaryRole: selectedRole }).pipe(
//           delay(500), // Simulate network delay
//           tap(response => {
//             localStorage.setItem('authToken', 'sample-jwt-token-' + username);
//             localStorage.setItem('userRoles', JSON.stringify(response.roles));
//             this.currentUserRoles = response.roles as string[];
//             this.isAuthenticatedSubject.next(true);
//             console.log('AuthService login: User state updated. Authenticated:', this.isAuthenticatedSubject.value, 'Roles:', this.currentUserRoles);
//           })
//         );
//       } else {
//         // User exists, but selected role doesn't match their actual roles
//         console.warn('Login failed: User exists, but selected role does not match actual roles.', { username, selectedRole, actualRoles: user.roles });
//         return of({ success: false }); // Indicate failure
//       }
//     } else {
//       // User not found or password incorrect
//       console.warn('Login failed: Invalid username or password.', { username, password });
//       return of({ success: false }); // Indicate failure
//     }
//   }
//   // --- END MODIFIED LOGIN METHOD ---

//   logout(): void {
//     localStorage.removeItem('authToken');
//     localStorage.removeItem('userRoles');
//     this.currentUserRoles = [];
//     this.isAuthenticatedSubject.next(false);
//     console.log('User logged out.');
//   }

//   isLoggedIn(): boolean {
//     const loggedIn = this.isAuthenticatedSubject.value;
//     // console.log('AuthService isLoggedIn(): Returning', loggedIn); // Suppress frequent console log
//     return loggedIn;
//   }

//   hasRole(requiredRoles: string[]): boolean {
//     const loggedIn = this.isLoggedIn();
//     const hasAnyRole = requiredRoles.some(role => this.currentUserRoles.includes(role));
//     // console.log('AuthService hasRole(): LoggedIn:', loggedIn, 'Required:', requiredRoles, 'User has:', this.currentUserRoles, 'Result:', loggedIn && hasAnyRole); // Suppress frequent console log
//     if (!loggedIn || !this.currentUserRoles || this.currentUserRoles.length === 0) {
//       return false;
//     }
//     return hasAnyRole;
//   }

//   getCurrentUserRoles(): string[] {
//     // console.log('AuthService getCurrentUserRoles(): Returning', [...this.currentUserRoles]); // Suppress frequent console log
//     return [...this.currentUserRoles];
//   }
// }