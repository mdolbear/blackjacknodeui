import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders }    from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {BlackJackGame} from './blackjackgame';
import { catchError} from 'rxjs/operators'
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private client: HttpClient;

  //Constants
  static readonly BASE_URL = environment.serverUrl;
  static readonly CREATE_CARD_DECK_URL : string = GameService.BASE_URL 
            + "blackjack/createCardDeck";
  static readonly CREATE_GAME_URL : string = GameService.BASE_URL
            + "blackjack/startGame/";
  static readonly GAME_STATE_URL : string = GameService.BASE_URL
            + "blackjack/gameState/";
  static readonly PLAY_HAND_URL : string = GameService.BASE_URL
            + "blackjack/playHand/";

  /**
   * Answer a default instance
   * @param client HttpClient
   */
  constructor(client: HttpClient) { 
    this.client = client;
    
  }

  /**
   * Handle error
   * @param operation string
   * @param result T
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      console.log(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  /**
   * Answer the current game's state
   */
  public getGameState(gameId: string): Observable<BlackJackGame> {

      return this.client.get<BlackJackGame>(GameService.GAME_STATE_URL + gameId)
                        .pipe(catchError(this.handleError('getGameState',null)));
  }

  /**
   * Create card deck
   */
  public createCardDeck(): Observable<string> {

    return this.client.post<string>(GameService.CREATE_CARD_DECK_URL, 
                                    this.getHttpOptions())
                      .pipe(catchError(this.handleError('createCardDeck',null)));

  }

  /**
   * Create game
   * @param numberOfPlayers number
   */
  public createGame(numberOfPlayers:number): Observable<string> {

    return this.client.post<string>(GameService.CREATE_GAME_URL+numberOfPlayers,
                                    this.getHttpOptions())
                      .pipe(catchError(this.handleError('createGame',null)));

  }


  /**
   * Play hand
   */
  public playHand(cardDeckId: string, gameId: string): Observable<BlackJackGame> {

    return this.client.post(GameService.PLAY_HAND_URL+ cardDeckId + "/" + gameId,
                     this.getHttpOptions())
               .pipe(catchError(this.handleError('playHand',null)));


  }


  /**
   * Answer my http options
   */
  private getHttpOptions(): any {

    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

  }

}

