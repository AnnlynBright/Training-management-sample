import { Routes } from '@angular/router';

// ui
import { AppTechTrainerComponent } from './tech-trainer/tech-trainer.component';
import { AppCoachComponent } from './coach/coach.component';
import { AppCohortComponent } from './cohort/cohort.component';
//import { AppCohortComponent } from './cohort/cohort.component';
import { AppBhTrainerComponent } from './bh-trainer/bh-trainer.component';
import { AppMentorComponent } from './mentor/mentor.component';
import { AppLearningPathComponent } from './learning-path/learning-path.component';
//import { CohortDetailsComponent } from './cohort-components/cohort-details/cohort-details.component';
import { CohortDetailsComponent } from 'src/app/components/cohort-components/cohort-details/cohort-details.component';
export const CoachRoutes: Routes = [
  {
    path: '',
    children: [

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
