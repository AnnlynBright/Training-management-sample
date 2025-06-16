// import { Routes } from '@angular/router';

// import { AppSideLoginComponent } from './side-login/side-login.component';
// import { AppSideRegisterComponent } from './side-register/side-register.component';

// export const AuthenticationRoutes: Routes = [
//   {
//     path: '',
//     children: [
//       {
//         path: 'login',
//         component: AppSideLoginComponent,
//       },
//       {
//         path: 'register',
//         component: AppSideRegisterComponent,
//       },
//     ],
//   },
// ];


// src/app/pages/authentication/authentication.routes.ts
import { Routes } from '@angular/router';
//import { AppSideLoginComponentSideLoginComponent } from './side-login/side-login.component'; // Correct import name
import { UnauthorizedComponent } from './unauthorized/unauthorized.component'; // Assuming this is also standalone
import { AppSideLoginComponent } from './side-login/side-login.component';
export const AuthenticationRoutes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./side-login/side-login.component').then(m => m.AppSideLoginComponent)
  },
  {
    path: 'unauthorized',
    loadComponent: () => import('./unauthorized/unauthorized.component').then(m => m.UnauthorizedComponent)
  },
  // Add other authentication routes like 'register', 'forgot-password' here, using loadComponent
  // {
  //   path: 'register',
  //   loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent)
  // },
  // {
  //   path: 'forgot-password',
  //   loadComponent: () => import('./forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
  // },
  {
    path: '**', // Catch all for authentication paths
    redirectTo: 'login',
    pathMatch: 'full'
  }
];