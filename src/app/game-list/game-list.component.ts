import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameDataService } from '../service/data/game-data.service';

export class Game {
  constructor(
    public id: number,
    public name: string,
    public console: string,
    public isComplete: string
  ) {}
}

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  message : string

  games: Game[];
  // = 
  // [
  //   new Game(1, "Little Samson", "NES", "Yes"),
  //   new Game(2, "Super Castlevania IV", "SNES", "Yes"),
  //   new Game(3, "Crusader of Centy", "Sega Genesis", "Yes")
    
  // ]


  constructor(private gameService : GameDataService,
    private router : Router) { }

  ngOnInit() {
    this.refreshGameList();
  }

  refreshGameList() {
    this.gameService.retrieveAllGames('Buzzywuzzy87').subscribe(
      response => {
        this.games = response;
        console.log(response);
      }
    )
  }

  deleteGame(id) {
    this.gameService.deleteGame('Buzzywuzzy87', id).subscribe(
      response => {
        console.log(response);
        this.refreshGameList;
        this.message = `Delete of Game #${id} successful`;
      }
    )
  }

  updateGame(id) {
    this.router.navigate(["games", id])
  }

}
