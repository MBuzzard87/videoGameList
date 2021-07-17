import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  game = {
    id : 1,
    name: "Little Samson"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
