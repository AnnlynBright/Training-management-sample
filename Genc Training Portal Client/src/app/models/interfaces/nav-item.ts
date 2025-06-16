// export interface NavItem {
//     displayName?: string;
//     disabled?: boolean;
//     external?: boolean;
//     twoLines?: boolean;
//     chip?: boolean;
//     iconName?: string;
//     navCap?: string;
//     chipContent?: string;
//     chipClass?: string;
//     subtext?: string;
//     route?: string;
//     children?: NavItem[];
//     ddType?: string;
//     roles?: string[]; 
// }
// // export interface NavItem {
// //     displayName: string;
// //     iconName: string;
// //     route?: string; // Optional if some items are just for grouping
// //     children?: NavItem[]; // For nested menus
// //     roles?: string[]; // Add this property to specify which roles can see this item
// //   }

// // export interface NavItem {
// //     displayName: string;
// //     iconName: string;
// //     route?: string; // Route is optional, as it will be dynamically set
// //     children?: NavItem[]; // If you have nested navigation
// //   }


// src/app/models/interfaces/nav-item.ts
export interface NavItem {
    displayName?: string;
    disabled?: boolean;
    external?: boolean;
    twoLines?: boolean;
    chip?: boolean;
    iconName?: string;
    navCap?: string;
    chipContent?: string;
    chipClass?: string;
    subtext?: string;
    route?: string;
    children?: NavItem[];
    ddType?: string;
    roles?: string[];
    isRoleRooted?: boolean; // NEW: Flag to indicate if route should be prefixed by primary role
  }