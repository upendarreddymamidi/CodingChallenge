import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { EnrolleeListComponent } from '../enrollee-list/enrollee-list.component';

export interface PeriodicElement {
  id: string;
  name: string;
  dateOfBirth: string;
  active: boolean;
}

@Component({
  selector: 'app-enrollee-view',
  templateUrl: './enrollee-view.component.html',
  styleUrls: ['./enrollee-view.component.css']
})
export class EnrolleeViewComponent implements OnInit {
  public enrolleeInfo: PeriodicElement;
  constructor(
    private api: ApiService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.api.getEnrolleeById(this.activeRoute.snapshot.params.id)
      .subscribe((data:any) => {
        if (data) {
          this.enrolleeInfo = data;
        }
      })
  }

  submitEnrollee(form) {
    const requestBody = {
      name: form.value.name,
      dateOfBirth: form.value.dateOfBirth,
      active: this.enrolleeInfo.active
    }
    this.api.updateEnrollee(this.enrolleeInfo.id, requestBody)
      .subscribe((res: any) => {
        console.log('Enrollee Updated: ', res);
        this.router.navigate(['']);
        this.snackBar.open('Enrollee updated successfully!', 'Close Notification', {
          duration: 3000
        });
      },
      error => {
        console.error('Error updating Enrollee.', error);
        this.snackBar.open('Error updating Enrollee. Please try again', 'Close Notification', {
          duration: 3000
        });
      });
  }

  cancelEdit() {
    this.router.navigate(['']);
    this.snackBar.open('Edit cancelled. Navigated to Homepage!', 'Close Notification', {
      duration: 3000
    });
  }

}
