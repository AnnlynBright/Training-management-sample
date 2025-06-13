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
    route: '/dashboard/tech-trainer-list',
  },
  {
    displayName: 'Coaches',
    iconName: 'user-check',
    route: '/dashboard/coach-list',
  },
  {
    displayName: 'Cohorts',
    iconName: 'school',
    route: '/dashboard/cohort-list',
  },
  {
    displayName: 'BH Trainers',
    iconName: 'users-group',
    route: '/dashboard/bh-trainer-list',
  },
  {
    displayName: 'Mentors',
    iconName: 'users',
    route: '/dashboard/mentor-list',
  },
  {
    displayName: 'Learning Paths',
    iconName: 'calendar-code',
    route: '/dashboard/learning-paths',
  },

];
