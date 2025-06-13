// From your app.routes.ts
// src/app/pages/dashboard/dashboard.routes.ts
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component'; // Import your main Dashboard component

export const DashboardRoutes: Routes = [
  {
    // The path here is relative to '/dashboard' from app.routes.ts.
    // An empty path '' means it matches '/dashboard' itself.
    path: '',
    component: DashboardComponent,
    children: [
      // You can add sub-routes specific to the general dashboard here if needed.
      // For example, common sections like 'profile', 'settings', or 'notifications'
      // that are relevant to *all* authenticated users, regardless of their specific role.
      // { path: 'profile', component: UserProfileComponent },
      // { path: 'settings', component: DashboardSettingsComponent },
    ]
  }
];