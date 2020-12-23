import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'create-data',
    loadChildren: () => import('projects/create-data/src/app/app.module').then(m => m.CreateDataModule)
  },
  {
    path: 'list-data',
    loadChildren: () => import('projects/list-data/src/app/app.module').then(m => m.ListDataModule)
  },
  { path: '**', redirectTo: 'list-data' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
