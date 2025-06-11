

// // // src/app/services/cohort.service.ts
// // import { Injectable } from '@angular/core';
// // import { BehaviorSubject, Observable, of } from 'rxjs'; // Import BehaviorSubject
// // import { Cohort, CohortMember, Trainee } from '../models/class/cohort.model';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class CohortService {

// //   // Initial mock data
// //   private initialCohorts: Cohort[] = [
// //     new Cohort({
// //       id: 'INTQE25DDGN004',
// //       title: 'SOET - Quality Engineer',
// //       technology: 'Selenium Automation',
// //       tag: 'BFS',
// //       notifications: 21,
// //       filterBy: ['FTE', 'SOET'],
// //       vertical: ['SOET'],
// //       location: 'Chennai',
// //       status: 'In progress',
// //     }),
// //     new Cohort({
// //       id: 'INTQEA25QE007',
// //       title: 'QE with Selenium',
// //       technology: 'Selenium Automation',
// //       tag: 'FIN',
// //       notifications: 12,
// //       filterBy: ['FTE'],
// //       vertical: ['CRM_Salesforce'],
// //       location: 'Bangalore',
// //       status: 'Upcoming',
// //     }),
// //     new Cohort({
// //       id: 'QEA25QE008',
// //       title: 'Quality Engineer',
// //       technology: 'API Automation',
// //       tag: 'IT',
// //       notifications: 6,
// //       filterBy: ['FTE'],
// //       vertical: ['OGP'],
// //       location: 'Pune',
// //       status: 'Completed',
// //     }),
// //     new Cohort({
// //       id: 'INTQEA25CRM002',
// //       title: 'CRM Dev Cohort',
// //       technology: 'CRM_Salesforce',
// //       tag: 'CRM',
// //       notifications: 8,
// //       filterBy: ['FTE'],
// //       vertical: ['CRM'],
// //       location: 'Chennai',
// //       status: 'In progress',
// //     }),
// //     new Cohort({
// //       id: 'QEA25PW001',
// //       title: 'Playwright Basics',
// //       technology: 'Playwright Framework',
// //       tag: 'DEV',
// //       notifications: 3,
// //       filterBy: ['Intern'],
// //       vertical: ['Playwright'],
// //       location: 'Bangalore',
// //       status: 'In progress',
// //     }),
// //     new Cohort({
// //       id: 'QEA25AP1001',
// //       title: 'API Automation',
// //       technology: 'API Automation Tools',
// //       tag: 'HC',
// //       notifications: 8,
// //       filterBy: ['FTE'],
// //       vertical: ['HC'],
// //       location: 'Pune',
// //       status: 'Deployed',
// //     }),
// //     new Cohort({
// //       id: 'INTQEA25QE006',
// //       title: 'SOET Advanced',
// //       technology: 'Cloud Testing',
// //       tag: 'BFS',
// //       notifications: 21,
// //       filterBy: ['FTE'],
// //       vertical: ['SOET'],
// //       location: 'Coimbatore',
// //       status: 'In progress',
// //     }),
// //     new Cohort({
// //       id: 'QEA25QE007-B',
// //       title: 'Selenium for CRM',
// //       technology: 'Selenium Automation',
// //       tag: 'CRM',
// //       notifications: 12,
// //       filterBy: ['FTE'],
// //       vertical: ['CRM_Salesforce'],
// //       location: 'Bangalore',
// //       status: 'Upcoming',
// //     }),
// //   ];

// //   // Use a BehaviorSubject to hold the current list of cohorts
// //   private _cohorts = new BehaviorSubject<Cohort[]>(this.initialCohorts);
// //   // Expose it as an Observable for components to subscribe to
// //   public readonly cohorts$: Observable<Cohort[]> = this._cohorts.asObservable();


// //   // Simulate backend data for trainees
// //   private _allTrainees: Trainee[] = [
// //     { no: 1, name: 'Kiran Kuchipudi', candidateId: '123456', qualifier: 'dot', interim: 'dot', final: 'dot', dayOfBoarding: '6th March, 2025', email: '12345@cognizant.com', tekstack: 'On-Schedule', status: 'In training', presentAbsent: 'Present', avatar: 'assets/images/profile/user-5.jpg' },
// //     { no: 2, name: 'Kiran Kuchipudi', candidateId: '123456', qualifier: 'dot', interim: 'dot', final: 'dot', dayOfBoarding: '6th March, 2025', email: '12345@cognizant.com', tekstack: 'On-Schedule', status: 'In training', presentAbsent: 'Absent', avatar: 'assets/images/profile/user-6.jpg' },
// //     { no: 3, name: 'Kiran Kuchipudi', candidateId: '123456', qualifier: 'dot', interim: 'dot', final: 'dot', dayOfBoarding: '6th March, 2025', email: '12345@cognizant.com', tekstack: 'On-Schedule', status: 'In training', presentAbsent: 'Present', avatar: 'assets/images/profile/user-7.jpg' },
// //     { no: 4, name: 'Kiran Kuchipudi', candidateId: '123456', qualifier: 'dot', interim: 'dot', final: 'dot', dayOfBoarding: '6th March, 2025', email: '12345@cognizant.com', tekstack: 'On-Schedule', status: 'In training', presentAbsent: 'Present', avatar: 'assets/images/profile/user-8.jpg' },
// //     { no: 5, name: 'Kiran Kuchipudi', candidateId: '123456', qualifier: 'dot', interim: 'dot', final: 'dot', dayOfBoarding: '6th March, 2025', email: '12345@cognizant.com', tekstack: 'On-Schedule', status: 'In training', presentAbsent: 'Absent', avatar: 'assets/images/profile/user-1.jpg' },
// //     { no: 6, name: 'Kiran Kuchipudi', candidateId: '123456', qualifier: 'dot', interim: 'dot', final: 'dot', dayOfBoarding: '6th March, 2025', email: '12345@cognizant.com', tekstack: 'On-Schedule', status: 'In training', presentAbsent: 'Present', avatar: 'assets/images/profile/user-2.jpg' },
// //     { no: 7, name: 'Kiran Kuchipudi', candidateId: '123456', qualifier: 'dot', interim: 'dot', final: 'dot', dayOfBoarding: '6th March, 2025', email: '12345@cognizant.com', tekstack: 'On-Schedule', status: 'In training', presentAbsent: 'Present', avatar: 'assets/images/profile/user-3.jpg' },
// //     { no: 8, name: 'Kiran Kuchipudi', candidateId: '123456', qualifier: 'dot', interim: 'dot', final: 'dot', dayOfBoarding: '6th March, 2025', email: '12345@cognizant.com', tekstack: 'On-Schedule', status: 'In training', presentAbsent: 'Present', avatar: 'assets/images/profile/user-4.jpg' },
// //   ];

// //   private _cohortMembers: CohortMember[] = [
// //     { id: 'Mahes', name: 'Mahes', role: 'Tech Trainer', avatar: 'assets/images/profile/user-1.jpg', badge: 2398029 },
// //     { id: 'Anurag', name: 'Anurag Chatterjee', role: 'BH Trainer', avatar: 'assets/images/profile/user-2.jpg', badge: 2398029 },
// //     { id: 'Kayal', name: 'Kayal Vizhi', role: 'Coach', avatar: 'assets/images/profile/user-3.jpg', badge: 2398029 },
// //     { id: 'Srinivasa', name: 'Srinivasa Balaaji', role: 'Mentor', avatar: 'assets/images/profile/user-4.jpg', badge: 2398029 },
// //   ];

// //   constructor() { }

// //   // Method to get all cohorts - now returns the BehaviorSubject as an Observable
// //   getCohorts(): Observable<Cohort[]> {
// //     // In a real app, on initial load, you'd fetch from HttpClient and then call next()
// //     // if (this._cohorts.getValue().length === 0) { // Only fetch if not already loaded
// //     //   this.http.get<any[]>('/api/cohorts').pipe(
// //     //     map(data => data.map(item => new Cohort(item)))
// //     //   ).subscribe(cohorts => this._cohorts.next(cohorts));
// //     // }
// //     return this.cohorts$; // Components subscribe to this
// //   }

// //   // Method to get a single cohort by ID (still uses the current value of the subject)
// //   getCohortById(id: string): Observable<Cohort | undefined> {
// //     return of(this._cohorts.getValue().find(cohort => cohort.id === id));
// //   }

// //   // Method to add a new cohort
// //   addCohort(newCohortData: Cohort): Observable<Cohort> {
// //     const newCohortInstance = new Cohort(newCohortData); // Ensure it's a Cohort instance if not already

// //     // Simulate backend POST request
// //     // In a real app: return this.http.post<any>('/api/cohorts', newCohortInstance).pipe(
// //     //   map(response => {
// //     //     const addedCohort = new Cohort(response); // Backend might return ID etc.
// //     //     const currentCohorts = this._cohorts.getValue();
// //     //     this._cohorts.next([...currentCohorts, addedCohort]); // Update the subject
// //     //     return addedCohort;
// //     //   })
// //     // );

// //     // For simulation:
// //     const currentCohorts = this._cohorts.getValue(); // Get current array
// //     const updatedCohorts = [...currentCohorts, newCohortInstance]; // Create new array with added cohort
// //     this._cohorts.next(updatedCohorts); // Emit the new array to all subscribers!

// //     return of(newCohortInstance); // Return the added cohort
// //   }

// //   // Method to get all trainees
// //   getTrainees(): Observable<Trainee[]> {
// //     return of(this._allTrainees);
// //   }

// //   // Method to get cohort members (stakeholders)
// //   getCohortMembers(): Observable<CohortMember[]> {
// //     return of(this._cohortMembers);
// //   }
// // }

// // src/app/services/cohort.service.ts
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable, of } from 'rxjs';

// // Import models from their new, separate files
// import { Cohort } from '../models/class/cohort.model'; // Assuming Cohort remains here
// import { Trainee } from '../models/class/trainee.model'; // Updated import path for Trainee
// import { CohortMember } from '../models/class/cohortmember.model'; // Updated import path for CohortMember


// @Injectable({
//   providedIn: 'root'
// })
// export class CohortService {

//   // Initial mock data
//   private initialCohorts: Cohort[] = [
//     new Cohort({
//       id: 'INTQE25DDGN004',
//       title: 'SOET - Quality Engineer',
//       technology: 'Selenium Automation',
//       tag: 'BFS',
//       notifications: 21,
//       filterBy: ['FTE', 'SOET'],
//       vertical: ['SOET'],
//       location: 'Chennai',
//       status: 'In progress',
//     }),
//     new Cohort({
//       id: 'INTQEA25QE007',
//       title: 'QE with Selenium',
//       technology: 'Selenium Automation',
//       tag: 'FIN',
//       notifications: 12,
//       filterBy: ['FTE'],
//       vertical: ['CRM_Salesforce'],
//       location: 'Bangalore',
//       status: 'Upcoming',
//     }),
//     new Cohort({
//       id: 'QEA25QE008',
//       title: 'Quality Engineer',
//       technology: 'API Automation',
//       tag: 'IT',
//       notifications: 6,
//       filterBy: ['FTE'],
//       vertical: ['OGP'],
//       location: 'Pune',
//       status: 'Completed',
//     }),
//     new Cohort({
//       id: 'INTQEA25CRM002',
//       title: 'CRM Dev Cohort',
//       technology: 'CRM_Salesforce',
//       tag: 'CRM',
//       notifications: 8,
//       filterBy: ['FTE'],
//       vertical: ['CRM'],
//       location: 'Chennai',
//       status: 'In progress',
//     }),
//     new Cohort({
//       id: 'QEA25PW001',
//       title: 'Playwright Basics',
//       technology: 'Playwright Framework',
//       tag: 'DEV',
//       notifications: 3,
//       filterBy: ['Intern'],
//       vertical: ['Playwright'],
//       location: 'Bangalore',
//       status: 'In progress',
//     }),
//     new Cohort({
//       id: 'QEA25AP1001',
//       title: 'API Automation',
//       technology: 'API Automation Tools',
//       tag: 'HC',
//       notifications: 8,
//       filterBy: ['FTE'],
//       vertical: ['HC'],
//       location: 'Pune',
//       status: 'Deployed',
//     }),
//     new Cohort({
//       id: 'INTQEA25QE006',
//       title: 'SOET Advanced',
//       technology: 'Cloud Testing',
//       tag: 'BFS',
//       notifications: 21,
//       filterBy: ['FTE'],
//       vertical: ['SOET'],
//       location: 'Coimbatore',
//       status: 'In progress',
//     }),
//     new Cohort({
//       id: 'QEA25QE007-B',
//       title: 'Selenium for CRM',
//       technology: 'Selenium Automation',
//       tag: 'CRM',
//       notifications: 12,
//       filterBy: ['FTE'],
//       vertical: ['CRM_Salesforce'],
//       location: 'Bangalore',
//       status: 'Upcoming',
//     }),
//   ];

//   // Use a BehaviorSubject to hold the current list of cohorts
//   private _cohorts = new BehaviorSubject<Cohort[]>(this.initialCohorts);
//   // Expose it as an Observable for components to subscribe to
//   public readonly cohorts$: Observable<Cohort[]> = this._cohorts.asObservable();


//   // Simulate backend data for trainees - now explicitly instantiate them using the Trainee class
//   private _allTrainees: Trainee[] = [
//     new Trainee({ no: 1, name: 'Kiran Kuchipudi', candidateId: '123456', qualifier: 'dot', interim: 'dot', final: 'dot', dayOfBoarding: '6th March, 2025', email: '12345@cognizant.com', tekstack: 'On-Schedule', status: 'In training', presentAbsent: 'Present', avatar: 'assets/images/profile/user-5.jpg' }),
//     new Trainee({ no: 2, name: 'Kiran Kuchipudi', candidateId: '123456', qualifier: 'dot', interim: 'dot', final: 'dot', dayOfBoarding: '6th March, 2025', email: '12345@cognizant.com', tekstack: 'On-Schedule', status: 'In training', presentAbsent: 'Absent', avatar: 'assets/images/profile/user-6.jpg' }),
//     new Trainee({ no: 3, name: 'Kiran Kuchipudi', candidateId: '123456', qualifier: 'dot', interim: 'dot', final: 'dot', dayOfBoarding: '6th March, 2025', email: '12345@cognizant.com', tekstack: 'On-Schedule', status: 'In training', presentAbsent: 'Present', avatar: 'assets/images/profile/user-7.jpg' }),
//     new Trainee({ no: 4, name: 'Kiran Kuchipudi', candidateId: '123456', qualifier: 'dot', interim: 'dot', final: 'dot', dayOfBoarding: '6th March, 2025', email: '12345@cognizant.com', tekstack: 'On-Schedule', status: 'In training', presentAbsent: 'Present', avatar: 'assets/images/profile/user-8.jpg' }),
//     new Trainee({ no: 5, name: 'Kiran Kuchipudi', candidateId: '123456', qualifier: 'dot', interim: 'dot', final: 'dot', dayOfBoarding: '6th March, 2025', email: '12345@cognizant.com', tekstack: 'On-Schedule', status: 'In training', presentAbsent: 'Absent', avatar: 'assets/images/profile/user-1.jpg' }),
//     new Trainee({ no: 6, name: 'Kiran Kuchipudi', candidateId: '123456', qualifier: 'dot', interim: 'dot', final: 'dot', dayOfBoarding: '6th March, 2025', email: '12345@cognizant.com', tekstack: 'On-Schedule', status: 'In training', presentAbsent: 'Present', avatar: 'assets/images/profile/user-2.jpg' }),
//     new Trainee({ no: 7, name: 'Kiran Kuchipudi', candidateId: '123456', qualifier: 'dot', interim: 'dot', final: 'dot', dayOfBoarding: '6th March, 2025', email: '12345@cognizant.com', tekstack: 'On-Schedule', status: 'In training', presentAbsent: 'Present', avatar: 'assets/images/profile/user-3.jpg' }),
//     new Trainee({ no: 8, name: 'Kiran Kuchipudi', candidateId: '123456', qualifier: 'dot', interim: 'dot', final: 'dot', dayOfBoarding: '6th March, 2025', email: '12345@cognizant.com', tekstack: 'On-Schedule', status: 'In training', presentAbsent: 'Present', avatar: 'assets/images/profile/user-4.jpg' }),
//   ];

//   // Simulate backend data for cohort members - now explicitly instantiate them using the CohortMember class
//   private _cohortMembers: CohortMember[] = [
//     new CohortMember({ id: 'Mahes', name: 'Mahes', role: 'Tech Trainer', avatar: 'assets/images/profile/user-1.jpg', badge: 2398029 }),
//     new CohortMember({ id: 'Anurag', name: 'Anurag Chatterjee', role: 'BH Trainer', avatar: 'assets/images/profile/user-2.jpg', badge: 2398029 }),
//     new CohortMember({ id: 'Kayal', name: 'Kayal Vizhi', role: 'Coach', avatar: 'assets/images/profile/user-3.jpg', badge: 2398029 }),
//     new CohortMember({ id: 'Srinivasa', name: 'Srinivasa Balaaji', role: 'Mentor', avatar: 'assets/images/profile/user-4.jpg', badge: 2398029 }),
//   ];

//   constructor() { }

//   // Method to get all cohorts - now returns the BehaviorSubject as an Observable
//   getCohorts(): Observable<Cohort[]> {
//     // In a real app, on initial load, you'd fetch from HttpClient and then call next()
//     // if (this._cohorts.getValue().length === 0) { // Only fetch if not already loaded
//     //   this.http.get<any[]>('/api/cohorts').pipe(
//     //     map(data => data.map(item => new Cohort(item)))
//     //   ).subscribe(cohorts => this._cohorts.next(cohorts));
//     // }
//     return this.cohorts$; // Components subscribe to this
//   }

//   // Method to get a single cohort by ID (still uses the current value of the subject)
//   getCohortById(id: string): Observable<Cohort | undefined> {
//     return of(this._cohorts.getValue().find(cohort => cohort.id === id));
//   }

//   // Method to add a new cohort
//   addCohort(newCohortData: Cohort): Observable<Cohort> {
//     const newCohortInstance = new Cohort(newCohortData); // Ensure it's a Cohort instance if not already

//     // Simulate backend POST request
//     // In a real app: return this.http.post<any>('/api/cohorts', newCohortInstance).pipe(
//     //   map(response => {
//     //     const addedCohort = new Cohort(response); // Backend might return ID etc.
//     //     const currentCohorts = this._cohorts.getValue();
//     //     this._cohorts.next([...currentCohorts, addedCohort]); // Update the subject
//     //     return addedCohort;
//     //   })
//     // );

//     // For simulation:
//     const currentCohorts = this._cohorts.getValue(); // Get current array
//     const updatedCohorts = [...currentCohorts, newCohortInstance]; // Create new array with added cohort
//     this._cohorts.next(updatedCohorts); // Emit the new array to all subscribers!

//     return of(newCohortInstance); // Return the added cohort
//   }

//   // Method to get all trainees
//   getTrainees(): Observable<Trainee[]> {
//     return of(this._allTrainees);
//   }

//   // Method to get cohort members (stakeholders)
//   getCohortMembers(): Observable<CohortMember[]> {
//     return of(this._cohortMembers);
//   }
// }

// src/app/services/cohort.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

// Import models from their new, separate files
import { Cohort } from '../models/class/cohort.model'; // Assuming Cohort remains here
import { Trainee } from '../models/class/trainee.model'; // Updated import path for Trainee
import { CohortMember } from '../models/class/cohortmember.model'; // Updated import path for CohortMember


@Injectable({
  providedIn: 'root'
})
export class CohortService {

  // Initial mock data
  private initialCohorts: Cohort[] = [
    new Cohort({
      id: 'INTQE25DDGN004',
      title: 'SOET - Quality Engineer',
      technology: 'Selenium Automation',
      tag: 'BFS',
      notifications: 21,
      filterBy: ['FTE', 'SOET'],
      vertical: ['SOET'],
      location: 'Chennai',
      status: 'In progress',
      techTrainer: 'Mahes',
      bhTrainer: 'Anurag Chatterjee',
      batchOwner: 'Srinivasa Balaaji',
      cohort_doj: new Date('2024-05-20'),
      start_date: new Date('2024-06-01'),
      end_date: new Date('2024-09-01'),
    }),
    new Cohort({
      id: 'INTQEA25QE007',
      title: 'QE with Selenium',
      technology: 'Selenium Automation',
      tag: 'FIN',
      notifications: 12,
      filterBy: ['FTE'],
      vertical: ['CRM_Salesforce'],
      location: 'Bangalore',
      status: 'Upcoming',
      techTrainer: 'Alice Smith',
      bhTrainer: 'Bob Johnson',
      batchOwner: 'Emily White',
      cohort_doj: new Date('2024-07-01'),
      start_date: new Date('2024-07-15'),
      end_date: new Date('2024-10-15'),
    }),
    new Cohort({
      id: 'QEA25QE008',
      title: 'Quality Engineer',
      technology: 'API Automation',
      tag: 'IT',
      notifications: 6,
      filterBy: ['FTE'],
      vertical: ['OGP'],
      location: 'Pune',
      status: 'Completed',
      techTrainer: 'David Green',
      bhTrainer: 'Grace Hall',
      batchOwner: 'Frank Black',
      cohort_doj: new Date('2023-11-01'),
      start_date: new Date('2023-11-15'),
      end_date: new Date('2024-02-15'),
    }),
    new Cohort({
      id: 'INTQEA25CRM002',
      title: 'CRM Dev Cohort',
      technology: 'CRM_Salesforce',
      tag: 'CRM',
      notifications: 8,
      filterBy: ['FTE'],
      vertical: ['CRM'],
      location: 'Chennai',
      status: 'In progress',
      techTrainer: 'Sarah Davis',
      bhTrainer: 'Chris Lee',
      batchOwner: 'Laura Kim',
      cohort_doj: new Date('2024-04-10'),
      start_date: new Date('2024-04-20'),
      end_date: new Date('2024-07-20'),
    }),
    new Cohort({
      id: 'QEA25PW001',
      title: 'Playwright Basics',
      technology: 'Playwright Framework',
      tag: 'DEV',
      notifications: 3,
      filterBy: ['Intern'],
      vertical: ['Playwright'],
      location: 'Bangalore',
      status: 'In progress',
      techTrainer: 'Mark Miller',
      bhTrainer: 'Nancy King',
      batchOwner: 'Oliver Queen',
      cohort_doj: new Date('2024-05-01'),
      start_date: new Date('2024-05-15'),
      end_date: new Date('2024-08-15'),
    }),
    new Cohort({
      id: 'QEA25AP1001',
      title: 'API Automation',
      technology: 'API Automation Tools',
      tag: 'HC',
      notifications: 8,
      filterBy: ['FTE'],
      vertical: ['HC'],
      location: 'Pune',
      status: 'Deployed',
      techTrainer: 'Peter Parker',
      bhTrainer: 'Quinn Red',
      batchOwner: 'Rebecca Stone',
      cohort_doj: new Date('2023-09-01'),
      start_date: new Date('2023-09-15'),
      end_date: new Date('2023-12-15'),
    }),
    new Cohort({
      id: 'INTQEA25QE006',
      title: 'SOET Advanced',
      technology: 'Cloud Testing',
      tag: 'BFS',
      notifications: 21,
      filterBy: ['FTE'],
      vertical: ['SOET'],
      location: 'Coimbatore',
      status: 'In progress',
      techTrainer: 'Susan Adams',
      bhTrainer: 'Thomas Brown',
      batchOwner: 'Uma Devi',
      cohort_doj: new Date('2024-06-01'),
      start_date: new Date('2024-06-10'),
      end_date: new Date('2024-09-10'),
    }),
    new Cohort({
      id: 'QEA25QE007-B',
      title: 'Selenium for CRM',
      technology: 'Selenium Automation',
      tag: 'CRM',
      notifications: 12,
      filterBy: ['FTE'],
      vertical: ['CRM_Salesforce'],
      location: 'Bangalore',
      status: 'Upcoming',
      techTrainer: 'Victor White',
      bhTrainer: 'Wendy Green',
      batchOwner: 'Xavier Blue',
      cohort_doj: new Date('2024-07-20'),
      start_date: new Date('2024-08-01'),
      end_date: new Date('2024-11-01'),
    }),
  ];

  // Use a BehaviorSubject to hold the current list of cohorts
  private _cohorts = new BehaviorSubject<Cohort[]>(this.initialCohorts);
  // Expose it as an Observable for components to subscribe to
  public readonly cohorts$: Observable<Cohort[]> = this._cohorts.asObservable();


  // Simulate backend data for trainees - now explicitly instantiate them using the Trainee class
  private _allTrainees: Trainee[] = [
    new Trainee({ no: 1, name: 'Kiran Kuchipudi', candidateId: '123456', qualifier: 'dot', interim: 'dot', final: 'dot', dayOfBoarding: '6th March, 2025', email: '12345@cognizant.com', tekstack: 'On-Schedule', status: 'In training', presentAbsent: 'Present', avatar: 'assets/images/profile/user-5.jpg' }),
    new Trainee({ no: 2, name: 'Priya Sharma', candidateId: '123457', qualifier: 'dot', interim: 'dot', final: 'tick', dayOfBoarding: '6th March, 2025', email: '12346@cognizant.com', tekstack: 'On-Schedule', status: 'In training', presentAbsent: 'Absent', avatar: 'assets/images/profile/user-6.jpg' }),
    new Trainee({ no: 3, name: 'Rahul Verma', candidateId: '123458', qualifier: 'dot', interim: 'cross', final: 'dot', dayOfBoarding: '6th March, 2025', email: '12347@cognizant.com', tekstack: 'Behind-Schedule', status: 'In training', presentAbsent: 'Present', avatar: 'assets/images/profile/user-7.jpg' }),
    new Trainee({ no: 4, name: 'Neha Singh', candidateId: '123459', qualifier: 'tick', interim: 'dot', final: 'dot', dayOfBoarding: '6th March, 2025', email: '12348@cognizant.com', tekstack: 'On-Schedule', status: 'In training', presentAbsent: 'Present', avatar: 'assets/images/profile/user-8.jpg' }),
    new Trainee({ no: 5, name: 'Amit Kumar', candidateId: '123460', qualifier: 'dot', interim: 'dot', final: 'dot', dayOfBoarding: '6th March, 2025', email: '12349@cognizant.com', tekstack: 'On-Schedule', status: 'In training', presentAbsent: 'Absent', avatar: 'assets/images/profile/user-1.jpg' }),
    new Trainee({ no: 6, name: 'Deepa Jain', candidateId: '123461', qualifier: 'cross', interim: 'dot', final: 'dot', dayOfBoarding: '6th March, 2025', email: '12350@cognizant.com', tekstack: 'Behind-Schedule', status: 'In training', presentAbsent: 'Present', avatar: 'assets/images/profile/user-2.jpg' }),
    new Trainee({ no: 7, name: 'Vivek Gupta', candidateId: '123462', qualifier: 'dot', interim: 'tick', final: 'dot', dayOfBoarding: '6th March, 2025', email: '12351@cognizant.com', tekstack: 'On-Schedule', status: 'In training', presentAbsent: 'Present', avatar: 'assets/images/profile/user-3.jpg' }),
    new Trainee({ no: 8, name: 'Sakshi Sharma', candidateId: '123463', qualifier: 'dot', interim: 'dot', final: 'dot', dayOfBoarding: '6th March, 2025', email: '12352@cognizant.com', tekstack: 'On-Schedule', status: 'In training', presentAbsent: 'Present', avatar: 'assets/images/profile/user-4.jpg' }),
  ];

  // Simulate backend data for cohort members - now explicitly instantiate them using the CohortMember class
  private _cohortMembers: CohortMember[] = [
    new CohortMember({ id: 'Mahes', name: 'Mahes', role: 'Tech Trainer', avatar: 'assets/images/profile/user-1.jpg', badge: 2398029 }),
    new CohortMember({ id: 'Anurag', name: 'Anurag Chatterjee', role: 'BH Trainer', avatar: 'assets/images/profile/user-2.jpg', badge: 2398029 }),
    new CohortMember({ id: 'Kayal', name: 'Kayal Vizhi', role: 'Coach', avatar: 'assets/images/profile/user-3.jpg', badge: 2398029 }),
    new CohortMember({ id: 'Srinivasa', name: 'Srinivasa Balaaji', role: 'Mentor', avatar: 'assets/images/profile/user-4.jpg', badge: 2398029 }),
  ];

  constructor() { }

  // Method to get all cohorts - now returns the BehaviorSubject as an Observable
  getCohorts(): Observable<Cohort[]> {
    // In a real app, on initial load, you'd fetch from HttpClient and then call next()
    // if (this._cohorts.getValue().length === 0) { // Only fetch if not already loaded
    //   this.http.get<any[]>('/api/cohorts').pipe(
    //     map(data => data.map(item => new Cohort(item)))
    //   ).subscribe(cohorts => this._cohorts.next(cohorts));
    // }
    return this.cohorts$; // Components subscribe to this
  }

  // Method to get a single cohort by ID (still uses the current value of the subject)
  getCohortById(id: string): Observable<Cohort | undefined> {
    return of(this._cohorts.getValue().find(cohort => cohort.id === id));
  }

  // Method to add a new cohort
  addCohort(newCohortData: Cohort): Observable<Cohort> {
    const newCohortInstance = new Cohort(newCohortData); // Ensure it's a Cohort instance if not already

    // Simulate backend POST request
    // In a real app: return this.http.post<any>('/api/cohorts', newCohortInstance).pipe(
    //   map(response => {
    //     const addedCohort = new Cohort(response); // Backend might return ID etc.
    //     const currentCohorts = this._cohorts.getValue();
    //     this._cohorts.next([...currentCohorts, addedCohort]); // Update the subject
    //     return addedCohort;
    //   })
    // );

    // For simulation:
    const currentCohorts = this._cohorts.getValue(); // Get current array
    const updatedCohorts = [...currentCohorts, newCohortInstance]; // Create new array with added cohort
    this._cohorts.next(updatedCohorts); // Emit the new array to all subscribers!

    return of(newCohortInstance); // Return the added cohort
  }

  // Method to get all trainees
  getTrainees(): Observable<Trainee[]> {
    return of(this._allTrainees);
  }

  // Method to get cohort members (stakeholders)
  getCohortMembers(): Observable<CohortMember[]> {
    return of(this._cohortMembers);
  }
}
