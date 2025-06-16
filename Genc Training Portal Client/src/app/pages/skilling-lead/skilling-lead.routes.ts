import { Routes } from '@angular/router';

// ui
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AppTechTrainerComponent } from './tech-trainer/tech-trainer.component';
import { AppCoachComponent } from './coach/coach.component';
import { AppCohortComponent } from './cohort/cohort.component';
//import { AppCohortComponent } from './cohort/cohort.component';
import { AppBhTrainerComponent } from './bh-trainer/bh-trainer.component';
import { AppMentorComponent } from './mentor/mentor.component';
import { AppLearningPathComponent } from './learning-path/learning-path.component';
//import { CohortDetailsComponent } from './cohort-components/cohort-details/cohort-details.component';
import { CohortDetailsComponent } from 'src/app/components/cohort-components/cohort-details/cohort-details.component';
export const SkillingLeadRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'tech-trainer-list',
        component: AppTechTrainerComponent,
      },
      {
        path: 'coach-list',
        component: AppCoachComponent,
      },
      {
        path: 'cohort-list',
        component: AppCohortComponent,
      },
      {
        path: 'bh-trainer-list',
        component: AppBhTrainerComponent,
      },
      {
        path: 'mentor-list',
        component: AppMentorComponent,
      },
      {
        path: 'learning-paths',
        component: AppLearningPathComponent,
      },
      {
        // Add the Cohort Details route here
        path: 'cohort-details/:id', // Define the path with the dynamic parameter
        component: CohortDetailsComponent, // Link it to the CohortDetailsComponent
      },
    ],
  },
];

// src/app/pages/skilling-lead/skilling-lead.routes.ts
// import { Routes } from '@angular/router';

// // Make sure component paths are correct relative to this route file OR absolute (starting from src/app)
// // import { SkillingLeadDashboardComponent } from './dashboard/skilling-lead-dashboard.component'; // UNIQUE DASHBOARD for Skilling Lead
// // import { AppTechTrainerComponent } from 'src/app/components/tech-trainer/tech-trainer.component'; // Shared list component
// // import { AppCoachComponent } from 'src/app/components/coach/coach.component';
// // import { AppCohortComponent } from 'src/app/components/cohort/cohort.component';
// // import { AppBhTrainerComponent } from 'src/app/components/bh-trainer/bh-trainer.component';
// // import { AppMentorComponent } from 'src/app/components/mentor/mentor.component';
// // import { AppLearningPathComponent } from 'src/app/components/learning-path/learning-path.component';
// // import { CohortDetailsComponent } from 'src/app/components/cohort-components/cohort-details/cohort-details.component';

// import { DashboardComponent } from '../dashboard/dashboard.component';
// import { AppTechTrainerComponent } from './tech-trainer/tech-trainer.component';
// import { AppCoachComponent } from './coach/coach.component';
// import { AppCohortComponent } from './cohort/cohort.component';
// //import { AppCohortComponent } from './cohort/cohort.component';
// import { AppBhTrainerComponent } from './bh-trainer/bh-trainer.component';
// import { AppMentorComponent } from './mentor/mentor.component';
// import { AppLearningPathComponent } from './learning-path/learning-path.component';
// import { SkillingLeadDashboardComponent } from './dashboard/dashboard.component';
// //import { CohortDetailsComponent } from './cohort-components/cohort-details/cohort-details.component';
// import { CohortDetailsComponent } from 'src/app/components/cohort-components/cohort-details/cohort-details.component';
// export const SkillingLeadRoutes: Routes = [
//   {
//     path: '', // Relative to '/skilling-lead' from app.routes.ts
//     children: [
//       {
//         path: '', // e.g., /skilling-lead will redirect to /skilling-lead/dashboard
//         redirectTo: 'dashboard',
//         pathMatch: 'full'
//       },
//       {
//         path: 'dashboard', // Accessible at /skilling-lead/dashboard
//         component: SkillingLeadDashboardComponent,
//         data: { title: 'Skilling Lead Dashboard', urls: [{ title: 'Skilling Lead', url: '/skilling-lead/dashboard' }] },
//       },
//       // === ALL LISTS/FEATURES ACCESSIBLE BY SKILLING_LEAD ===
//       // Accessible at /skilling-lead/tech-trainer-list, /skilling-lead/coach-list, etc.
//       { path: 'tech-trainer-list', component: AppTechTrainerComponent },
//       { path: 'coach-list', component: AppCoachComponent },
//       { path: 'cohort-list', component: AppCohortComponent },
//       { path: 'bh-trainer-list', component: AppBhTrainerComponent },
//       { path: 'mentor-list', component: AppMentorComponent },
//       { path: 'learning-paths', component: AppLearningPathComponent },
//       { path: 'cohort-details/:id', component: CohortDetailsComponent },
//       // Add other exclusive features for Skilling Lead here
//     ],
//   },
// ];
