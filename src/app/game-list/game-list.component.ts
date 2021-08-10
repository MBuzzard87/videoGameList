import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
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

  message : string

  columnDefs = [
    { headerName: "Title", field: 'name', sortable: true, filter: true, resizable:true},
    { field: 'console', sortable: true, filter: true, resizable:true },
    { field: 'status', sortable: true, filter: true, resizable:true },
    { headerName: "Update", suppressCellFlash:true, cellRenderer: (params) => {return `<div><button class="btn btn-info" onClick="updateGame(${params.id})">Update</button></div>`}},
    { headerName: "Delete", suppressCellFlash:true, cellRenderer: (params) => {return `<div><button class="btn btn-danger" onClick="deleteGame(${params.id})">Delete</button></div>`}},
    
];

rowData: [Observable<any[]>];


  constructor(private gameService : GameDataService,
    private router : Router) { }

  ngOnInit() {
    this.refreshGameList();
  }

  refreshGameList() {
    this.gameService.retrieveAllGames('Buzzywuzzy87').subscribe(
      response => {
        this.rowData = response;
        console.log(response);
      }
    )
  }

  deleteGame(id) {
    this.gameService.deleteGame('Buzzywuzzy87', id).subscribe(
      response => {
        console.log(response);
        this.refreshGameList();
        this.message = `${Game.name} deleted successfully`;
      }
    )
  }


  updateGame(id) {
    console.log("yooooo");
    this.router.navigate(["games", id])
  }

  addGame() {
    this.router.navigate(["games", -1])
  }

}
