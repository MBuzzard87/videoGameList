import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { GameDataService } from '../service/data/game-data.service';
import { TransferServiceService } from '../service/data/transfer-service.service';



export class Game {
  constructor(
    public id: number,
    public name: string,
    public console: string,
    public status: string
  ) {}
}

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  

  username = this.transfer.getData()
  selectMsg: string
  message : string
  private currentRow;
  currentName = "N/A";
  private gridApi;
  private gridColumnApi;
  

  


  constructor(private gameService : GameDataService,
    private router : Router,
    private transfer : TransferServiceService) { }

  
    ngOnInit() {
    this.refreshGameList();
  }

/////////////////   AG-GRID   /////////////////////////





columnDefs = [
  { headerName: "Title", width: 748, field: 'name', sortable: true, filter: true, floatingFilter: true},
  { field: 'console', width: 200, sortable: true, filter: true},
  { field: 'status', cellStyle: params => params.data.status == "Complete" ? { backgroundColor: '#478952' } : { backgroundColor: '#D54343' }, width: 150, sortable: true},
];


rowData: [Observable<any[]>];


  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  gridOptions = {
    onRowClicked: event => {
      this.currentRow = event.data;
      this.currentName = this.currentRow.name;
      
    }
  }

///////////////////    Clear Message    /////////////////////////////

clearMsg() {
  this.message=undefined;
  this.selectMsg=undefined;
}
 
///////////////////    CRUD OPERATIONS    /////////////////////////
 
  refreshGameList() {
    this.gameService.retrieveAllGames(this.username).subscribe(
      response => {
        console.log(this.username)
        this.rowData = response;        
      }
    )
    
    
  }

  deleteGame() {
    if(this.currentRow != undefined) {
      this.gameService.deleteGame(this.username, this.currentRow.id).subscribe(
        response => {
          this.refreshGameList();
          this.message = `${this.currentRow.name} successfully deleted`;
          this.currentRow=undefined;
          this.currentName = "N/A"
        }
      )
    } else {
      this.selectMsg = "Please select a game to delete";
    }
        
  }


  updateGame() {
    if(this.currentRow != undefined) {
      this.router.navigate(["games", this.currentRow.id])
      this.currentRow=undefined;
     } else {
       this.selectMsg = "Please select a game to update"
     }
  }

  addGame() {
    this.router.navigate(["games", -1])
  }

}