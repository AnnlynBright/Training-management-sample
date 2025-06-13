// src/app/pages/authentication/unauthorized/unauthorized.component.ts
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; // If you use Angular Material button
import { RouterModule } from '@angular/router'; // For routerLink

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  imports: [MatButtonModule, RouterModule], // Import modules for standalone components
  template: `
    <div style="text-align: center; margin-top: 100px;">
      <h1>🚫 Access Denied! 🚫</h1>
      <p>You do not have the necessary permissions to view this page.</p>
      <p>Please log in with an account that has the required role, or contact your administrator.</p>
      <button mat-flat-button color="primary" routerLink="/authentication/login">
        Back to Login
      </button>
    </div>
  `,
  styles: [`
    div {
      font-family: Arial, sans-serif;
      color: #333;
    }
    h1 {
      color: #dc3545; /* Red color for error */
    }
    button {
      margin-top: 20px;
    }
  `]
})
export class UnauthorizedComponent {}