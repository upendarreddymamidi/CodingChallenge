import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrolleeListComponent } from './enrollees/enrollee-list/enrollee-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnrolleeViewComponent } from './enrollees/enrollee-view/enrollee-view.component';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    EnrolleeListComponent,
    EnrolleeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
