
// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { AuthGuard } from './guards/auth.guard';
import { ROLES } from './shared/constants/roles'; // Ensure correct path

export const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/authentication/login',
        pathMatch: 'full',
      },
      // === RE-ADDED THE GENERAL 'dashboard' ROUTE ===
      // This route will now load pages.routes.ts, which contains your shared UI components.
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.routes').then((m) => m.PagesRoutes),
        canActivate: [AuthGuard], // Protect this main dashboard route
        // Define roles that can access the general dashboard and its sub-routes.
        // This likely includes ALL authenticated roles.
        data: { roles: [
            ROLES.SKILLING_LEAD,
            ROLES.ACADEMY_COORDINATOR,
            ROLES.LEAD,
            // ROLES.BATCH_OWNER, // Uncomment if applicable
            ROLES.TECHNICAL_TRAINER,
            ROLES.BH_TRAINER,
            ROLES.MENTOR,
            ROLES.CR,
            ROLES.COACH
        ]}
      },
      // === Keep your specific role routes as well, but understand their purpose ===
      // These specific role routes would be for unique, *non-shared* dashboards or features.
      // If all the "list" components are in pages.routes, then these individual role
      // routes might only be for a single "My Dashboard" component unique to each role,
      // or for very specific, distinct functionalities.
      {
        path: 'skilling-lead',
        loadChildren: () =>
          import('./pages/skilling-lead/skilling-lead.routes').then((m) => m.SkillingLeadRoutes),
        canActivate: [AuthGuard],
        data: { roles: [ROLES.SKILLING_LEAD] }
      },
      {
        path: 'academy-coordinator',
        loadChildren: () =>
          import('./pages/academy-coordinator/academy-coordinator.routes').then((m) => m.AcademyCoordinatorRoutes),
        canActivate: [AuthGuard],
        data: { roles: [ROLES.ACADEMY_COORDINATOR] }
      },
      {
        path: 'lead',
        loadChildren: () =>
          import('./pages/lead/lead.routes').then((m) => m.LeadRoutes),
        canActivate: [AuthGuard],
        data: { roles: [ROLES.LEAD] }
      },
      {
        path: 'technical-trainer',
        loadChildren: () =>
          import('./pages/technical-trainer/technical-trainer.routes').then((m) => m.TechnicalTrainerRoutes),
        canActivate: [AuthGuard],
        data: { roles: [ROLES.TECHNICAL_TRAINER] }
      },
      {
        path: 'bh-trainer',
        loadChildren: () =>
          import('./pages/bh-trainer/bh-trainer.routes').then((m) => m.BhTrainerRoutes),
        canActivate: [AuthGuard],
        data: { roles: [ROLES.BH_TRAINER] }
      },
      {
        path: 'mentor',
        loadChildren: () =>
          import('./pages/mentor/mentor.routes').then((m) => m.MentorRoutes),
        canActivate: [AuthGuard],
        data: { roles: [ROLES.MENTOR] }
      },
      {
        path: 'cr',
        loadChildren: () =>
          import('./pages/cr/cr.routes').then((m) => m.CrRoutes),
        canActivate: [AuthGuard],
        data: { roles: [ROLES.CR] }
      },
      {
        path: 'coach',
        loadChildren: () =>
          import('./pages/coach/coach.routes').then((m) => m.CoachRoutes),
        canActivate: [AuthGuard],
        data: { roles: [ROLES.COACH] }
      },
      // {
      //   path: 'ui-components',
      //   loadChildren: () =>
      //     import('./pages/ui-components/ui-components.routes').then(
      //       (m) => m.UiComponentsRoutes
      //     ),
      //   canActivate: [AuthGuard],
      // },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.routes').then(
            (m) => m.AuthenticationRoutes
          ),
      },
      {
        path: 'authentication/unauthorized',
        loadComponent: () => import('./pages/authentication/unauthorized/unauthorized.component').then(m => m.UnauthorizedComponent)
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];