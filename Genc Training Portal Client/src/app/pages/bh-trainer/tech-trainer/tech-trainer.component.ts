import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AppCardComponent } from "../../../components/card/card.component";

// table 1
export interface TechnicalTrainersData {
  id: number;
  associateId: number;
  uname?: string;
  description?: string;
  status?: string;
  email: string;
  cohorts?: number;
}

const TECHNICALTRAINER_DATA: TechnicalTrainersData[] = [
  {
    id: 1,
    associateId: 2398029,
    uname: 'John Doe',
    description: 'SDET Trainer',
    status: 'free',
    email: 'demo@gmail.com',
    cohorts: 2,
  },
  {
    id: 2,
    associateId: 2398029,
    uname: 'John Doe',
    description: 'SDET Trainer',
    status: 'assigned',
    email: 'demo@gmail.com',
    cohorts: 2,
  },
  {
    id: 3,
    associateId: 2398029,
    uname: 'John Doe',
    description: 'SDET Trainer',
    status: 'free',
    email: 'demo@gmail.com',
    cohorts: 2,
  },
  {
    id: 4,
    associateId: 2398029,
    uname: 'John Doe',
    description: 'SDET Trainer',
    status: 'assigned',
    email: 'demo@gmail.com',
    cohorts: 2,
  },
  {
    id: 5,
    associateId: 2398029,
    uname: 'John Doe',
    description: 'SDET Trainer',
    status: 'free',
    email: 'demo@gmail.com',
    cohorts: 2,
  },
  {
    id: 6,
    associateId: 2398029,
    uname: 'John Doe',
    description: 'SDET Trainer',
    status: 'assigned',
    email: 'demo@gmail.com',
    cohorts: 2,
  },
  {
    id: 7,
    associateId: 2398029,
    uname: 'John Doe',
    description: 'SDET Trainer',
    status: 'free',
    email: 'demo@gmail.com',
    cohorts: 2,
  },
  {
    id: 8,
    associateId: 2398029,
    uname: 'John Doe',
    description: 'SDET Trainer',
    status: 'assigned',
    email: 'demo@gmail.com',
    cohorts: 2,
  },
];

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    AppCardComponent
  ],
  templateUrl: './tech-trainer.component.html',
})
export class AppTechTrainerComponent {
  // table 1
  displayedColumns1: string[] = [
    'serialNumber',
    'name',
    'associateId',
    'description',
    'status',
    'email',
    'cohorts',
    'actions',
  ];
  dataSource1 = TECHNICALTRAINER_DATA;
}


