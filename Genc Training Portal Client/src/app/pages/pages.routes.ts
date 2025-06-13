
import { CohortDetailsComponent } from 'src/app/components/cohort-components/cohort-details/cohort-details.component'; // This path seems correct if it's in shared components

import { AppTechTrainerComponent } from './skilling-lead/tech-trainer/tech-trainer.component';
import { AppCoachComponent } from './skilling-lead/coach/coach.component';
import { AppCohortComponent } from './skilling-lead/cohort/cohort.component';
import { AppBhTrainerComponent } from './skilling-lead/bh-trainer/bh-trainer.component';
import { AppMentorComponent } from './skilling-lead/mentor/mentor.component';
import { AppLearningPathComponent } from './skilling-lead/learning-path/learning-path.component';


// src/app/pages/pages.routes.ts
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'; // This is your main general dashboard component


// This path is outside 'pages'

export const PagesRoutes: Routes = [
  {
    path: '', // This path is relative to '/dashboard' from app.routes.ts
    component: DashboardComponent, // This will be the component loaded when someone navigates to /dashboard
    data: {
      title: 'Dashboard', // You can change this to 'Home' or 'Overview' if preferred
      urls: [
        { title: 'Home', url: '/dashboard' }, // Updated title to be more general
      ],
    },
    children: [
      // === Add all your shared UI components here ===
      {
        path: 'tech-trainer-list', // Accessible at /dashboard/tech-trainer-list
        component: AppTechTrainerComponent,
      },
      {
        path: 'coach-list', // Accessible at /dashboard/coach-list
        component: AppCoachComponent,
      },
      {
        path: 'cohort-list', // Accessible at /dashboard/cohort-list
        component: AppCohortComponent,
      },
      {
        path: 'bh-trainer-list', // Accessible at /dashboard/bh-trainer-list (if it's a list of all BH trainers)
        component: AppBhTrainerComponent,
      },
      {
        path: 'mentor-list', // Accessible at /dashboard/mentor-list
        component: AppMentorComponent,
      },
      {
        path: 'learning-paths', // Accessible at /dashboard/learning-paths
        component: AppLearningPathComponent,
      },
      {
        path: 'cohort-details/:id', // Accessible at /dashboard/cohort-details/:id
        component: CohortDetailsComponent,
      },
      // You can also add other general components here that are part of the main dashboard area
    ],
  },
];