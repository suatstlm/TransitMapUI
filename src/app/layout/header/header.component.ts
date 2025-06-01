import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() menuToggle = new EventEmitter<void>();

  onMenuToggle(): void {
    this.menuToggle.emit();
  }

  onUserMenuClick(): void {
    // User menu functionality will be implemented later
  }

  onNotificationClick(): void {
    // Notification functionality will be implemented later  
  }
} 