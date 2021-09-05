import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service copy';
import { TransferServiceService } from '../service/data/transfer-service.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { SendDataComponent } from '../transfer/send-data/send-data.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  
  username = ""
  password = ""
  errorMessage = "Invalid Credentials"
  invalidLogin = false
  
  constructor(private router: Router,
    private hardcodedAutheticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService,
    private transfer : TransferServiceService) { }

  ngOnInit(): void {
    
  }

  // handleLogin() {
  //   console.log(this.username)
  //   console.log(this.password)
  //   if (this.hardcodedAutheticationService.authenticate(this.username, this.password)) {
  //     this.router.navigate(['welcome', this.username])
  //     this.invalidLogin = false
  //   } else {
  //     this.invalidLogin = true
  //   }
  // }

  // handleBasicAuthLogin() {
  //   this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
  //   .subscribe(
  //     data => {
  //       console.log(data)
  //       this.router.navigate(['welcome', this.username])
  //     this.invalidLogin = false
  //     },
  //     error => {
  //       console.log(console.error)
  //       this.invalidLogin = true
  //     }
  //   )
  // }

  handleJWTAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log("You're now logged in!!!")
            console.log(data)
            this.transfer.setData(this.username)
            this.router.navigate(['welcome', this.username])
            this.invalidLogin = false      
          },
          error => {
            console.log(error)
            this.invalidLogin = true
          }
        )
  }
}
