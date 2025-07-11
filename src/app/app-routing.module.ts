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
        loadChildren: () => import('./features/stops/stops.module').then(m => m.StopsModule)
      },
      {
        path: 'routes',
        loadChildren: () => import('./features/routes/routes.module').then(m => m.RoutesModule)
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
