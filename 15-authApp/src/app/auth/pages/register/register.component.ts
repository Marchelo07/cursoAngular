import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    name: ['test4', [Validators.required]],
    email: ['test4@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  registrarUsuario() {
    console.log(this.miFormulario.value)
    const { name, email, password } = this.miFormulario.value;
    this.authService.registroUsuario(name, email, password)
      .subscribe(resp => {
        if (resp === true) {
          this.router.navigateByUrl('/dashboard')
        }else{
          Swal.fire('Error', resp, 'error');
        }
      })
  }

}
