import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="page-container">
      <div class="page-header">
        <h1>Dashboard</h1>
        <p class="page-description">Welcome to Transit Data Management System</p>
      </div>
      
      <div class="dashboard-content">
        <mat-card class="info-card">
          <mat-card-header>
            <mat-card-title>System Overview</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>This is the main dashboard where you can overview your transit data management system.</p>
            <p>Use the navigation menu to access different modules:</p>
            <ul>
              <li>Stop Management - Manage bus stops and locations</li>
              <li>Route Management - Define and manage bus routes</li>
              <li>Trip Management - Schedule trips and manage timetables</li>
              <li>Service Calendar - Set operational days and periods</li>
              <li>GTFS Export - Generate GTFS files for Google Maps</li>
            </ul>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    
    .page-header {
      margin-bottom: 30px;
    }
    
    .page-header h1 {
      margin: 0 0 8px 0;
      color: #333;
      font-size: 28px;
      font-weight: 500;
    }
    
    .page-description {
      color: #666;
      font-size: 16px;
      margin: 0;
    }
    
    .dashboard-content {
      display: grid;
      gap: 20px;
    }
    
    .info-card {
      padding: 20px;
    }
    
    .info-card ul {
      margin: 16px 0;
      padding-left: 20px;
    }
    
    .info-card li {
      margin-bottom: 8px;
      line-height: 1.5;
    }
  `]
})
export class DashboardComponent { } 