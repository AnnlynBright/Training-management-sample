


// //src/app/layout/sidebar/sidebar.component.ts
// import {
//   Component,
//   EventEmitter,
//   Input,
//   OnInit,
//   Output,
//   OnDestroy // NEW: Import OnDestroy
// } from '@angular/core';
// import { BrandingComponent } from './branding.component';
// import { TablerIconsModule } from 'angular-tabler-icons';
// import { MaterialModule } from 'src/app/material.module';
// import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common'; // NEW: Import CommonModule for ngIf/ngFor
// import { Subscription } from 'rxjs'; // NEW: Import Subscription for managing observables

// // import { NavItem } from '../../models/interfaces/nav-item'; // Ensure path is correct
// // import { navItems as allNavItems } from '../../shared/constants/nav-items'; // NEW: Import your complete navItems list
// // import { UserRoleService } from '../../services/user-role.service'; // NEW: Import UserRoleService

// import { NavItem } from 'src/app/models/interfaces/nav-item';
// import { navItems as allNavItems } from './sidebar-data';
// import { UserRoleService } from 'src/app/services/user-role.service';
// @Component({
//   selector: 'app-sidebar',
//   standalone: true,
//   imports: [
//     BrandingComponent,
//     TablerIconsModule,
//     MaterialModule,
//     RouterModule,
//     CommonModule // NEW: Add CommonModule to imports
//   ],
//   templateUrl: './sidebar.component.html',
// })
// export class SidebarComponent implements OnInit, OnDestroy { // NEW: Implement OnDestroy
//   @Input() showToggle = true;
//   @Output() toggleMobileNav = new EventEmitter<void>();
//   @Output() toggleCollapsed = new EventEmitter<void>();

//   filteredNavItems: NavItem[] = []; // This will hold the nav items visible to the current user
//   private roleSubscription!: Subscription; // To manage the subscription to the role service

//   // NEW: Inject UserRoleService
//   constructor(private userRoleService: UserRoleService) { }

//   ngOnInit(): void {
//     // Subscribe to changes in the primary role from the UserRoleService
//     this.roleSubscription = this.userRoleService.primaryRole$.subscribe(
//       (primaryRole) => {
//         this.filterNavigationItems(primaryRole);
//       }
//     );
//   }

//   // NEW: Method to filter navigation items based on the user's role
//   private filterNavigationItems(primaryRole: string | null): void {
//     if (!primaryRole) {
//       this.filteredNavItems = []; // If no role is set (e.g., not logged in), show no nav items
//       return;
//     }

//     this.filteredNavItems = allNavItems.filter((item) => {
//       // If a nav item doesn't specify roles, you can decide if it's visible to all
//       // or visible to none. Here, it's visible to all if no roles are specified.
//       if (!item.roles || item.roles.length === 0) {
//         return true;
//       }
//       // Check if the user's primary role is included in the item's allowed roles
//       return item.roles.includes(primaryRole);
//     });

//     console.log('SidebarComponent: Filtered Nav Items for role', primaryRole, ':', this.filteredNavItems);
//   }

//   // NEW: Implement ngOnDestroy to unsubscribe and prevent memory leaks
//   ngOnDestroy(): void {
//     if (this.roleSubscription) {
//       this.roleSubscription.unsubscribe();
//     }
//   }
// }

/// src/app/layouts/sidebar/sidebar.component.ts
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy
} from '@angular/core';
import { BrandingComponent } from './branding.component';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

import { NavItem } from 'src/app/models/interfaces/nav-item';
// CORRECTED PATH: Assuming sidebar-data.ts is in shared/sidebar
//import { navItems as allNavItems } from '../../shared/sidebar/sidebar-data';
import { navItems as allNavItems } from './sidebar-data';
import { UserRoleService } from 'src/app/services/user-role.service';

// Import specific Material modules needed for the template if not covered by MaterialModule
import { MatNavList, MatListItem } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion'; // For mat-expansion-panel
import { MatButtonModule } from '@angular/material/button'; // For logout button

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BrandingComponent,
    TablerIconsModule,
    MaterialModule,

    // Explicit Material modules for standalone component if not in MaterialModule
    MatNavList,
    MatListItem,
    MatExpansionModule,
    MatButtonModule,
  ],
  templateUrl: './sidebar.component.html',
  //styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  @Input() showToggle = true;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  filteredNavItems: NavItem[] = [];
  private roleSubscription!: Subscription;

  constructor(public userRoleService: UserRoleService) { // Made userRoleService public for template access
    const initialRole = this.userRoleService.getPrimaryRole();
    if (initialRole) {
      this.filterNavigationItems(initialRole);
    }
  }

  ngOnInit(): void {
    this.roleSubscription = this.userRoleService.primaryRole$.subscribe(
      (primaryRole) => {
        console.log('SidebarComponent: primaryRole$ emitted:', primaryRole);
        this.filterNavigationItems(primaryRole);
      }
    );
  }

  private filterNavigationItems(primaryRole: string | null): void {
    console.log('SidebarComponent: Filtering nav items for role:', primaryRole);
    if (!primaryRole) {
      this.filteredNavItems = [];
      return;
    }

    this.filteredNavItems = allNavItems.filter((item) => {
      if (!item.roles || item.roles.length === 0) {
        return true;
      }
      return item.roles.includes(primaryRole);
    });

    console.log('SidebarComponent: Filtered Nav Items for role', primaryRole, ':', this.filteredNavItems.map(item => item.displayName));
  }

  /**
   * Dynamically constructs the routerLink array based on the nav item's configuration.
   * If `isRoleRooted` is true, the primary role is prepended to the route.
   */
  getRouterLink(navItem: NavItem): string[] {
    const primaryRole = this.userRoleService.getPrimaryRole();

    if (navItem.isRoleRooted && primaryRole && navItem.route) {
      // For role-rooted paths: /<primary-role>/<route-segment>
      return [`/${primaryRole}/${navItem.route}`];
    } else if (navItem.route) {
      // For general paths: /<full-route>
      return [navItem.route];
    }
    // Fallback if route is undefined (should ideally not happen with correct data)
    return ['/'];
  }

  ngOnDestroy(): void {
    if (this.roleSubscription) {
      this.roleSubscription.unsubscribe();
    }
  }
}