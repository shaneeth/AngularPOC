import { BikesModule } from './../../projects/bikes-app/src/app/bikes/bikes.module';
import { BikesComponent } from './../../projects/bikes-app/src/app/bikes/bikes.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatRippleModule } from '@angular/material';
import { DonutsComponent } from './donuts/donuts.component';
import { PlacesComponent } from './places/places.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'donuts',
    component: DonutsComponent,
    data: {
      title: 'Donuts'
    }
  },
  {
    path: 'places',
    component: PlacesComponent,
    data: {
      title: 'Places'
    }
  },
  {
    path: '',
    redirectTo: '/bikes',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DonutsComponent,
    PlacesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatRippleModule,
    BikesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
