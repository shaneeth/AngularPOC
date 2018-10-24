import { BikesModule } from 'projects/bikes-app/src/app/bikes/bikes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BikesModule
  ],
  declarations: []
})
export class BikesWrapModule { }
