import { Component, OnInit, Input } from '@angular/core';
import {BlackJackGame} from '../blackjackgame';
import {GameService} from '../game.service';
import {CardImageService} from '../card-image.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() game: BlackJackGame;
  private cardDeckId: string;
  private gameId: string;

  private shouldDisableCreateGame: boolean;
  private shouldDisablePlayHand: boolean;

  constructor(public gameService: GameService,
              public cardImageService: CardImageService) { 

    this.initializeGameState();
  }

  ngOnInit() {
  }

  /**
   * Create new game
   * @param numberOfPlayers number
   */
  public createNewGame(numberOfPlayers: number) {

    this.initializeGameState();

    this.gameService.createCardDeck()
        .subscribe((cardDeckResponse: any) => {
            this.cardDeckId = cardDeckResponse['result'];
        });

    this.gameService.createGame(numberOfPlayers)
        .subscribe((createGameResponse: any) => {
            this.gameId = createGameResponse['result'];

            this.gameService.getGameState(this.gameId)
            .subscribe((game: any) => {
                    this.game = game.result;
                    this.evaluateButtonAndFieldStates();
              });

        });


  }

  /**
   * Initialize my game state
   */
  private initializeGameState() {

    this.gameId = null;
    this.cardDeckId = null;
    this.game = null;
    this.shouldDisableCreateGame = false;
    this.shouldDisablePlayHand = true;
  }

  /**
   * Play hand
   */
  public playHand() {

    this.gameService.playHand(this.cardDeckId, this.gameId)
      .subscribe(() => {
        console.log('Played hand successfully');
        this.gameService.getGameState(this.gameId)
                .subscribe((game: any) => {
                        this.game = game.result;
                        this.evaluateButtonAndFieldStates();
                  });
    });

  }

  /**
   * Evaluate button and field states
   */
  private evaluateButtonAndFieldStates() {

    this.evaluateEnableCreateGame();
    this.evaluateEnablePlayHand();
  }


  /**
   * Answer whether we should enable create game
   */
  private evaluateEnableCreateGame() {

    this.shouldDisableCreateGame = 
      !((!this.game) || (this.game && (this.game['gameState'] === "terminated")));

  }

  /**
   * Answer whether we should enable play hand
   */
  private evaluateEnablePlayHand() {

    this.shouldDisablePlayHand = !(this.game && this.game['gameState'] === "active");

  }

}
