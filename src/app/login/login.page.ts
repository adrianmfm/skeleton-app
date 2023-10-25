import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string;
  contrasena: string;
 
  field:string="";

  constructor(private router: Router) {
    this.usuario = '';
    this.contrasena = '';
  }
  
  
  ngOnInit() {
  }

  ingresar() {
    if (this.validateModel({ usuario: this.usuario, contrasena: this.contrasena })) {
      this.field = '';
      localStorage.setItem("username", this.usuario)
      this.router.navigate(['/home']);


    }
  }
  validateModel(model:any){
    for (var [key, value] of Object.entries(model)) {
      if (value=="") {
        this.field=key;
        return false;
      }
    }
    return true;
  }

}
