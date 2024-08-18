import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

export class WelcomePortal {
  constructor(public message:string){}
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
  httpClient: any;

  constructor(
    private http: HttpClient
  ) { }
  executeWelcomePortalService(){
    //console.log("Execute welcome portal service")
    return this.http.get<WelcomePortal>('http://localhost:8080/welcome-portal');

  }
}
