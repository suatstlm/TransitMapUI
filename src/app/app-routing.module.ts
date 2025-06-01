import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'stops',
        component: DashboardComponent // Temporary placeholder
      },
      {
        path: 'routes',
        component: DashboardComponent // Temporary placeholder
      },
      {
        path: 'trips',
        component: DashboardComponent // Temporary placeholder
      },
      {
        path: 'calendar',
        component: DashboardComponent // Temporary placeholder
      },
      {
        path: 'gtfs',
        component: DashboardComponent // Temporary placeholder
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
