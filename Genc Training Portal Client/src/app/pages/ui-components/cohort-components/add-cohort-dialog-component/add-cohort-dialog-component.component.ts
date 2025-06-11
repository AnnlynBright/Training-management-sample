

// // src/app/pages/ui-components/add-cohort-dialog-component/add-cohort-dialog-component.component.ts

// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatSelectModule } from '@angular/material/select';
// import { MatButtonModule } from '@angular/material/button';
// import { MatChipsModule } from '@angular/material/chips';
// import { MatIconModule } from '@angular/material/icon';

// // Import Cohort class from the new model file
// import { Cohort } from '../../../../app/models/cohort.model'; // <--- UPDATED PATH

// @Component({
//   selector: 'app-add-cohort-dialog',
//   standalone: true,
//   imports: [
//     CommonModule,
//     ReactiveFormsModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatSelectModule,
//     MatButtonModule,
//     MatChipsModule,
//     MatIconModule,
//     MatDialogModule // IMPORTANT: Keep this here for dialog elements like mat-dialog-content
//   ],
//   template: `
//     <h2 mat-dialog-title>Add New Cohort</h2>
//     <mat-dialog-content class="mat-typography">
//       <form [formGroup]="cohortForm">
//         <mat-form-field appearance="outline" class="w-100 mb-3">
//           <mat-label>Cohort ID</mat-label>
//           <input matInput formControlName="id" required>
//           <mat-error *ngIf="cohortForm.get('id')?.hasError('required') && cohortForm.get('id')?.touched">
//             Cohort ID is required.
//           </mat-error>
//         </mat-form-field>

//         <mat-form-field appearance="outline" class="w-100 mb-3">
//           <mat-label>Title</mat-label>
//           <input matInput formControlName="title" required>
//           <mat-error *ngIf="cohortForm.get('title')?.hasError('required') && cohortForm.get('title')?.touched">
//             Title is required.
//           </mat-error>
//         </mat-form-field>

//         <mat-form-field appearance="outline" class="w-100 mb-3">
//           <mat-label>Technology</mat-label>
//           <input matInput formControlName="technology" required>
//           <mat-error *ngIf="cohortForm.get('technology')?.hasError('required') && cohortForm.get('technology')?.touched">
//             Technology is required.
//           </mat-error>
//         </mat-form-field>

//         <mat-form-field appearance="outline" class="w-100 mb-3">
//           <mat-label>Tag</mat-label>
//           <input matInput formControlName="tag" required>
//           <mat-error *ngIf="cohortForm.get('tag')?.hasError('required') && cohortForm.get('tag')?.touched">
//             Tag is required.
//           </mat-error>
//         </mat-form-field>

//         <mat-form-field appearance="outline" class="w-100 mb-3">
//           <mat-label>Notifications</mat-label>
//           <input matInput type="number" formControlName="notifications" required>
//           <mat-error *ngIf="cohortForm.get('notifications')?.hasError('required') && cohortForm.get('notifications')?.touched">
//             Notifications is required.
//           </mat-error>
//           <mat-error *ngIf="cohortForm.get('notifications')?.hasError('min') && cohortForm.get('notifications')?.touched">
//             Notifications must be a positive number.
//           </mat-error>
//         </mat-form-field>

//         <mat-form-field appearance="outline" class="w-100 mb-3">
//           <mat-label>Filter By</mat-label>
//           <mat-select formControlName="filterBy" multiple>
//             <mat-option *ngFor="let option of filterByOptions" [value]="option.value">
//               {{option.label}}
//             </mat-option>
//           </mat-select>
//         </mat-form-field>

//         <mat-form-field appearance="outline" class="w-100 mb-3">
//           <mat-label>Vertical</mat-label>
//           <mat-select formControlName="vertical" multiple>
//             <mat-option *ngFor="let option of verticalOptions" [value]="option.value">
//               {{option.label}}
//             </mat-option>
//           </mat-select>
//         </mat-form-field>

//         <mat-form-field appearance="outline" class="w-100 mb-3">
//           <mat-label>Location</mat-label>
//           <mat-select formControlName="location" required>
//             <mat-option *ngFor="let option of locationOptions" [value]="option.value">
//               {{option.label}}
//             </mat-option>
//           </mat-select>
//           <mat-error *ngIf="cohortForm.get('location')?.hasError('required') && cohortForm.get('location')?.touched">
//             Location is required.
//           </mat-error>
//         </mat-form-field>

//         <mat-form-field appearance="outline" class="w-100 mb-3">
//           <mat-label>Status</mat-label>
//           <mat-select formControlName="status" required>
//             <mat-option *ngFor="let option of statusOptions" [value]="option.value">
//               {{option.label}}
//             </mat-option>
//           </mat-select>
//           <mat-error *ngIf="cohortForm.get('status')?.hasError('required') && cohortForm.get('status')?.touched">
//             Status is required.
//           </mat-error>
//         </mat-form-field>
//       </form>
//     </mat-dialog-content>
//     <mat-dialog-actions align="end">
//       <button mat-button (click)="onCancel()">Cancel</button>
//       <button mat-flat-button color="primary" (click)="onSubmit()" [disabled]="cohortForm.invalid">Add Cohort</button>
//     </mat-dialog-actions>
//   `,
//   styles: `
//     .w-100 { width: 100%; }
//     .mb-3 { margin-bottom: 1rem; }
//     .mat-dialog-content { max-height: 70vh; overflow-y: auto; }
//   `
// })
// export class AddCohortDialogComponent implements OnInit {
//   cohortForm!: FormGroup;

//   filterByOptions = [
//     { label: 'FTE', value: 'FTE' },
//     { label: 'Intern', value: 'Intern' },
//     { label: 'SOET', value: 'SOET' },
//     { label: 'Selenium', value: 'Selenium' },
//     { label: 'Playwright', value: 'Playwright' },
//     { label: 'CRM_Salesforce', value: 'CRM_Salesforce' },
//     { label: 'Facet', value: 'Facet' },
//   ];
//   verticalOptions = [
//     { label: 'HC/LS', value: 'HC/LS' },
//     { label: 'INS', value: 'INS' },
//     { label: 'BFS', value: 'BFS' },
//     { label: 'CMT', value: 'CMT' },
//     { label: 'NFT', value: 'NFT' },
//     { label: 'PNR', value: 'PNR' },
//     { label: 'Tech COE', value: 'Tech COE' },
//     { label: 'CRM', value: 'CRM' },
//     { label: 'HC', value: 'HC' },
//     { label: 'OGP', value: 'OGP' },
//   ];
//   locationOptions = [
//     { label: 'Chennai', value: 'Chennai' },
//     { label: 'Coimbatore', value: 'Coimbatore' },
//     { label: 'Bangalore', value: 'Bangalore' },
//     { label: 'Pune', value: 'Pune' },
//   ];
//   statusOptions = [
//     { label: 'In progress', value: 'In progress' },
//     { label: 'Upcoming', value: 'Upcoming' },
//     { label: 'Completed', value: 'Completed' },
//     { label: 'Deployed', value: 'Deployed' },
//   ];


//   constructor(
//     private fb: FormBuilder,
//     public dialogRef: MatDialogRef<AddCohortDialogComponent>
//   ) {}

//   ngOnInit(): void {
//     this.cohortForm = this.fb.group({
//       id: ['', Validators.required],
//       title: ['', Validators.required],
//       technology: ['', Validators.required],
//       tag: ['', Validators.required],
//       notifications: [0, [Validators.required, Validators.min(0)]],
//       filterBy: [[]],
//       vertical: [[]],
//       location: ['', Validators.required],
//       status: ['', Validators.required],
//     });
//   }

//   onCancel(): void {
//     this.dialogRef.close();
//   }

//   onSubmit(): void {
//     if (this.cohortForm.valid) {
//       const newCohort: Cohort = this.cohortForm.value; // The form returns a plain object that matches Cohort structure
//       this.dialogRef.close(newCohort); // Pass the plain object data back
//     } else {
//       this.cohortForm.markAllAsTouched();
//     }
//   }
// }

// src/app/pages/ui-components/add-cohort-dialog-component/add-cohort-dialog-component.component.ts

// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatSelectModule } from '@angular/material/select';
// import { MatButtonModule } from '@angular/material/button';
// import { MatChipsModule } from '@angular/material/chips';
// import { MatIconModule } from '@angular/material/icon';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';
// // Import Cohort class from the new model file
// import { Cohort } from '../../../../../app/models/class/cohort.model';

// @Component({
//   selector: 'app-add-cohort-dialog',
//   standalone: true,
//   imports: [
//     CommonModule,
//     ReactiveFormsModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatSelectModule,
//     MatButtonModule,
//     MatChipsModule,
//     MatIconModule,
//     MatDialogModule,
//     MatDatepickerModule,
//     MatInputModule,
//     MatNativeDateModule, 
//   ],
//   templateUrl: './add-cohort-dialog-component.component.html', // <--- CHANGED HERE
//   styleUrls: ['./add-cohort-dialog-component.component.scss'] // <--- NEW STYLESHEET
// })
// export class AddCohortDialogComponent implements OnInit {
//   cohortForm!: FormGroup;

//   filterByOptions = [
//     { label: 'FTE', value: 'FTE' },
//     { label: 'Intern', value: 'Intern' },
//     { label: 'SOET', value: 'SOET' },
//     { label: 'Selenium', value: 'Selenium' },
//     { label: 'Playwright', value: 'Playwright' },
//     { label: 'CRM_Salesforce', value: 'CRM_Salesforce' },
//     { label: 'Facet', value: 'Facet' },
//   ];
//   verticalOptions = [
//     { label: 'HC/LS', value: 'HC/LS' },
//     { label: 'INS', value: 'INS' },
//     { label: 'BFS', value: 'BFS' },
//     { label: 'CMT', value: 'CMT' },
//     { label: 'NFT', value: 'NFT' },
//     { label: 'PNR', value: 'PNR' },
//     { label: 'Tech COE', value: 'Tech COE' },
//     { label: 'CRM', value: 'CRM' },
//     { label: 'HC', value: 'HC' },
//     { label: 'OGP', value: 'OGP' },
//   ];
//   locationOptions = [
//     { label: 'Chennai', value: 'Chennai' },
//     { label: 'Coimbatore', value: 'Coimbatore' },
//     { label: 'Bangalore', value: 'Bangalore' },
//     { label: 'Pune', value: 'Pune' },
//   ];
//   statusOptions = [
//     { label: 'In progress', value: 'In progress' },
//     { label: 'Upcoming', value: 'Upcoming' },
//     { label: 'Completed', value: 'Completed' },
//     { label: 'Deployed', value: 'Deployed' },
//   ];


//   constructor(
//     private fb: FormBuilder,
//     public dialogRef: MatDialogRef<AddCohortDialogComponent>
//   ) {}

//   ngOnInit(): void {
//     this.cohortForm = this.fb.group({
//       id: ['', Validators.required],
//       title: ['', Validators.required],
//       technology: ['', Validators.required],
//       tag: ['', Validators.required],
//       notifications: [0, [Validators.required, Validators.min(0)]],
//       filterBy: [[]],
//       vertical: [[]],
//       location: ['', Validators.required],
//       status: ['', Validators.required],
//     });
//   }

//   onCancel(): void {
//     this.dialogRef.close();
//   }

//   onSubmit(): void {
//     if (this.cohortForm.valid) {
//       const newCohort: Cohort = this.cohortForm.value;
//       this.dialogRef.close(newCohort);
//     } else {
//       this.cohortForm.markAllAsTouched();
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Make sure this is imported!

// Import Cohort class from the new model file
import { Cohort } from '../../../../../app/models/class/cohort.model';

@Component({
  selector: 'app-add-cohort-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatInputModule, // MatInputModule is listed twice, but it's fine.
    MatNativeDateModule,
  ],
  templateUrl: './add-cohort-dialog-component.component.html',
  styleUrls: ['./add-cohort-dialog-component.component.scss']
})
export class AddCohortDialogComponent implements OnInit {
  cohortForm!: FormGroup;

  filterByOptions = [
    { label: 'FTE', value: 'FTE' },
    { label: 'Intern', value: 'Intern' },
    { label: 'SOET', value: 'SOET' },
    { label: 'Selenium', value: 'Selenium' },
    { label: 'Playwright', value: 'Playwright' },
    { label: 'CRM_Salesforce', value: 'CRM_Salesforce' },
    { label: 'Facet', value: 'Facet' },
  ];
  verticalOptions = [
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
  locationOptions = [
    { label: 'Chennai', value: 'Chennai' },
    { label: 'Coimbatore', value: 'Coimbatore' },
    { label: 'Bangalore', value: 'Bangalore' },
    { label: 'Pune', value: 'Pune' },
  ];
  statusOptions = [
    { label: 'In progress', value: 'In progress' },
    { label: 'Upcoming', value: 'Upcoming' },
    { label: 'Completed', value: 'Completed' },
    { label: 'Deployed', value: 'Deployed' },
  ];


  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddCohortDialogComponent>
  ) {}

  ngOnInit(): void {
    this.cohortForm = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      technology: ['', Validators.required],
      tag: ['', Validators.required],
      notifications: [0, [Validators.required, Validators.min(0)]],
      filterBy: [[]],
      vertical: [[]],
      location: ['', Validators.required],
      status: ['', Validators.required],
      // New fields added to the FormGroup
      techTrainer: ['', Validators.required],
      bhTrainer: ['', Validators.required],
      batchOwner: ['', Validators.required],
      cohort_doj: [null, Validators.required], // Initialize Date fields with null
      start_date: [null, Validators.required],
      end_date: [null, Validators.required],
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.cohortForm.valid) {
      const newCohort: Cohort = this.cohortForm.value;
      // Convert date strings from Datepicker to Date objects if necessary
      // For Reactive Forms with MatDatepicker, the value is usually a Date object already.
      // However, if there are issues, you might need a transformation here:
      // newCohort.cohort_doj = new Date(newCohort.cohort_doj);
      // newCohort.start_date = new Date(newCohort.start_date);
      // newCohort.end_date = new Date(newCohort.end_date);
      
      this.dialogRef.close(newCohort);
    } else {
      this.cohortForm.markAllAsTouched();
    }
  }
}