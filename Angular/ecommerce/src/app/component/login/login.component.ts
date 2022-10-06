import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,Form } from '@angular/forms';
import { AutenticationServiceService } from 'src/app/service/autentication-service.service';
import { User } from 'src/app/config/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioCreado:FormGroup;
  constructor(
    private formBuilder : FormBuilder,
    private autenticationServiceService: AutenticationServiceService,
    private router: Router
    ) {
    this.formularioCreado = this.formBuilder.group({
      correo : ["",Validators.compose([Validators.required,Validators.email])],
     contraseña:["",Validators.compose([Validators.required,Validators.minLength(8)])]

    });

  }
  ngOnInit(): void {
  }

onLogin(){
  if (Response){
    this.router.navigate(['/login'])};
}



  onEnviar(){
    this.autenticationServiceService.loginUser(this.formularioCreado.value).subscribe(
      (response: User) => {
        if (response){
          this.router.navigate(['/mainview'])};
      }
    );
  }

  Home(){
    this.router.navigate(['/mainview'])
  }

}

