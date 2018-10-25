import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatModulesList } from 'common/imports/mat-list';

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
    loadChildren: './donuts/donuts.module#DonutsModule',
    data: {
      title: 'Donuts'
    }
  },
  {
    path: 'places',
    loadChildren: './places/places.module#PlacesModule',
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
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ...MatModulesList,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
