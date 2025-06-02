import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { StopsComponent } from './stops.component';
import { StopDialogComponent } from './stop-dialog/stop-dialog.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    StopsComponent,
    StopDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: StopsComponent }
    ]),
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    GoogleMapsModule
  ]
})
export class StopsModule { } 