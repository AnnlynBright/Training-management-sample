// src/app/shared/constants/nav-items.ts


import { NavItem } from "../../models/interfaces/nav-item";
export const navItems: NavItem[] = [
  {
    displayName: 'Dashboard',
    iconName: 'layout-grid-add',
    route: '/dashboard-placeholder' // This will become e.g., /skilling-lead/dashboard
  },
  {
    displayName: 'Technical Trainers',
    iconName: 'user-code',
    route: '/tech-trainer-list-placeholder', // This will become e.g., /skilling-lead/tech-trainer-list
  },
  {
    displayName: 'Coaches',
    iconName: 'user-check',
    route: '/coach-list-placeholder',
  },
  {
    displayName: 'Cohorts',
    iconName: 'school',
    route: '/cohort-list-placeholder'
  },
  {
    displayName: 'BH Trainers',
    iconName: 'users-group',
    route: '/bh-trainer-list-placeholder',
  },
  {
    displayName: 'Mentors',
    iconName: 'users',
    route: '/mentor-list-placeholder',
  },
  {
    displayName: 'Learning Paths',
    iconName: 'calendar-code',
    route: '/learning-paths-placeholder',
  },
  // Add other navigation items here
];