import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
//isUserLoggerIn: boolean = false;

  constructor(
    public authenticationService : AuthenticationService
  ){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInIt(){
//this.isUserLoggerIn = this.authenticationService.isUserLoggedIn();
  }

}
