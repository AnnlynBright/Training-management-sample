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
// import { CommonModule } from '@angular/common';

// import { MaterialModule } from 'src/app/material.module'; // Adjust based on your setup

// import { MatButtonModule } from '@angular/material/button';
// import { AuthService } from '../../../services/auth.service';
// import { UserRoleService } from '../../../services/user-role.service'; // NEW: Import UserRoleService
// import { ROLES } from '../../../shared/constants/roles';

// @Component({
//   selector: 'app-side-login',
//   standalone: true,
//   imports: [
//     RouterModule,
//     MaterialModule,
//     FormsModule,
//     ReactiveFormsModule,
//     MatButtonModule,
//     CommonModule,
//   ],
//   templateUrl: './side-login.component.html',
// })
// export class AppSideLoginComponent {
//   availableRoles = [
//     { value: ROLES.SKILLING_LEAD, viewValue: 'Skilling Lead' },
//     { value: ROLES.ACADEMY_COORDINATOR, viewValue: 'Academy Coordinator' },
//     { value: ROLES.LEAD, viewValue: 'Team Lead' },
//     { value: ROLES.TECHNICAL_TRAINER, viewValue: 'Technical Trainer' },
//     { value: ROLES.BH_TRAINER, viewValue: 'BH Trainer' },
//     { value: ROLES.MENTOR, viewValue: 'Mentor' },
//     { value: ROLES.CR, viewValue: 'Course Representative (CR)' },
//     { value: ROLES.COACH, viewValue: 'Coach' },
//   ];

//   roleDashboardMap: { [key: string]: string } = {
//     [ROLES.SKILLING_LEAD]: 'skilling-lead/dashboard',
//     [ROLES.ACADEMY_COORDINATOR]: 'academy-coordinator/dashboard',
//     [ROLES.LEAD]: 'lead/dashboard',
//     [ROLES.TECHNICAL_TRAINER]: 'technical-trainer/dashboard',
//     [ROLES.BH_TRAINER]: 'bh-trainer/dashboard',
//     [ROLES.MENTOR]: 'mentor/dashboard',
//     [ROLES.CR]: 'cr/dashboard',
//     [ROLES.COACH]: 'coach/dashboard'
//   };

//   loginError: string | null = null;

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

//   // NEW: Inject UserRoleService
//   constructor(private router: Router, private authService: AuthService, private userRoleService: UserRoleService) {}

//   form = new FormGroup({
//     uname: new FormControl('', [Validators.required, Validators.email]),
//     password: new FormControl('', [Validators.required]),
//     role: new FormControl<string | null>(null, [Validators.required]),
//   });

//   get f() {
//     return this.form.controls;
//   }

//   submit() {
//     console.log('Login button clicked. Initiating submit().');
//     this.loginError = null;

//     if (this.form.invalid) {
//       console.log('Form is INVALID. Marking touched and returning.');
//       this.form.markAllAsTouched();
//       return;
//     }

//     const { uname, password, role } = this.form.value;
//     console.log('Form is VALID. Uname:', uname, 'Password length:', password?.length, 'Role:', role);

//     if (uname && password && role) {
//       const user = this.sampleUsers[uname];
//       console.log('Attempting login for user:', uname, 'User data found:', !!user);

//       if (user && user.password === password) {
//         console.log('Username and password match.');
//         const selectedRole: string = role;
//         const hasMatchingRole = user.roles.includes(selectedRole);

//         if (!hasMatchingRole) {
//           console.log('Selected role does NOT match user\'s assigned roles. Returning.');
//           this.loginError = `Selected role '${selectedRole}' does not match user's assigned roles.`;
//           console.warn(`User ${uname} selected role ${selectedRole}, but actual roles are ${user.roles}`);
//           return;
//         }

//         console.log('Calling authService.login()...');
//         this.authService.login(uname, password, user.roles).subscribe(
//           success => {
//             console.log('authService.login().subscribe() success callback received. Success:', success);
//             if (success) {
//               console.log('Login successful. Navigating to dashboard.');
//               const primaryRoleForNavigation = user.roles[0]; // Assuming first role is primary

//               // NEW: Publish the primary role to the UserRoleService
//               this.userRoleService.setPrimaryRole(primaryRoleForNavigation);

//               console.log("Role :" + primaryRoleForNavigation);
//               const dashboardPath = this.roleDashboardMap[primaryRoleForNavigation];
//               this.router.navigate([dashboardPath || `${primaryRoleForNavigation}/dashboard`]);
//               console.log(primaryRoleForNavigation)
//             } else {
//               console.log('Login failed: authService.login returned false.');
//               this.loginError = 'Login failed. Invalid credentials or roles provided to auth service.';
//             }
//           },
//           error => {
//             console.error('authService.login().subscribe() error callback received:', error);
//             this.loginError = 'An error occurred during login. Please try again.';
//           }
//         );
//       } else {
//         console.log('Invalid email or password detected locally.');
//         this.loginError = 'Invalid email or password.';
//       }
//     } else {
//       console.log('Missing form fields (uname, password, or role).');
//       this.loginError = 'Please fill in all login details including a role.';
//     }
//   }
// }

// src/app/pages/authentication/side-login/side-login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms'; // Import ReactiveFormsModule and FormsModule here
import { Router, RouterModule } from '@angular/router'; // Import RouterModule here
import { CommonModule } from '@angular/common'; // Import CommonModule here

// Import ALL necessary Angular Material Modules directly into this component's imports
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core'; // MatOption is often from @angular/material/core or MatSelectModule exports it
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AuthService } from 'src/app/services/auth.service';
import { UserRoleService } from 'src/app/services/user-role.service';
import { ROLES } from 'src/app/shared/constants/roles';


interface User {
  password: string;
  roles: string[];
}

@Component({
  selector: 'app-side-login',
  // Mark as standalone
  standalone: true,
  // Add all necessary modules directly here for standalone component
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule, // For [routerLink]

    // Angular Material Modules
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule, // Needed for mat-option
    MatCheckboxModule,
  ],
  templateUrl: './side-login.component.html',
  //styleUrls: ['./side-login.component.scss'] // Ensure you have this file or remove if not needed
})
export class AppSideLoginComponent implements OnInit { // Correct component name

  form: FormGroup;
  errorMessage: string = ''; // Renamed from loginError to match template usage

  // Sample users with their passwords and roles
  private sampleUsers: { [key: string]: User } = {
    'skilling.lead@example.com': { password: 'Lead@123', roles: [ROLES.SKILLING_LEAD] },
    'academy.coord@example.com': { password: 'Coord@123', roles: [ROLES.ACADEMY_COORDINATOR] },
    'lead@example.com': { password: 'Lead@123', roles: [ROLES.LEAD] },
    'batch.owner@example.com': { password: 'Batch@123', roles: [ROLES.BATCH_OWNER] },
    'tech.trainer@example.com': { password: 'Trainer@123', roles: [ROLES.TECHNICAL_TRAINER] },
    'bh.trainer@example.com': { password: 'BHTrainer@123', roles: [ROLES.BH_TRAINER] },
    'mentor@example.com': { password: 'Mentor@123', roles: [ROLES.MENTOR] },
    'cr@example.com': { password: 'CR@123', roles: [ROLES.CR] },
    'coach@example.com': { password: 'Coach@123', roles: [ROLES.COACH] },
    'super.user@example.com': { password: 'Super@123', roles: [ROLES.SKILLING_LEAD, ROLES.LEAD, ROLES.TECHNICAL_TRAINER] } // Example with multiple roles
  };

  // Available roles for the dropdown, derived from your ROLES constant
  availableRoles: { value: string; viewValue: string }[] = [
    { value: ROLES.SKILLING_LEAD, viewValue: 'Skilling Lead' },
    { value: ROLES.ACADEMY_COORDINATOR, viewValue: 'Academy Coordinator' },
    { value: ROLES.LEAD, viewValue: 'Team Lead' },
    { value: ROLES.BATCH_OWNER, viewValue: 'Batch Owner' },
    { value: ROLES.TECHNICAL_TRAINER, viewValue: 'Technical Trainer' },
    { value: ROLES.BH_TRAINER, viewValue: 'BH Trainer' },
    { value: ROLES.MENTOR, viewValue: 'Mentor' },
    { value: ROLES.CR, viewValue: 'Course Representative (CR)' },
    { value: ROLES.COACH, viewValue: 'Coach' },
  ];


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private userRoleService: UserRoleService
  ) {
    this.form = this.fb.group({
      uname: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Optionally redirect if already logged in
    if (this.authService.isLoggedIn()) {
      const currentUserRoles = this.authService.getCurrentUserRoles();
      if (currentUserRoles && currentUserRoles.length > 0) {
        const primaryRole = currentUserRoles[0];
        const dashboardPath = this.getDashboardPathForRole(primaryRole);
        if (dashboardPath) {
          this.router.navigate([dashboardPath]);
        } else {
          this.router.navigate(['/dashboard']);
        }
      } else {
        this.router.navigate(['/dashboard']);
      }
    }
  }

  submit(): void {
    this.errorMessage = '';
    if (this.form.invalid) {
      this.form.markAllAsTouched(); // Mark all touched to show errors
      this.errorMessage = 'Please fill in all required fields correctly.';
      return;
    }

    const { uname, password, role } = this.form.value;

    const user = this.sampleUsers[uname];

    if (user && user.password === password) {
      const selectedRole: string = role;
      const hasMatchingRole = user.roles.includes(selectedRole);

      if (!hasMatchingRole) {
        this.errorMessage = `User '${uname}' does not have the selected role: '${selectedRole}'.`;
        return;
      }

      this.authService.login(uname, password, user.roles).subscribe(
        success => {
          if (success) {
            const primaryRoleForNavigation = user.roles[0];

            this.userRoleService.setPrimaryRole(primaryRoleForNavigation);

            console.log("SIDE-LOGIN: User role identified for navigation:", primaryRoleForNavigation);

            const dashboardPath = this.getDashboardPathForRole(primaryRoleForNavigation);

            console.log("SIDE-LOGIN: Mapped dashboard path from getDashboardPathForRole:", dashboardPath);

            if (dashboardPath) {
              console.log("SIDE-LOGIN: Attempting to navigate to:", dashboardPath);
              this.router.navigate([dashboardPath])
                .then(successNav => {
                  console.log('SIDE-LOGIN: ROUTER NAVIGATION SUCCESS:', successNav);
                })
                .catch(errorNav => {
                  console.error('SIDE-LOGIN: ROUTER NAVIGATION ERROR:', errorNav);
                });
            } else {
              console.warn("SIDE-LOGIN: No specific dashboard path found for role, navigating to general dashboard.");
              this.router.navigate(['/dashboard']);
            }

          } else {
            this.errorMessage = 'Login failed. Please check your credentials.';
          }
        },
        error => {
          console.error('SIDE-LOGIN: LOGIN SUBSCRIPTION ERROR:', error);
          this.errorMessage = 'An error occurred during login. Please try again later.';
        }
      );
    } else {
      this.errorMessage = 'Invalid username or password.';
    }
  }

  get f() { // Added getter for form controls for template access
    return this.form.controls;
  }

  private getDashboardPathForRole(role: string): string | undefined {
    const roleDashboardMap: { [key: string]: string } = {
      [ROLES.SKILLING_LEAD]: 'skilling-lead/dashboard',
      [ROLES.ACADEMY_COORDINATOR]: 'academy-coordinator/dashboard',
      [ROLES.LEAD]: 'lead/dashboard',
      [ROLES.BATCH_OWNER]: 'batch-owner/dashboard',
      [ROLES.TECHNICAL_TRAINER]: 'technical-trainer/dashboard',
      [ROLES.BH_TRAINER]: 'bh-trainer/dashboard',
      [ROLES.MENTOR]: 'mentor/dashboard',
      [ROLES.CR]: 'cr/dashboard',
      [ROLES.COACH]: 'coach/dashboard',
    };
    return roleDashboardMap[role];
  }
}