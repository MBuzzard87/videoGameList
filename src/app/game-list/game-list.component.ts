import { Component, OnInit } from '@angular/core';

export class Game {
  constructor(
    public id: number,
    public name: string,
    public console: string,
    public done: boolean
  ) {}
}

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {


  games = [
    new Game(1, "Little Samson", "NES", true),
    new Game(2, "Super Castlevania IV", "SNES", true),
    new Game(3, "Crusader of Centy", "Sega Genesis", false)
    
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
