import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''
  welcomeMessageFromService:String



  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit() {
  
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    // console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanService().subscribe(response => this.handleSuccessfulResponse(response),
    error=> this.handleErrorResponse(error)
    );
    // console.log("get welcome message")
  }

  getWelcomeMessageWithParameter() {
    // console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanServiceWithVariable(this.name).subscribe(response => this.handleSuccessfulResponse(response),
    error=> this.handleErrorResponse(error)
    );
  }


  handleSuccessfulResponse(response) {
    // console.log(response);
    // console.log(response.message);
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error) {
    // console.log(error);
    // console.log(error.error);
    this.welcomeMessageFromService = error.error.message;
    

  }

}
