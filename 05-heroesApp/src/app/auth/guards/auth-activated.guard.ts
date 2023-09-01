import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { tap } from "rxjs";

export const authActivatedGuard: CanActivateFn = (route, state) => {
  
  const auth = inject(AuthService);
  const router = inject(Router)
  // const infoAuth = auth.auth;

  // if(infoAuth.id){
  //   return true;
  // }
  // console.log('Bloqueado por el AuthGuard - CanActivateFn')
  // return false;

  return auth.verificarAutenticacion().pipe(
    tap(
        estaUtenticado => {
          if(!estaUtenticado){
            router.navigate(['./auth/login'])
          }
        }
    )
  )

};
