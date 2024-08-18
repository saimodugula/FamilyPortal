import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  welcomeMessageFromService!: string;
  error!: string;
  name = ''
 

  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService
  ){}

  ngOnInit() {
    // this.route.snapshot.params['name']
    this.name = this.route.snapshot.params['name']
  }

  public getWelcomeMessage(){
    //console.log("Welcome to family portal");
    // this.service.executeWelcomePortalService();
    // this.service.executeWelcomePortalService().subscribe(
    //   response => this.handleSuccessfulResponse(response)
    // );
    // console.log(this.service.executeWelcomePortalService());
    this.service.executeWelcomePortalService().subscribe(
      //response => this.handleSuccessfulResponse(response)
      //response => console.log(response.message)
      response => this.handleSuccessfulResponse(response),
      //for error
      error => this.handleErrorResponse(error)
    );
    // console.log('last line of message');

  }

  handleSuccessfulResponse(response: any){
    this.welcomeMessageFromService = response.message
    //console.log(response);
    //console.log(response.message);
  }

  handleErrorResponse(error: any){
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.welcomeMessageFromService =error.error.message
  }

}
