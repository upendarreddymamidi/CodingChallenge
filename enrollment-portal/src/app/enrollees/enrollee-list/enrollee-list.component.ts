import { MatSort } from '@angular/material/sort';
import { ApiService } from './../api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  id: string;
  name: string;
  dateOfBirth: string;
  active: boolean;
}

@Component({
  selector: 'app-enrollee-list',
  templateUrl: './enrollee-list.component.html',
  styleUrls: ['./enrollee-list.component.css']
})
export class EnrolleeListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'dateOfBirth', 'active', 'actions'];
  dataSource: MatTableDataSource<PeriodicElement[]>;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(
    private api: ApiService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.api.getAllEnrollees()
    .subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<PeriodicElement[]>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
