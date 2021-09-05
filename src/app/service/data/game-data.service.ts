import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/app.constants';
import { Game } from 'src/app/game-list/game-list.component';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  constructor(private http : HttpClient) { }



  retrieveAllGames(username): Observable<any> {
    return this.http.get(`${API_URL}/${username}/games`);
  }

  deleteGame(username, id) {
    return this.http.delete(`${API_URL}/${username}/games/${id}`)
  }

  retrieveGame(username, id) {
    return this.http.get<Game>(`${API_URL}/${username}/games/${id}`)
  }

  updateGame(username,id,game) {
    return this.http.put(`${API_URL}/${username}/games/${id}`, game)
  }

  createGame(username, game) {
    return this.http.post(`${API_URL}/${username}/createGame`, game)
  }

}
