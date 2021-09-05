import { Component, OnInit } from '@angular/core';
import { TransferServiceService } from '../service/data/transfer-service.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private transfer : TransferServiceService) { }

  ngOnInit(): void {
    this.transfer.clearData();
    this.hardcodedAuthenticationService.logout();
    
  }

}
