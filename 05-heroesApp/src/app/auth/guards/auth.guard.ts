import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { Auth } from '../interfaces/auth.interfaces';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { tap } from "rxjs";

export const authGuard: CanMatchFn = (route, state) => {

  // const auth = inject(AuthService).auth;
  const auth = inject(AuthService);
  const router = inject(Router);
  // // const infoAuth = auth.auth;

  // if(auth.id){
  //   console.log(auth.id)
  //   return true;
  // }
  // console.log('Bloqueado por el AuthGuard - CanMatchFn')
  // return false;

  return auth.verificarAutenticacion().pipe(
    tap(
      estaUtenticado => {
        if (!estaUtenticado) {
          router.navigate(['./auth/login'])
        }
      }
    )
  )
};
