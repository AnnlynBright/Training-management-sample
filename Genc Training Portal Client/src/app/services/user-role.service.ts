
// // src/app/services/user-role.service.ts
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserRoleService {
//   private primaryRoleSubject = new BehaviorSubject<string | null>(null);
//   public primaryRole$: Observable<string | null> = this.primaryRoleSubject.asObservable();

//   constructor() {
//     const storedRole = localStorage.getItem('primaryUserRole');
//     if (storedRole) {
//       this.primaryRoleSubject.next(storedRole);
//     }
//   }

//   setPrimaryRole(role: string): void {
//     this.primaryRoleSubject.next(role);
//     localStorage.setItem('primaryUserRole', role);
//   }

//   clearPrimaryRole(): void {
//     this.primaryRoleSubject.next(null);
//     localStorage.removeItem('primaryUserRole');
//   }

//   getPrimaryRole(): string | null {
//     return this.primaryRoleSubject.getValue();
//   }
// }

// src/app/services/user-role.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  // BehaviorSubject to store and emit the primary role
  // Initialize with null, meaning no primary role is set initially
  private _primaryRole = new BehaviorSubject<string | null>(null);

  // Expose the primary role as an observable for other components/services to subscribe to
  primaryRole$: Observable<string | null> = this._primaryRole.asObservable();

  constructor() {
    // Optionally, try to load the primary role from local storage on service initialization
    // This assumes you might store the *selected* or *primary* role after login.
    const storedPrimaryRole = localStorage.getItem('primaryUserRole');
    if (storedPrimaryRole) {
      this._primaryRole.next(storedPrimaryRole);
      console.log('UserRoleService: Initialized with primary role from localStorage:', storedPrimaryRole);
    } else {
      console.log('UserRoleService: No primary role found in localStorage during initialization.');
    }
  }

  /**
   * Sets the primary role of the current user.
   * This should be called after successful login or role selection.
   * @param role The primary role string.
   */
  setPrimaryRole(role: string): void {
    console.log('UserRoleService: Setting primary role to:', role);
    this._primaryRole.next(role);
    localStorage.setItem('primaryUserRole', role); // Persist the primary role
  }

  /**
   * Gets the current primary role synchronously.
   * @returns The current primary role string or null if not set.
   */
  getPrimaryRole(): string | null {
    return this._primaryRole.getValue();
  }

  /**
   * Clears the primary role, typically on logout.
   */
  clearPrimaryRole(): void {
    console.log('UserRoleService: Clearing primary role.');
    this._primaryRole.next(null);
    localStorage.removeItem('primaryUserRole'); // Remove from persistence
  }
}
