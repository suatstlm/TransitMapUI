import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface NavItem {
  label: string;
  icon: string;
  route: string;
  children?: NavItem[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  
  navItems: NavItem[] = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/dashboard'
    },
    {
      label: 'Stop Management',
      icon: 'location_on',
      route: '/stops'
    },
    {
      label: 'Route Management',
      icon: 'alt_route',
      route: '/routes'
    },
    {
      label: 'Trip Management',
      icon: 'directions_bus',
      route: '/trips'
    },
    {
      label: 'Service Calendar',
      icon: 'event',
      route: '/calendar'
    },
    {
      label: 'GTFS Export',
      icon: 'cloud_download',
      route: '/gtfs'
    }
  ];

  constructor(private router: Router) {}

  navigate(route: string): void {
    this.router.navigate([route]);
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
} 