import { unescapeIdentifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GameDataService } from '../service/data/game-data.service';



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

  selectMsg: string
  message : string
  private currentRow;
  private icon;
  




  constructor(private gameService : GameDataService,
    private router : Router) { }

  
    ngOnInit() {
    this.refreshGameList();
  }

/////////////////   AG-GRID   /////////////////////////


columnDefs = [
  { headerName: "Title", width: 498, field: 'name', sortable: true, filter: true},
  { field: 'console', width: 200, sortable: true, filter: true},
  { field: 'status', cellStyle: params => params.data.status == "Complete" ? { color: 'green' } : { color: 'red' }, width: 200, sortable: true, filter: true},
  { headerName: "Rating", width: 200}
  
];


rowData: [Observable<any[]>];


  onRowSelect(event) {
    // handle event.data which is the object with the selected row data
  this.currentRow = event.data
  }


  validationStatusRenderer(params) {
    let tick = `<i class="fa fa-check" aria-hidden="true"></i>`;
    let cross = `<i class="fa fa-times" aria-hidden="true"></i> `;
    this.icon = params.value.lastValidation === "Complete" ? tick : cross;
    
  }


///////////////////    Clear Message    /////////////////////////////

clearMsg() {
  this.message=undefined;
  this.selectMsg=undefined;
}
 
///////////////////    CRUD OPERATIONS    /////////////////////////
 
  refreshGameList() {
    this.gameService.retrieveAllGames('Buzzywuzzy87').subscribe(
      response => {
        this.rowData = response;
        console.log(response);
        
      }
    )
    
    
  }

  deleteGame() {
    if(this.currentRow != undefined) {
      this.gameService.deleteGame('Buzzywuzzy87', this.currentRow.id).subscribe(
        response => {
          console.log(response);
          this.refreshGameList();
          this.message = `${this.currentRow.name} successfully deleted`;
          this.currentRow=undefined;
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
