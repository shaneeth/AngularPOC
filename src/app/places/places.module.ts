import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesComponent } from './places.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { MatModulesList } from 'common/imports/mat-list';

const routes: Routes = [
  {
    path: '',
    component: PlacesComponent
  },
  {
    path: ':id',
    component: PlaceDetailComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ...MatModulesList,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PlacesComponent,
    PlaceDetailComponent
  ]
})
export class PlacesModule { }
