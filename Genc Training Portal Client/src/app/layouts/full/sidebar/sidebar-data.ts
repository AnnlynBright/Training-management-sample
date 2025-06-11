import { NavItem } from '../../../models/interfaces/nav-item';

export const navItems: NavItem[] = [

  {
    displayName: 'Dashboard',
    iconName: 'layout-grid-add',
    route: '/dashboard',
  },

  {
    displayName: 'Technical Trainers',
    iconName: 'user-code',
    route: '/ui-components/tech-trainer-list',
  },
  {
    displayName: 'Coaches',
    iconName: 'user-check',
    route: '/ui-components/coach-list',
  },
  {
    displayName: 'Cohorts',
    iconName: 'school',
    route: '/ui-components/cohort-list',
  },
  {
    displayName: 'BH Trainers',
    iconName: 'users-group',
    route: '/ui-components/bh-trainer-list',
  },
  {
    displayName: 'Mentors',
    iconName: 'users',
    route: '/ui-components/mentor-list',
  },
  {
    displayName: 'Learning Paths',
    iconName: 'calendar-code',
    route: '/ui-components/learning-paths',
  },

];
