// import { NavItem } from '../../../models/interfaces/nav-item';

// export const navItems: NavItem[] = [

//   {
//     displayName: 'Dashboard',
//     iconName: 'layout-grid-add',
//     //route: '/dashboard',
//     route: '/dashboard'

//   },

//   {
//     displayName: 'Technical Trainers',
//     iconName: 'user-code',
//     route: '/dashboard/tech-trainer-list',
//   },
//   {
//     displayName: 'Coaches',
//     iconName: 'user-check',
//     route: '/dashboard/coach-list',
//   },
//   {
//     displayName: 'Cohorts',
//     iconName: 'school',
//      route: '/dashboard/cohort-list',
//    // route: '/cohort-list'

//   },
//   {
//     displayName: 'BH Trainers',
//     iconName: 'users-group',
//     route: '/dashboard/bh-trainer-list',
//   },
//   {
//     displayName: 'Mentors',
//     iconName: 'users',
//     route: '/dashboard/mentor-list',
//   },
//   {
//     displayName: 'Learning Paths',
//     iconName: 'calendar-code',
//     route: '/dashboard/learning-paths',
//   },

// ];

// // src/app/shared/sidebar/sidebar-data.ts (or wherever you defined this)
// import { NavItem } from '../../../models/interfaces/nav-item';
// //import { ROLES } from '../constants/roles'; // Make sure you import your ROLES constant
// import { ROLES } from 'src/app/shared/constants/roles';

// export const navItems: NavItem[] = [
//   {
//     displayName: 'Dashboard',
//     iconName: 'layout-grid-add',
//     route: '/dashboard',
//     roles: [
//       ROLES.SKILLING_LEAD,
//       ROLES.ACADEMY_COORDINATOR,
//       ROLES.LEAD,
//       ROLES.BATCH_OWNER,
//       ROLES.TECHNICAL_TRAINER,
//       ROLES.BH_TRAINER,
//       ROLES.MENTOR,
//       ROLES.CR,
//       ROLES.COACH,
//     ], // Assuming all roles see Dashboard
//   },
//   {
//     displayName: 'Technical Trainers',
//     iconName: 'user-code',
//     route: '/dashboard/tech-trainer-list',
//     roles: [ROLES.SKILLING_LEAD, ROLES.ACADEMY_COORDINATOR, ROLES.LEAD], // Example: Only these roles see 'Technical Trainers' list
//   },
//   {
//     displayName: 'Coaches',
//     iconName: 'user-check',
//     route: '/dashboard/coach-list',
//     roles: [ROLES.SKILLING_LEAD, ROLES.ACADEMY_COORDINATOR, ROLES.LEAD], // Example: Only these roles see 'Coaches' list
//   },
//   {
//     displayName: 'Cohorts',
//     iconName: 'school',
//     route: '/dashboard/cohort-list',
//     roles: [ROLES.SKILLING_LEAD, ROLES.ACADEMY_COORDINATOR, ROLES.LEAD, ROLES.BATCH_OWNER], // Example
//   },
//   {
//     displayName: 'BH Trainers',
//     iconName: 'users-group',
//     route: '/dashboard/bh-trainer-list',
//     roles: [ROLES.SKILLING_LEAD, ROLES.ACADEMY_COORDINATOR, ROLES.LEAD], // Example
//   },
//   {
//     displayName: 'Mentors',
//     iconName: 'users',
//     route: '/dashboard/mentor-list',
//     roles: [ROLES.SKILLING_LEAD, ROLES.ACADEMY_COORDINATOR, ROLES.LEAD], // Example
//   },
//   {
//     displayName: 'Learning Paths',
//     iconName: 'calendar-code',
//     route: '/dashboard/learning-paths',
//     roles: [ROLES.SKILLING_LEAD, ROLES.ACADEMY_COORDINATOR, ROLES.TECHNICAL_TRAINER], // Example
//   },
// ];


// src/app/shared/sidebar/sidebar-data.ts
import { NavItem } from '../../../models/interfaces/nav-item';
import { ROLES } from 'src/app/shared/constants/roles';

export const navItems: NavItem[] = [
  {
    displayName: 'Dashboard',
    iconName: 'layout-grid-add',
    route: '/dashboard', // This remains a general dashboard link
    roles: [
      ROLES.SKILLING_LEAD,
      ROLES.ACADEMY_COORDINATOR,
      ROLES.LEAD,
      ROLES.BATCH_OWNER,
      ROLES.TECHNICAL_TRAINER,
      ROLES.BH_TRAINER,
      ROLES.MENTOR,
      ROLES.CR,
      ROLES.COACH,
    ],
  },
  {
    displayName: 'Technical Trainers',
    iconName: 'user-code',
    route: 'technical-trainer-list', // Changed to segment only
    roles: [ROLES.SKILLING_LEAD, ROLES.ACADEMY_COORDINATOR, ROLES.LEAD, ROLES.TECHNICAL_TRAINER],
    isRoleRooted: true, // This link will be prefixed by the user's role
  },
  {
    displayName: 'Coaches',
    iconName: 'user-check',
    route: 'coach-list', // Changed to segment only
    roles: [ROLES.SKILLING_LEAD, ROLES.ACADEMY_COORDINATOR, ROLES.LEAD, ROLES.COACH],
    isRoleRooted: true, // This link will be prefixed by the user's role
  },
  {
    displayName: 'Cohorts',
    iconName: 'school',
    route: 'cohort-list', // Changed to segment only
    roles: [ROLES.SKILLING_LEAD, ROLES.ACADEMY_COORDINATOR, ROLES.LEAD, ROLES.BATCH_OWNER, ROLES.TECHNICAL_TRAINER],
    isRoleRooted: true, // This link will be prefixed by the user's role
  },
  {
    displayName: 'BH Trainers',
    iconName: 'users-group',
    route: 'bh-trainer-list', // Changed to segment only
    roles: [ROLES.SKILLING_LEAD, ROLES.ACADEMY_COORDINATOR, ROLES.LEAD, ROLES.BH_TRAINER],
    isRoleRooted: true, // This link will be prefixed by the user's role
  },
  {
    displayName: 'Mentors',
    iconName: 'users',
    route: 'mentor-list', // Changed to segment only
    roles: [ROLES.SKILLING_LEAD, ROLES.ACADEMY_COORDINATOR, ROLES.LEAD, ROLES.MENTOR],
    isRoleRooted: true, // This link will be prefixed by the user's role
  },
  {
    displayName: 'Learning Paths',
    iconName: 'calendar-code',
    route: 'learning-paths', // Changed to segment only
    roles: [ROLES.SKILLING_LEAD, ROLES.ACADEMY_COORDINATOR, ROLES.TECHNICAL_TRAINER],
    isRoleRooted: true, // This link will be prefixed by the user's role
  },
];