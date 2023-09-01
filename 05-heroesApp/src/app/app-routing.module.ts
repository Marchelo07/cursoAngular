import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { authGuard } from './auth/guards/auth.guard';
import { authActivatedGuard } from './auth/guards/auth-activated.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
    // canMatch:[authGuard],
    canActivate:[authActivatedGuard],
  },
  {
    path: '404',
    component: ErrorPageComponent
  }, {
    path: '**',
    redirectTo: '404'
    // component:ErrorPageComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ], exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
