import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TransferServiceService {

  constructor(
    private router : Router
  ) { }

data = ''

setData(data) {
  this.data = data;
}

getData() {
  let temp = this.data;
  return temp;
}

clearData(){
  this.data = undefined;
}

}
