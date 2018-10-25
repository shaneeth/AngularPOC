import { Routes, RouterModule } from '@angular/router';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { BikesComponent } from './bikes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModulesList } from 'common/imports/mat-list';

const routes: Routes = [
  {
    path: '',
    component: BikesComponent
  },
  {
    path: ':id',
    component: BikeDetailComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ...MatModulesList,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BikesComponent,
    BikeDetailComponent
  ],
  exports: [
    BikesComponent,
    BikeDetailComponent,
    RouterModule
  ]
})
export class BikesModule { }

