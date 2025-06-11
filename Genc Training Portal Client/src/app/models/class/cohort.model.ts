// Define the Cohort model
export class Cohort {
    id: string;
    title: string;
    technology: string;
    tag: string;
    notifications: number;
    filterBy: string[];
    vertical: string[];
    location: string;
    status: string;
    techTrainer: string;
    bhTrainer: string;
    batchOwner: string;
    cohort_doj : Date;
    start_date: Date;
    end_date : Date;
    constructor(data: {
      id: string;
      title: string;
      technology: string;
      tag: string;
      notifications: number;
      filterBy: string[];
      vertical: string[];
      location: string;
      status: string;
      techTrainer: string;
    bhTrainer: string;
    batchOwner: string;
    cohort_doj : Date;
    start_date: Date;
    end_date : Date;
    }) {
      this.id = data.id;
      this.title = data.title;
      this.technology = data.technology;
      this.tag = data.tag;
      this.notifications = data.notifications;
      this.filterBy = data.filterBy;
      this.vertical = data.vertical;
      this.location = data.location;
      this.status = data.status;
      this.techTrainer= data.techTrainer;
    this.bhTrainer = data.bhTrainer;
    this.batchOwner= data.batchOwner;
    this.cohort_doj = data.cohort_doj;
    this.start_date= data.start_date;
    this.end_date = data.end_date;
    }
  }
  
  // New interfaces for cohort members and trainees (can also be classes if they need methods)
  // For simplicity, let's keep these as interfaces if they don't require behavior.
  // If you want to make them classes, the pattern is similar to Cohort.
  
//   export interface CohortMember {
//     // id: string;
//     // name: string;
//     // role: string;
//     // avatar: string; // path to image
//     // badge: number;
//   }
  
//   export interface Trainee {
//     // no: number;
//     // name: string;
//     // candidateId: string;
//     // qualifier: 'dot' | 'tick' | 'cross';
//     // interim: 'dot' | 'tick' | 'cross';
//     // final: 'dot' | 'tick' | 'cross';
//     // dayOfBoarding: string; // Consider using Date type
//     // email: string;
//     // tekstack: string;
//     // status: string; // e.g., 'In training'
//     // presentAbsent: string; // 'Present', 'Absent'
//     // avatar: string; // path to image
//   }
  
  // You might also define a simple class for filter options if you wanted to add methods to them,
  // but an interface or a type alias is usually sufficient for simple key-value pairs.
  export interface FilterOption {
    label: string;
    value: string;
  }