import { Routes } from '@angular/router';

// ui
import { AppTechTrainerComponent } from './tech-trainer/tech-trainer.component';
import { AppCoachComponent } from './coach/coach.component';
import { AppCohortComponent } from './cohort/cohort.component';
import { AppBhTrainerComponent } from './bh-trainer/bh-trainer.component';
import { AppMentorComponent } from './mentor/mentor.component';
import { AppLearningPathComponent } from './learning-path/learning-path.component';

export const UiComponentsRoutes: Routes = [
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
    ],
  },
];
