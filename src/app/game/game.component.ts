import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../game-list/game-list.component';
import { GameDataService } from '../service/data/game-data.service';
import { TransferServiceService } from '../service/data/transfer-service.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  id :number
  game : Game
  username = ''

  constructor(
    private gameService : GameDataService,
    private route : ActivatedRoute,
    private router : Router,
    private transfer : TransferServiceService
  ) { }

  ngOnInit(): void {
    this.username = this.transfer.getData()
    this.id = this.route.snapshot.params['id'];
    this.game = new Game(this.id,'','','');
    if(this.id != -1) {
      this.gameService.retrieveGame(this.username, this.id).subscribe (
        data => this.game = data
      )
    }
    
  }

  saveGame() {

    if(this.id == -1) {
      this.gameService.createGame(this.username, this.game).subscribe(
        data => {
          alert(`${this.game.name} Successfully Added `)
          this.router.navigate(['games'])
        }
      )
      
    } else {
      this.gameService.updateGame(this.username, this.id, this.game).subscribe(
        data => {
          alert(`${this.game.name} Successfully Updated`)
          this.router.navigate(['games'])
        }
      )
    }
    
  }

}
