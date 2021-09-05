import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferServiceService } from 'src/app/service/data/transfer-service.service';

@Component({
  selector: 'app-send-data',
  templateUrl: './send-data.component.html',
  styleUrls: ['./send-data.component.css']
})
export class SendDataComponent implements OnInit {

  constructor(
    private transfer : TransferServiceService,
    private router : Router) {}

  somefunction(data){
   this.transfer.setData(data);
   this.router.navigateByUrl('/reciever');
 }

  ngOnInit(): void {
  }

}
