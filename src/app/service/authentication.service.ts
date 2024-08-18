import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username: string, password: string){
  if(username==="saianuraag" && password === "anuraag-49"){
    sessionStorage.setItem('authenticateUser', username)
return true;
  }
  return false;
}

isUserLoggedIn(){
  let user = sessionStorage.getItem('authenticateUser')
  return !(user == null)
}

logout(){
  sessionStorage.removeItem('authenticateUser')
}
}
