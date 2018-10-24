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
    path: 'bikes',
    loadChildren: './bikes-wrap/bikes-wrap.module#BikesWrapModule',
    data: {
      title: 'Bikes'
    }
  },
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
