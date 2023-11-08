import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashoardComponent } from './dashoard/dashoard.component';

const routes: Routes = [
  {
    path:'',
    component: DashoardComponent
  },
  {
    path:'**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
