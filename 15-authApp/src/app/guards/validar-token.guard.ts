import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core'
import { AuthService } from '../auth/services/auth.service';
import { tap } from 'rxjs'

/*Guard se puede hacer validaciones antes de que carge la url */

export const validarTokenGuard: CanActivateFn = (route, state) => {

  //Importamos los servicioes para cuando se refresque el navegador en el dashboard
  //valide el token si es valido
  const auth = inject(AuthService);
  const router = inject(Router);
  
  return auth.validarToken()
  .pipe(
    tap( valid =>{
      if(!valid){
        router.navigateByUrl('/auth')
      }
    })
  )
};
