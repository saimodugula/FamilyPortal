import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  //standalone: true,
  //imports: [NgIf]
})
export class LoginComponent {

  username =''
  password = ''
  errorMsg ='Invalid Credentials'
  invalidLogin = false
  
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ){}
  
  login(){
  if(this.authenticationService.authenticate(this.username, this.password)){
    this.router.navigate(['welcome', this.username])
    this.invalidLogin = false
  }  else{
    this.invalidLogin = true
  }
    
  }

}
