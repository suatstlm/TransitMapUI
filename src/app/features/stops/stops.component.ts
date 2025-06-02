import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StopDialogComponent } from './stop-dialog/stop-dialog.component';

export interface Stop {
  id?: number;
  name: string;
  latitude: number;
  longitude: number;
}

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.scss']
})
export class StopsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'latitude', 'longitude', 'actions'];
  dataSource: Stop[] = [];
  loading = false;

  @ViewChild(MatTable) table!: MatTable<Stop>;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadStops();
  }

  loadStops(): void {
    this.loading = true;
    // TODO: Replace with actual API call
    setTimeout(() => {
      this.dataSource = [
        { id: 1, name: 'Central Station', latitude: 41.0082, longitude: 28.9784 },
        { id: 2, name: 'City Center', latitude: 41.0082, longitude: 28.9784 },
      ];
      this.loading = false;
    }, 1000);
  }

  openStopDialog(stop?: Stop): void {
    const dialogRef = this.dialog.open(StopDialogComponent, {
      width: '800px',
      data: stop
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.id) {
          this.updateStop(result);
        } else {
          this.createStop(result);
        }
      }
    });
  }

  createStop(stop: Stop): void {
    // TODO: Replace with actual API call
    this.dataSource.push({ ...stop, id: this.dataSource.length + 1 });
    this.table.renderRows();
    this.snackBar.open('Stop created successfully', 'Close', { duration: 3000 });
  }

  updateStop(stop: Stop): void {
    // TODO: Replace with actual API call
    const index = this.dataSource.findIndex(s => s.id === stop.id);
    if (index > -1) {
      this.dataSource[index] = stop;
      this.table.renderRows();
      this.snackBar.open('Stop updated successfully', 'Close', { duration: 3000 });
    }
  }

  deleteStop(id: number): void {
    // TODO: Replace with actual API call
    this.dataSource = this.dataSource.filter(stop => stop.id !== id);
    this.table.renderRows();
    this.snackBar.open('Stop deleted successfully', 'Close', { duration: 3000 });
  }
} 