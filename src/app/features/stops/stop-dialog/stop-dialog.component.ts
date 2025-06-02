import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Stop } from '../stops.component';

@Component({
  selector: 'app-stop-dialog',
  templateUrl: './stop-dialog.component.html',
  styleUrls: ['./stop-dialog.component.scss']
})
export class StopDialogComponent implements OnInit {
  stopForm: FormGroup;
  mapOptions: google.maps.MapOptions = {
    center: { lat: 41.0082, lng: 28.9784 }, // Istanbul coordinates
    zoom: 12,
    mapTypeId: 'roadmap',
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false
  };
  markerPosition: google.maps.LatLngLiteral | null = null;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<StopDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Stop
  ) {
    this.stopForm = this.fb.group({
      name: ['', [Validators.required]],
      latitude: ['', [Validators.required, Validators.min(-90), Validators.max(90)]],
      longitude: ['', [Validators.required, Validators.min(-180), Validators.max(180)]]
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.stopForm.patchValue(this.data);
      this.markerPosition = {
        lat: this.data.latitude,
        lng: this.data.longitude
      };
    }
  }

  onMapClick(event: google.maps.MapMouseEvent): void {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      
      this.markerPosition = { lat, lng };
      this.stopForm.patchValue({
        latitude: lat,
        longitude: lng
      });
    }
  }

  onSubmit(): void {
    if (this.stopForm.valid) {
      const formValue = this.stopForm.value;
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
} 