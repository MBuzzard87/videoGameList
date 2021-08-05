import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/game-list/game-list.component';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  constructor(private http : HttpClient) { }



  retrieveAllGames(username): Observable<any> {
    return this.http.get(`http://localhost:8080/${username}/games/`);
  }

  deleteGame(username, id) {
    return this.http.delete(`http://localhost:8080/${username}/games/${id}`)
  }

  retrieveGame(username, id) {
    return this.http.get<Game>(`http://localhost:8080/${username}/games/${id}`)
  }

  updateGame(username,id,game) {
    return this.http.put(`http://localhost:8080/${username}/games/${id}`, game)
  }

  createGame(username,game) {
    return this.http.post(`http://localhost:8080/${username}/games`, game)
  }

}
