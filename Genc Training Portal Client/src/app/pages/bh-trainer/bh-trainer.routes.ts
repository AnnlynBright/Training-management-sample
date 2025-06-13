// // import { Routes } from '@angular/router';

// // // ui
// // import { AppTechTrainerComponent } from './tech-trainer/tech-trainer.component';
// // import { AppCoachComponent } from './coach/coach.component';
// // import { AppCohortComponent } from './cohort/cohort.component';
// // //import { AppCohortComponent } from './cohort/cohort.component';
// // import { AppBhTrainerComponent } from './bh-trainer/bh-trainer.component';
// // import { AppMentorComponent } from './mentor/mentor.component';
// // import { AppLearningPathComponent } from './learning-path/learning-path.component';
// // //import { CohortDetailsComponent } from './cohort-components/cohort-details/cohort-details.component';
// // import { CohortDetailsComponent } from 'src/app/components/cohort-components/cohort-details/cohort-details.component';
// // export const BhTrainerRoutes: Routes = [
// //   {
// //     path: '',
// //     children: [

// //       {
// //         path: 'tech-trainer-list',
// //         component: AppTechTrainerComponent,
// //       },
// //       {
// //         path: 'coach-list',
// //         component: AppCoachComponent,
// //       },
// //       {
// //         path: 'cohort-list',
// //         component: AppCohortComponent,
// //       },
// //       {
// //         path: 'bh-trainer-list',
// //         component: AppBhTrainerComponent,
// //       },
// //       {
// //         path: 'mentor-list',
// //         component: AppMentorComponent,
// //       },
// //       {
// //         path: 'learning-paths',
// //         component: AppLearningPathComponent,
// //       },
// //       {
// //         // Add the Cohort Details route here
// //         path: 'cohort-details/:id', // Define the path with the dynamic parameter
// //         component: CohortDetailsComponent, // Link it to the CohortDetailsComponent
// //       },
// //     ],
// //   },
// // ];


// // src/app/pages/bh-trainer/bh-trainer.routes.ts
// import { Routes } from '@angular/router';

// // Import the main dashboard component for the BH Trainer role
// import { BhTrainerDashboardComponent } from './dashboard/dashboard.component'; // <--- NEW IMPORT for the default dashboard

// // ui
// import { AppTechTrainerComponent } from './tech-trainer/tech-trainer.component';
// import { AppCoachComponent } from './coach/coach.component';
// import { AppCohortComponent } from './cohort/cohort.component';
// //import { AppCohortComponent } from './cohort/cohort.component';
// import { AppBhTrainerComponent } from './bh-trainer/bh-trainer.component';
// import { AppMentorComponent } from './mentor/mentor.component';
// import { AppLearningPathComponent } from './learning-path/learning-path.component';
// //import { CohortDetailsComponent } from './cohort-components/cohort-details/cohort-details.component';
// import { CohortDetailsComponent } from 'src/app/components/cohort-components/cohort-details/cohort-details.component';


// export const BhTrainerRoutes: Routes = [
//   {
//     path: '', // This path is relative to '/bh-trainer' from app.routes.ts
//     children: [
//       {
//         // This is the default route for '/bh-trainer'
//         // If a user navigates to just '/bh-trainer', this component will be displayed.
//         path: '',
//         component: BhTrainerDashboardComponent, // <--- Added the default dashboard component
//         pathMatch: 'full' // Ensures it only matches the exact path '/bh-trainer'
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
// src/app/pages/bh-trainer/bh-trainer.routes.ts
import { Routes } from '@angular/router';

// CORRECTED IMPORT for the main BH Trainer Dashboard component
//import { BhTrainerDashboardComponent } from './bh-trainer-dashboard/bh-trainer-dashboard.component'; // <--- Corrected Path!
import { BhTrainerDashboardComponent } from './dashboard/dashboard.component';
// NOTE: You should REMOVE the imports below if these components are NOT specific
// to a BH Trainer's UNIQUE functionalities and are instead in pages.routes.ts
// for shared access.
// Example: if AppTechTrainerComponent is a global list, don't import it here.
// import { AppTechTrainerComponent } from './tech-trainer/tech-trainer.component';
// import { AppCoachComponent } from './coach/coach.component';
// import { AppCohortComponent } from './cohort/cohort.component';
// import { AppBhTrainerComponent } from './bh-trainer/bh-trainer.component'; // Likely a list of BH Trainers, belongs in shared
// import { AppMentorComponent } from './mentor/mentor.component';
// import { AppLearningPathComponent } from './learning-path/learning-path.component';
// import { CohortDetailsComponent } from 'src/app/components/cohort-components/cohort-details/cohort-details.component';


export const BhTrainerRoutes: Routes = [
  {
    path: '', // This path is relative to '/bh-trainer' from app.routes.ts
    children: [
      {
        // This is the default route for '/bh-trainer'
        // If a user navigates to just '/bh-trainer', this component will be displayed.
        path: '',
        component: BhTrainerDashboardComponent,
        pathMatch: 'full' // Ensures it only matches the exact path '/bh-trainer'
      },
      // === IMPORTANT: REMOVE ALL THE SHARED "LIST" ROUTES FROM HERE ===
      // These routes belong in src/app/pages/pages.routes.ts now.

      // Example of routes that *would* belong here for a BH Trainer:
      // {
      //   path: 'my-sessions', // e.g., /bh-trainer/my-sessions
      //   component: MyAssignedSessionsComponent, // Component to view their own sessions
      // },
      // {
      //   path: 'trainee-feedback-submission', // e.g., /bh-trainer/trainee-feedback-submission
      //   component: TraineeFeedbackSubmissionComponent, // Component for submitting feedback
      // },
      // {
      //   path: 'my-content', // e.g., /bh-trainer/my-content
      //   component: MyBehavioralContentComponent, // Component to manage their own content
      // },
      // {
      //   path: 'attendance', // e.g., /bh-trainer/attendance
      //   component: AttendanceMarkingComponent, // Component for marking attendance
      // },
      // If a BH Trainer needs to view specific cohort details they are assigned to:
      // {
      //   path: 'assigned-cohort-details/:id',
      //   component: CohortDetailsComponent, // Re-import if truly needed here
      // },
    ],
  },
];