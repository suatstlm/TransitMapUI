import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.companent.html',
  styleUrls: ['./dashboard.companent.scss']
})
export class DashboardComponent {
  today = new Date();
} 

