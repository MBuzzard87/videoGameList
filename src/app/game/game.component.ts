import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../game-list/game-list.component';
import { GameDataService } from '../service/data/game-data.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  id :number
  game : Game

  constructor(
    private gameService : GameDataService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.game = new Game(1,'','','');
    this.gameService.retrieveGame("Buzzywuzzy87", this.id).subscribe (
      data => this.game = data
    )
  }

}
