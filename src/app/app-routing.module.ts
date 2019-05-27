import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NQueensComponent } from './n-queens/n-queens.component';

const routes: Routes = [
  {
    path: '',
    component: NQueensComponent,
    pathMatch: 'full'
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
