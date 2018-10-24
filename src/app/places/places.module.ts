import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesComponent } from './places.component';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatRippleModule } from '@angular/material';

const routes: Routes = [{
  path: '',
  component: PlacesComponent
}];

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
    RouterModule.forChild(routes)
  ],
  declarations: [
    PlacesComponent
  ],
  exports: [
    RouterModule,
    PlacesComponent
  ]
})
export class PlacesModule { }
