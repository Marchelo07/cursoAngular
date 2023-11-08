import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashoard',
  templateUrl: './dashoard.component.html',
  styleUrls: ['./dashoard.component.css']
})
export class DashoardComponent {

  /*Creo un get para poder llamarlo en el en el dashboard*/
  get usuario (){
    return this.authService.usuario; //llamo el get que se encuentra en el servicio
  }

  constructor(
    private router : Router,
    private authService: AuthService
  ) { }

  logout(){

    this.router.navigateByUrl('/auth/login');
    this.authService.logout();

  }

}
