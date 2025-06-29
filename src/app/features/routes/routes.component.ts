import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { RouteDialogComponent } from './route-dialog/route-dialog.component';

export interface Route {
  id?: string;
  shortName: string;
  longName: string;
  routeType: string;
  agency: string;
}

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {
  displayedColumns: string[] = ['shortName', 'longName', 'routeType', 'agency', 'actions'];
  dataSource = new MatTableDataSource<Route>([]);
  loading = false;

  // Mock data
  routes: Route[] = [
    { id: '1', shortName: '34', longName: 'Zincirlikuyu - Avcılar', routeType: 'Bus', agency: 'İETT' },
    { id: '2', shortName: 'M2', longName: 'Vezneciler - Hacıosman', routeType: 'Metro', agency: 'Metro İstanbul' },
    { id: '3', shortName: 'T1', longName: 'Kabataş - Bağcılar', routeType: 'Tram', agency: 'Metro İstanbul' }
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadRoutes();
  }

  loadRoutes(): void {
    this.loading = true;
    // Mock loading
    setTimeout(() => {
      this.dataSource.data = this.routes;
      this.loading = false;
    }, 500);
  }

  openRouteDialog(route?: Route): void {
    const dialogRef = this.dialog.open(RouteDialogComponent, {
      width: '600px',
      data: route
    });

    dialogRef.afterClosed().subscribe((result: Route) => {
      if (result) {
        if (result.id) {
          // Update existing route
          const index = this.routes.findIndex(r => r.id === result.id);
          if (index !== -1) {
            this.routes[index] = result;
          }
        } else {
          // Add new route
          result.id = (this.routes.length + 1).toString();
          this.routes.push(result);
        }
        this.dataSource.data = [...this.routes];
      }
    });
  }

  deleteRoute(id: string): void {
    if (confirm('Bu hatı silmek istediğinizden emin misiniz?')) {
      this.routes = this.routes.filter(r => r.id !== id);
      this.dataSource.data = [...this.routes];
    }
  }
} 