import { EnrolleeViewComponent } from './enrollees/enrollee-view/enrollee-view.component';
import { EnrolleeListComponent } from './enrollees/enrollee-list/enrollee-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EnrolleeListComponent,
  },
  {
    path: 'enrollee/:id',
    component: EnrolleeViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
