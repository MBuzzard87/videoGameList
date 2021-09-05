import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferServiceService } from 'src/app/service/data/transfer-service.service';

@Component({
  selector: 'app-receive-data',
  templateUrl: './receive-data.component.html',
  styleUrls: ['./receive-data.component.css']
})
export class ReceiveDataComponent implements OnInit {

  data = this.transfer.getData();       
  
 constructor(
   private transfer : TransferServiceService,
   private router : Router) {
      if(this.data){
        
      }
      else{
        this.router.navigateByUrl('/sender');
      }
   }
  ngOnInit(): void {
  }

}
