import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Game } from 'src/app/game-list/game-list.component';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  constructor(private http : HttpClient) { }



  retrieveAllGames(username) {
    return this.http.get<Game[]>(`http://localhost:8080/user/${username}/games`)
  }

  deleteGame(username, id) {
    return this.http.delete(`http://localhost:8080/user/${username}/games/${id}`)
  }

  retrieveGame(username, id) {
    return this.http.get<Game>(`http://localhost:8080/user/${username}/games/${id}`)
  }

}
