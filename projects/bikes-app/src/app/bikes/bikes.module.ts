import { Routes, RouterModule, Router } from '@angular/router';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatRippleModule,
  MatTabsModule} from '@angular/material';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { BikesComponent } from './bikes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatRippleModule,
    MatTabsModule,
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

