import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferServiceService } from '../service/data/transfer-service.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
  

  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService,
    private router : Router,
    private transfer : TransferServiceService) { }

    username = ''

  ngOnInit(): void {
    
  }


  welcome() {
    this.username = this.transfer.getData();
    this.router.navigate(['welcome', this.username])
  }

  logout() {
    alert("Logging out, come back again!")
    this.transfer.clearData();
    this.hardcodedAuthenticationService.logout();
    this.router.navigate(['login'])
  }
}
