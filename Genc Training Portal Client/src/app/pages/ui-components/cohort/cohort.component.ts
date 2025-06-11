

// src/app/pages/ui-components/lists/lists.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core'; // Add OnDestroy for cleanup
import { CommonModule, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Subject, Subscription } from 'rxjs'; // Import Subscription
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { RouterLink, Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';

import { Cohort, FilterOption } from '../../../../app/models/class/cohort.model';
import { CohortService } from '../../../../app/services/cohort.service';
import { CohortCardComponent } from 'src/app/components/cohort-card/cohort-card.component';
//import { AddCohortDialogComponent } from '../add-cohort-dialog-component/add-cohort-dialog-component.component';
//import { AddCohortDialogComponent } from '../cohort-components/cohort-details/cohort-details.component';
import { AddCohortDialogComponent } from '../cohort-components/add-cohort-dialog-component/add-cohort-dialog-component.component';

@Component({
  selector: 'app-cohort',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    DatePipe,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTooltipModule,
    RouterLink,
    MatMenuModule,
    CohortCardComponent
  ],
  templateUrl: './cohort.component.html',
})
export class AppCohortComponent implements OnInit, OnDestroy { // Implement OnDestroy
  constructor(private router: Router, private dialog: MatDialog, private cohortService: CohortService) {}

  allCohorts: Cohort[] = [];
  filteredCohorts: Cohort[] = [];
  searchTerm: string = '';
  private searchInput$ = new Subject<string>();
  private subscriptions = new Subscription(); // To manage subscriptions for cleanup

  filterByOptions: FilterOption[] = [
    { label: 'All', value: 'All' },
    { label: 'FTE', value: 'FTE' },
    { label: 'Intern', value: 'Intern' },
    { label: 'SOET', value: 'SOET' },
    { label: 'Selenium', value: 'Selenium' },
    { label: 'Playwright', value: 'Playwright' },
    { label: 'CRM_Salesforce', value: 'CRM_Salesforce' },
    { label: 'Facet', value: 'Facet' },
  ];
  verticalOptions: FilterOption[] = [
    { label: 'HC/LS', value: 'HC/LS' },
    { label: 'INS', value: 'INS' },
    { label: 'BFS', value: 'BFS' },
    { label: 'CMT', value: 'CMT' },
    { label: 'NFT', value: 'NFT' },
    { label: 'PNR', value: 'PNR' },
    { label: 'Tech COE', value: 'Tech COE' },
    { label: 'CRM', value: 'CRM' },
    { label: 'HC', value: 'HC' },
    { label: 'OGP', value: 'OGP' },
  ];
  locationOptions: FilterOption[] = [
    { label: 'All', value: 'All' },
    { label: 'Chennai', value: 'Chennai' },
    { label: 'Coimbatore', value: 'Coimbatore' },
    { label: 'Bangalore', value: 'Bangalore' },
    { label: 'Pune', value: 'Pune' },
  ];
  statusOptions: FilterOption[] = [
    { label: 'In progress', value: 'In progress' },
    { label: 'Upcoming', value: 'Upcoming' },
    { label: 'Completed', value: 'Completed' },
    { label: 'Deployed', value: 'Deployed' },
  ];

  selectedFilterBy: string[] = ['All'];
  selectedVerticals: string[] = [];
  selectedLocations: string[] = ['All'];
  selectedStatuses: string[] = [];

  ngOnInit(): void {
    // Subscribe to the cohorts$ Observable from the service
    this.subscriptions.add(this.cohortService.cohorts$.subscribe(cohorts => { // <--- SUBSCRIBE TO SERVICE'S OBSERVABLE
      this.allCohorts = cohorts;
      this.selectedStatuses = ['In progress']; // Set initial filter after data is loaded
      this.applyFilters();
    }));

    this.subscriptions.add(this.searchInput$.pipe( // Add to subscriptions
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((term) => {
      this.searchTerm = term;
      this.applyFilters();
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe(); // Unsubscribe from all subscriptions to prevent memory leaks
  }

  onSearchInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchInput$.next(inputElement.value.trim());
  }

  private toggleSelection(
    selectedArray: string[],
    value: string,
    allValue: string,
    options: { label: string; value: string }[]
  ): void {
    if (value === allValue && allValue !== '') {
      if (selectedArray.length === 1 && selectedArray[0] === allValue) {
        selectedArray.splice(0, selectedArray.length);
      } else {
        selectedArray.splice(0, selectedArray.length, allValue);
      }
    } else {
      const index = selectedArray.indexOf(value);
      if (index > -1) {
        selectedArray.splice(index, 1);
      } else {
        selectedArray.push(value);
      }

      if (allValue !== '') {
        const allIndex = selectedArray.indexOf(allValue);
        if (allIndex > -1 && selectedArray.length > 1) {
          selectedArray.splice(allIndex, 1);
        } else if (selectedArray.length === 0) {
          if (options.some(opt => opt.value === allValue)) {
            selectedArray.push(allValue);
          }
        }
      }
    }
  }

  toggleFilterBy(value: string): void {
    this.toggleSelection(this.selectedFilterBy, value, 'All', this.filterByOptions);
    this.applyFilters();
  }

  toggleVertical(value: string): void {
    this.toggleSelection(this.selectedVerticals, value, '', this.verticalOptions);
    this.applyFilters();
  }

  toggleLocation(value: string): void {
    this.toggleSelection(this.selectedLocations, value, 'All', this.locationOptions);
    this.applyFilters();
  }

  toggleStatus(value: string): void {
    this.toggleSelection(this.selectedStatuses, value, '', this.statusOptions);
    this.applyFilters();
  }

  applyFilters(): void {
    let tempCohorts = [...this.allCohorts];

    if (this.searchTerm) {
      const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
      tempCohorts = tempCohorts.filter(cohort =>
        cohort.id.toLowerCase().includes(lowerCaseSearchTerm) ||
        cohort.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        cohort.technology.toLowerCase().includes(lowerCaseSearchTerm) ||
        cohort.tag.toLowerCase().includes(lowerCaseSearchTerm) ||
        cohort.location.toLowerCase().includes(lowerCaseSearchTerm) ||
        cohort.status.toLowerCase().includes(lowerCaseSearchTerm) ||
        cohort.filterBy.some(f => f.toLowerCase().includes(lowerCaseSearchTerm)) ||
        cohort.vertical.some(v => v.toLowerCase().includes(lowerCaseSearchTerm))
      );
    }

    if (!(this.selectedFilterBy.length === 1 && this.selectedFilterBy[0] === 'All')) {
      tempCohorts = tempCohorts.filter(cohort =>
        this.selectedFilterBy.some(selectedF => cohort.filterBy.includes(selectedF))
      );
    }

    if (this.selectedVerticals.length > 0) {
      tempCohorts = tempCohorts.filter(cohort =>
        this.selectedVerticals.some(selectedV => cohort.vertical.includes(selectedV))
      );
    }

    if (!(this.selectedLocations.length === 1 && this.selectedLocations[0] === 'All')) {
      tempCohorts = tempCohorts.filter(cohort =>
        this.selectedLocations.includes(cohort.location)
      );
    }

    if (this.selectedStatuses.length > 0) {
      tempCohorts = tempCohorts.filter(cohort =>
        this.selectedStatuses.includes(cohort.status)
      );
    }

    this.filteredCohorts = tempCohorts;
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'In progress':
        return 'primary';
      case 'Upcoming':
        return 'accent';
      case 'Completed':
        return 'warn';
      case 'Deployed':
        return 'accent';
      default:
        return '';
    }
  }

  getLocationColor(location: string): string {
    switch (location.toLowerCase()) {
      case 'chennai':
        return 'primary';
      case 'coimbatore':
        return 'accent';
      case 'bangalore':
        return 'warn';
      case 'pune':
        return 'accent';
      default:
        return '';
    }
  }

  addCohort(): void {
    const dialogRef = this.dialog.open(AddCohortDialogComponent, {
      width: '500px',
      disableClose: true
    });

    this.subscriptions.add(dialogRef.afterClosed().subscribe((newCohortData: Cohort | undefined) => {
      if (newCohortData) {
        // Pass the plain object data to the service for adding.
        // The service will then update its BehaviorSubject, which will
        // in turn update this component's allCohorts via subscription.
        this.cohortService.addCohort(newCohortData).subscribe({
          next: (addedCohort) => {
            console.log('New Cohort Successfully Added via Service:', addedCohort);
            // No need to manually push to this.allCohorts here,
            // the subscription to cohortService.cohorts$ will handle it.
            // this.applyFilters() will be triggered by the subscription as well.
          },
          error: (err) => console.error('Error adding cohort:', err)
        });
      } else {
        console.log('Dialog closed without adding a cohort.');
      }
    }));
  }

  viewDetails(id: string): void {
    this.router.navigate(['/ui-components/cohort-details/', id]);
    console.log(`Navigating to details for Cohort ID: ${id}`);
  }

  editCohort(cohortId: string): void {
    console.log('Edit Cohort:', cohortId);
    // Implement your edit logic (e.g., open a dialog, navigate to edit page)
  }

  deleteCohort(cohortId: string): void {
    console.log('Delete Cohort:', cohortId);
    // Implement your delete logic (e.g., show confirmation dialog, call service)
  }
}
