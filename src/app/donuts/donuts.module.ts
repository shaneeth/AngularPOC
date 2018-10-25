import { DonutDetailComponent } from './donut-detail/donut-detail.component';
import { DonutsComponent } from './donuts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatModulesList } from 'common/imports/mat-list';

const routes: Routes = [
  {
    path: '',
    component: DonutsComponent
  },
  {
    path: ':id',
    component: DonutDetailComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ...MatModulesList,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DonutsComponent,
    DonutDetailComponent
  ]
})
export class DonutsModule { }
