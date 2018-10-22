import { BikesComponent } from './../../projects/bikes-app/src/app/bikes/bikes.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule } from '@angular/material';
import { DonutsComponent } from './donuts/donuts.component';
import { PlacesComponent } from './places/places.component';

const appRoutes: Routes = [
  {
    path: 'bikes',
    component: BikesComponent
  },
  {
    path: 'donuts',
    component: DonutsComponent
  },
  {
    path: 'places',
    component: PlacesComponent
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
    BikesComponent,
    DonutsComponent,
    PlacesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
