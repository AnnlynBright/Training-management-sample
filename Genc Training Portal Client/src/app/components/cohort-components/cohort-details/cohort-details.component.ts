

// src/app/pages/ui-components/cohort-details/cohort-details.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

// Import models and service
//import { Cohort, CohortMember, Trainee } from '../../../../../app/models/class/cohort.model';
import { Cohort } from 'src/app/models/class/cohort.model';
//import { CohortService } from '../../../../../app/services/cohort.service';
import { CohortService } from 'src/app/services/cohort.service';
import { CohortMember } from 'src/app/models/class/cohortmember.model';
//import { Trainee } from '../../../../../app/models/class/trainee.model';
import { Trainee } from 'src/app/models/class/trainee.model';
@Component({
  selector: 'app-cohort-details',
  standalone: true,
  imports: [
    CommonModule, MatCardModule, MatButtonModule, RouterLink, MatIconModule,
    MatFormFieldModule, MatInputModule, MatTableModule, MatPaginator,
    MatChipsModule, MatCheckboxModule, MatSelectModule, FormsModule
  ],
  templateUrl: './cohort-details.component.html',
  styleUrls: ['./cohort-details.component.scss']
})
export class CohortDetailsComponent implements OnInit {
  cohort: Cohort | undefined;
  cohortId: string | null = null;

  cohortMembers: CohortMember[] = [];
  allTrainees: Trainee[] = [];

  displayedColumns: string[] = [
    'select', 'no', 'name', 'candidateId', 'qualifier', 'interim', 'final',
    'dayOfBoarding', 'email', 'tekstack', 'status', 'presentAbsent'
  ];
  dataSource = new MatTableDataSource<Trainee>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  traineeSearchTerm: string = '';
  selectedYear: string = '2025';
  selectedMonth: string = '05';

  constructor(private route: ActivatedRoute, private router: Router, private cohortService: CohortService) { }

  ngOnInit(): void {
    // Get cohort ID from route parameters
    this.route.paramMap.subscribe(params => {
      this.cohortId = params.get('id');
      if (this.cohortId) {
        // Fetch specific cohort from the service
        // getCohortById still works with 'of' because it reads the current value
        // of the BehaviorSubject, which gets updated when new cohorts are added.
        this.cohortService.getCohortById(this.cohortId).subscribe(cohort => {
          this.cohort = cohort;
          if (!this.cohort) {
            this.router.navigate(['/cohorts']);
          }
        });
      } else {
        this.router.navigate(['/cohorts']);
      }
    });

    this.cohortService.getTrainees().subscribe(trainees => {
      this.allTrainees = trainees;
      this.dataSource.data = this.allTrainees;
    });

    this.cohortService.getCohortMembers().subscribe(members => {
      this.cohortMembers = members;
    });


    setTimeout(() => {
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
    });

    this.applyTraineeFilter();
  }

  getTraineeStatusColor(status: string): string {
    switch (status) {
      case 'In training': return 'primary';
      case 'Completed': return 'accent';
      default: return '';
    }
  }

  getPresentAbsentColor(status: string): string {
    return status === 'Present' ? 'primary' : 'warn';
  }

  getDotColor(status: 'dot' | 'tick' | 'cross'): string {
      switch(status) {
          case 'dot': return '#9e9e9e';
          case 'tick': return 'green';
          case 'cross': return 'red';
          default: return '#9e9e9e';
      }
  }

  applyTraineeFilter(): void {
    this.dataSource.filter = this.traineeSearchTerm.trim().toLowerCase();
  }

  onYearChange(): void {
      this.applyTraineeFilter();
  }

  onMonthChange(): void {
      this.applyTraineeFilter();
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
}