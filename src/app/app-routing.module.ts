import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'dashboard', loadChildren: () => import ('./scorecaed-dashboard/scorecaed-dashboard.module').then(m => m.ScorecardDashboardModule)},
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
