import { Routes, RouterModule } from '@angular/router';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatRippleModule } from '@angular/material';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { BikesComponent } from './bikes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'bikes',
    component: BikesComponent,
    data: {
      title: 'Bikes'
    }
  },
  {
    path: '',
    redirectTo: '/bikes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatRippleModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    BikesComponent,
    BikeDetailComponent
  ],
  exports: [
    BikesComponent,
    BikeDetailComponent
  ]
})
export class BikesModule { }
