

// // src/app/pages/authentication/side-login/side-login.component.ts
// import { Component } from '@angular/core';
// import {
//   FormGroup,
//   FormControl,
//   Validators,
//   FormsModule,
//   ReactiveFormsModule,
// } from '@angular/forms';
// import { Router, RouterModule } from '@angular/router';

// // IMPORTANT: Review this import based on your Angular Material setup.
// // If you're still getting the 'NG1010: 'imports' must be an array...' error,
// // you need to replace 'MaterialModule' with individual Angular Material modules
// // like MatFormFieldModule, MatInputModule, MatSelectModule, etc., as discussed previously.
// // If your 'MaterialModule' correctly exports all necessary standalone modules, then this is fine.
// import { MaterialModule } from 'src/app/material.module';

// import { MatButtonModule } from '@angular/material/button';
// import { AuthService } from '../../../services/auth.service';
// import { ROLES } from '../../../shared/constants/roles'; // Ensure correct path for ROLES

// @Component({
//   selector: 'app-side-login',
//   standalone: true,
//   imports: [
//     RouterModule,
//     MaterialModule, // <--- Review this based on your Angular Material setup
//     FormsModule,
//     ReactiveFormsModule,
//     MatButtonModule,
//     // If using individual Material modules for standalone components, add them here:
//     // MatFormFieldModule,
//     // MatInputModule,
//     // MatSelectModule,
//     // MatCardModule, // Example
//   ],
//   templateUrl: './side-login.component.html',
// })
// export class AppSideLoginComponent {
//   availableRoles = [
//     // Changed 'value' to be a single string for single-select dropdown compatibility
//     { value: ROLES.SKILLING_LEAD, viewValue: 'Skilling Lead' },
//     { value: ROLES.ACADEMY_COORDINATOR, viewValue: 'Academy Coordinator' },
//     { value: ROLES.LEAD, viewValue: 'Team Lead' },
//     // { value: ROLES.BATCH_OWNER, viewValue: 'Batch Owner' }, // Uncomment if applicable
//     { value: ROLES.TECHNICAL_TRAINER, viewValue: 'Technical Trainer' },
//     { value: ROLES.BH_TRAINER, viewValue: 'BH Trainer' },
//     { value: ROLES.MENTOR, viewValue: 'Mentor' },
//     { value: ROLES.CR, viewValue: 'Course Representative (CR)' },
//     { value: ROLES.COACH, viewValue: 'Coach' },
//     // For users with multiple roles (e.g., Super User), they would typically
//     // select *one* of their assigned roles from the dropdown for login.
//     // The login logic then checks if the selected role is part of their actual roles.
//     // If you need a combined option in the dropdown, you'd need to handle its
//     // 'value' and the 'hasMatchingRole' logic differently.
//   ];

//   // All roles now navigate to '/dashboard' after successful login,
//   // as '/dashboard' loads your shared 'pages.routes.ts' module.
//   roleDashboardMap: { [key: string]: string } = {
//     [ROLES.SKILLING_LEAD]: '/dashboard',
//     [ROLES.ACADEMY_COORDINATOR]: '/dashboard',
//     [ROLES.LEAD]: '/dashboard',
//     // [ROLES.BATCH_OWNER]: '/dashboard', // Uncomment if applicable
//     [ROLES.TECHNICAL_TRAINER]: '/dashboard',
//     [ROLES.BH_TRAINER]: '/dashboard',
//     [ROLES.MENTOR]: '/dashboard',
//     [ROLES.CR]: '/dashboard',
//     [ROLES.COACH]: '/dashboard'
//   };

//   loginError: string | null = null;

//   // Sample user data for demonstration
//   private sampleUsers: { [key: string]: { password: string; roles: string[] } } = {
//     'skilling.lead@example.com': { password: 'Lead@123', roles: [ROLES.SKILLING_LEAD] },
//     'academy.coord@example.com': { password: 'Coord@123', roles: [ROLES.ACADEMY_COORDINATOR] },
//     'team.lead@example.com': { password: 'Team@123', roles: [ROLES.LEAD] },
//     // 'batch.owner@example.com': { password: 'Batch@123', roles: [ROLES.BATCH_OWNER] }, // Uncomment if applicable
//     'tech.trainer@example.com': { password: 'Trainer@123', roles: [ROLES.TECHNICAL_TRAINER] },
//     'bh.trainer@example.com': { password: 'BHTrainer@123', roles: [ROLES.BH_TRAINER] },
//     'mentor@example.com': { password: 'Mentor@123', roles: [ROLES.MENTOR] },
//     'cr@example.com': { password: 'CR@123', roles: [ROLES.CR] },
//     'coach@example.com': { password: 'Coach@123', roles: [ROLES.COACH] },
//     'super.user@example.com': { password: 'Super@123', roles: [ROLES.SKILLING_LEAD, ROLES.LEAD] } // Example of user with multiple roles
//   };

//   constructor(private router: Router, private authService: AuthService) {}

//   form = new FormGroup({
//     uname: new FormControl('', [Validators.required, Validators.email]),
//     password: new FormControl('', [Validators.required]),
//     // Changed to 'string | null' for single-select dropdown value
//     role: new FormControl<string | null>(null, [Validators.required]),
//   });

//   get f() {
//     return this.form.controls;
//   }

//   // submit() {
//   //   this.loginError = null; // Clear previous errors

//   //   if (this.form.invalid) {
//   //     this.form.markAllAsTouched(); // Mark controls as touched to show validation errors
//   //     return;
//   //   }

//   //   // Destructure form values; 'role' will be a string (guaranteed by Validators.required)
//   //   const { uname, password, role } = this.form.value;

//   //   // Ensure all required fields have values
//   //   if (uname && password && role) {
//   //     const user = this.sampleUsers[uname]; // Get user data from sampleUsers

//   //     // Check if user exists and password matches
//   //     if (user && user.password === password) {
//   //       const selectedRole: string = role; // The role selected in the dropdown
        
//   //       // Check if the selected dropdown role is among the user's actual assigned roles
//   //       const hasMatchingRole = user.roles.includes(selectedRole);

//   //       if (!hasMatchingRole) {
//   //         this.loginError = `Selected role '${selectedRole}' does not match user's assigned roles.`;
//   //         console.warn(`User ${uname} selected role ${selectedRole}, but actual roles are ${user.roles}`);
//   //         return;
//   //       }

//   //       // Call AuthService.login with user's actual roles
//   //       this.authService.login(uname, password, user.roles).subscribe(
//   //         success => {
//   //           if (success) {
//   //             console.log('Login successful for user:', uname, 'with roles:', user.roles);
//   //             // Determine the navigation path based on the user's *first* actual role
//   //             // (which is used as the primary for dashboard mapping)
//   //             const primaryRoleForNavigation = user.roles[0];
//   //             const dashboardPath = this.roleDashboardMap[primaryRoleForNavigation];
              
//   //             // If for some reason the map doesn't contain a path (shouldn't happen with current map),
//   //             // fall back to '/dashboard'.
//   //             this.router.navigate([dashboardPath || '/dashboard']);
//   //           } else {
//   //             // This 'else' block would be hit if authService.login returns false
//   //             this.loginError = 'Login failed. Invalid credentials or roles provided to auth service.';
//   //           }
//   //         },
//   //         error => {
//   //           // Handle HTTP or other errors from the AuthService
//   //           console.error('Login failed (AuthService error):', error);
//   //           this.loginError = 'An error occurred during login. Please try again.';
//   //         }
//   //       );
//   //     } else {
//   //       this.loginError = 'Invalid email or password.';
//   //     }
//   //   } else {
//   //     this.loginError = 'Please fill in all login details including a role.';
//   //   }
//   // }
//   submit() {
//     console.log('Login button clicked. Initiating submit().'); // ADD THIS
//     this.loginError = null;

//     if (this.form.invalid) {
//       console.log('Form is INVALID. Marking touched and returning.'); // ADD THIS
//       this.form.markAllAsTouched();
//       return;
//     }

//     const { uname, password, role } = this.form.value;
//     console.log('Form is VALID. Uname:', uname, 'Password length:', password?.length, 'Role:', role); // ADD THIS

//     if (uname && password && role) {
//       const user = this.sampleUsers[uname];
//       console.log('Attempting login for user:', uname, 'User data found:', !!user); // ADD THIS

//       if (user && user.password === password) {
//         console.log('Username and password match.'); // ADD THIS
//         const selectedRole: string = role;
//         const hasMatchingRole = user.roles.includes(selectedRole);

//         if (!hasMatchingRole) {
//           console.log('Selected role does NOT match user\'s assigned roles. Returning.'); // ADD THIS
//           this.loginError = `Selected role '${selectedRole}' does not match user's assigned roles.`;
//           console.warn(`User ${uname} selected role ${selectedRole}, but actual roles are ${user.roles}`);
//           return;
//         }

//         console.log('Calling authService.login()...'); // ADD THIS
//         this.authService.login(uname, password, user.roles).subscribe(
//           success => {
//             console.log('authService.login().subscribe() success callback received. Success:', success); // ADD THIS
//             if (success) {
//               console.log('Login successful. Navigating to dashboard.'); // ADD THIS
//               const primaryRoleForNavigation = user.roles[0];
//               const dashboardPath = this.roleDashboardMap[primaryRoleForNavigation];
//               this.router.navigate([dashboardPath || '/dashboard']);
//             } else {
//               console.log('Login failed: authService.login returned false.'); // ADD THIS
//               this.loginError = 'Login failed. Invalid credentials or roles provided to auth service.';
//             }
//           },
//           error => {
//             console.error('authService.login().subscribe() error callback received:', error); // ADD THIS
//             this.loginError = 'An error occurred during login. Please try again.';
//           }
//         );
//       } else {
//         console.log('Invalid email or password detected locally.'); // ADD THIS
//         this.loginError = 'Invalid email or password.';
//       }
//     } else {
//       console.log('Missing form fields (uname, password, or role).'); // ADD THIS
//       this.loginError = 'Please fill in all login details including a role.';
//     }
//   }
// }

// src/app/pages/authentication/side-login/side-login.component.ts
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // <--- NEW IMPORT: Add CommonModule here!

// IMPORTANT: Review this import based on your Angular Material setup.
// If you're still getting the 'NG1010: 'imports' must be an array...' error,
// you need to replace 'MaterialModule' with individual Angular Material modules
// like MatFormFieldModule, MatInputModule, MatSelectModule, etc., as discussed previously.
import { MaterialModule } from 'src/app/material.module';

import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../../services/auth.service';
import { ROLES } from '../../../shared/constants/roles'; // Ensure correct path for ROLES

@Component({
  selector: 'app-side-login',
  standalone: true,
  imports: [
    RouterModule,
    MaterialModule, // <--- Review this based on your Angular Material setup
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule, // <--- NEW: Add CommonModule to the imports array
    // If using individual Material modules for standalone components, add them here:
    // MatFormFieldModule,
    // MatInputModule,
    // MatSelectModule,
    // MatCardModule, // Example
  ],
  templateUrl: './side-login.component.html',
})
export class AppSideLoginComponent {
  availableRoles = [
    { value: ROLES.SKILLING_LEAD, viewValue: 'Skilling Lead' },
    { value: ROLES.ACADEMY_COORDINATOR, viewValue: 'Academy Coordinator' },
    { value: ROLES.LEAD, viewValue: 'Team Lead' },
    { value: ROLES.TECHNICAL_TRAINER, viewValue: 'Technical Trainer' },
    { value: ROLES.BH_TRAINER, viewValue: 'BH Trainer' },
    { value: ROLES.MENTOR, viewValue: 'Mentor' },
    { value: ROLES.CR, viewValue: 'Course Representative (CR)' },
    { value: ROLES.COACH, viewValue: 'Coach' },
  ];

  roleDashboardMap: { [key: string]: string } = {
    [ROLES.SKILLING_LEAD]: '/dashboard',
    [ROLES.ACADEMY_COORDINATOR]: '/dashboard',
    [ROLES.LEAD]: '/dashboard',
    [ROLES.TECHNICAL_TRAINER]: '/dashboard',
    [ROLES.BH_TRAINER]: '/dashboard',
    [ROLES.MENTOR]: '/dashboard',
    [ROLES.CR]: '/dashboard',
    [ROLES.COACH]: '/dashboard'
  };

  loginError: string | null = null;

  private sampleUsers: { [key: string]: { password: string; roles: string[] } } = {
    'skilling.lead@example.com': { password: 'Lead@123', roles: [ROLES.SKILLING_LEAD] },
    'academy.coord@example.com': { password: 'Coord@123', roles: [ROLES.ACADEMY_COORDINATOR] },
    'team.lead@example.com': { password: 'Team@123', roles: [ROLES.LEAD] },
    'tech.trainer@example.com': { password: 'Trainer@123', roles: [ROLES.TECHNICAL_TRAINER] },
    'bh.trainer@example.com': { password: 'BHTrainer@123', roles: [ROLES.BH_TRAINER] },
    'mentor@example.com': { password: 'Mentor@123', roles: [ROLES.MENTOR] },
    'cr@example.com': { password: 'CR@123', roles: [ROLES.CR] },
    'coach@example.com': { password: 'Coach@123', roles: [ROLES.COACH] },
    'super.user@example.com': { password: 'Super@123', roles: [ROLES.SKILLING_LEAD, ROLES.LEAD] }
  };

  constructor(private router: Router, private authService: AuthService) {}

  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    role: new FormControl<string | null>(null, [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log('Login button clicked. Initiating submit().');
    this.loginError = null;

    if (this.form.invalid) {
      console.log('Form is INVALID. Marking touched and returning.');
      this.form.markAllAsTouched();
      return;
    }

    const { uname, password, role } = this.form.value;
    console.log('Form is VALID. Uname:', uname, 'Password length:', password?.length, 'Role:', role);

    if (uname && password && role) {
      const user = this.sampleUsers[uname];
      console.log('Attempting login for user:', uname, 'User data found:', !!user);

      if (user && user.password === password) {
        console.log('Username and password match.');
        const selectedRole: string = role;
        const hasMatchingRole = user.roles.includes(selectedRole);

        if (!hasMatchingRole) {
          console.log('Selected role does NOT match user\'s assigned roles. Returning.');
          this.loginError = `Selected role '${selectedRole}' does not match user's assigned roles.`;
          console.warn(`User ${uname} selected role ${selectedRole}, but actual roles are ${user.roles}`);
          return;
        }

        console.log('Calling authService.login()...');
        this.authService.login(uname, password, user.roles).subscribe(
          success => {
            console.log('authService.login().subscribe() success callback received. Success:', success);
            if (success) {
              console.log('Login successful. Navigating to dashboard.');
              const primaryRoleForNavigation = user.roles[0];
              console.log("Role :" + primaryRoleForNavigation);
              const dashboardPath = this.roleDashboardMap[primaryRoleForNavigation];
              this.router.navigate([dashboardPath || '/dashboard']);
            } else {
              console.log('Login failed: authService.login returned false.');
              this.loginError = 'Login failed. Invalid credentials or roles provided to auth service.';
            }
          },
          error => {
            console.error('authService.login().subscribe() error callback received:', error);
            this.loginError = 'An error occurred during login. Please try again.';
          }
        );
      } else {
        console.log('Invalid email or password detected locally.');
        this.loginError = 'Invalid email or password.';
      }
    } else {
      console.log('Missing form fields (uname, password, or role).');
      this.loginError = 'Please fill in all login details including a role.';
    }
  }
}