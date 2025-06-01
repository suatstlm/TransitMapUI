import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutModule as CdkLayoutModule } from '@angular/cdk/layout';

import { MaterialModule } from '../shared/material.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    CdkLayoutModule
  ],
  exports: [
    MainLayoutComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class LayoutModule { } 