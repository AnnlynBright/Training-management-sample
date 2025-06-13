

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
//import { Cohort } from '../../../../../app/models/class/cohort.model';
import { Cohort } from 'src/app/models/class/cohort.model';

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
    // MatInputModule is listed twice, but it's fine.
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