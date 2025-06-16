// import { Routes } from '@angular/router';

// // ui
// import { AppTechTrainerComponent } from './tech-trainer/tech-trainer.component';
// import { AppCoachComponent } from './coach/coach.component';
// import { AppCohortComponent } from './cohort/cohort.component';
// import { DashboardComponent } from '../dashboard/dashboard.component';
// //import { AppCohortComponent } from './cohort/cohort.component';
// import { AppBhTrainerComponent } from './bh-trainer/bh-trainer.component';
// import { AppMentorComponent } from './mentor/mentor.component';
// import { AppLearningPathComponent } from './learning-path/learning-path.component';
// //import { CohortDetailsComponent } from './cohort-components/cohort-details/cohort-details.component';
// import { CohortDetailsComponent } from 'src/app/components/cohort-components/cohort-details/cohort-details.component';
// import { TechDashboardComponent } from './technical-trainer-dashboard/dashboard.component';
// export const TechnicalTrainerRoutes: Routes = [
//   {
//     path: '',
//     children: [
     
//      {
//         path: 'dashboard',
//         component: TechDashboardComponent,
//       },
//       {
//         path: 'tech-trainer-list',
//         component: AppTechTrainerComponent,
//       },
//       {
//         path: 'coach-list',
//         component: AppCoachComponent,
//       },
//       {
//         path: 'cohort-list',
//         component: AppCohortComponent,
//       },
//       {
//         path: 'bh-trainer-list',
//         component: AppBhTrainerComponent,
//       },
//       {
//         path: 'mentor-list',
//         component: AppMentorComponent,
//       },
//       {
//         path: 'learning-paths',
//         component: AppLearningPathComponent,
//       },
//       {
//         // Add the Cohort Details route here
//         path: 'cohort-details/:id', // Define the path with the dynamic parameter
//         component: CohortDetailsComponent, // Link it to the CohortDetailsComponent
//       },
//     ],
//   },
// ];

// src/app/pages/technical-trainer/technical-trainer.routes.ts
// import { Routes } from '@angular/router';
// //import { TechnicalTrainerDashboardComponent } from './technical-trainer-dashboard/technical-trainer-dashboard.component';
// import { TechnicalTrainerListComponent } from './technical-trainer-list/technical-trainer-list.component'; // Ensure this component exists and is imported
// import { CohortComponent } from './cohort/cohort.component'; // Assuming this is for role-specific cohorts

// import { TechDashboardComponent } from './technical-trainer-dashboard/dashboard.component';

import { Routes } from '@angular/router';

// ui
import { AppTechTrainerComponent } from './tech-trainer/tech-trainer.component';
import { AppCoachComponent } from './coach/coach.component';
import { AppCohortComponent } from './cohort/cohort.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
//import { AppCohortComponent } from './cohort/cohort.component';
import { AppBhTrainerComponent } from './bh-trainer/bh-trainer.component';
import { AppMentorComponent } from './mentor/mentor.component';
import { AppLearningPathComponent } from './learning-path/learning-path.component';
//import { CohortDetailsComponent } from './cohort-components/cohort-details/cohort-details.component';
import { CohortDetailsComponent } from 'src/app/components/cohort-components/cohort-details/cohort-details.component';
import { TechDashboardComponent } from './technical-trainer-dashboard/dashboard.component';
export const TechnicalTrainerRoutes: Routes = [
  {
    path: 'dashboard', // Will be '/technical-trainer/dashboard'
    component: TechDashboardComponent,
  },
  {
    path: 'technical-trainer-list', // Will be '/technical-trainer/technical-trainer-list'
    component: AppTechTrainerComponent,
  },
  {
    path: 'cohort-list', // Will be '/technical-trainer/cohort-list'
    component: AppCohortComponent, // Assuming a component to list cohorts for this role
  },
  // ... other role-specific routes
  {
    path: '', // Optional: default redirect within the module
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];