import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Route } from '../routes.component';

@Component({
  selector: 'app-route-dialog',
  templateUrl: './route-dialog.component.html',
  styleUrls: ['./route-dialog.component.scss']
})
export class RouteDialogComponent implements OnInit {
  routeForm: FormGroup;
  isFullscreen = false;

  routeTypes = [
    { value: 'Bus', label: 'Otobüs' },
    { value: 'Metro', label: 'Metro' },
    { value: 'Tram', label: 'Tramvay' },
    { value: 'Train', label: 'Tren' },
    { value: 'Ferry', label: 'Vapur' }
  ];

  agencies = [
    { value: 'İETT', label: 'İETT' },
    { value: 'Metro İstanbul', label: 'Metro İstanbul' },
    { value: 'İDO', label: 'İDO' },
    { value: 'BUDO', label: 'BUDO' }
  ];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RouteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Route
  ) {
    this.routeForm = this.fb.group({
      shortName: ['', [Validators.required]],
      longName: [''],
      routeType: ['', [Validators.required]],
      agency: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.routeForm.patchValue(this.data);
    }
  }

  onSubmit(): void {
    if (this.routeForm.valid) {
      const formValue = this.routeForm.value;
      if (this.data?.id) {
        this.dialogRef.close({ ...formValue, id: this.data.id });
      } else {
        this.dialogRef.close(formValue);
      }
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  toggleFullscreen(): void {
    this.isFullscreen = !this.isFullscreen;
  }
} 