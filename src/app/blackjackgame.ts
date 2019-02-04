
import {Player} from './player';

export class BlackJackGame {

    id: string;
    state: string;
    players: Player[];

    /**
     * Create game from anAnonymousObject
     * @param anAnonymousObject any
     */
    static createGameFrom(anAnonymousObject: any) : BlackJackGame {

        let tempResult: BlackJackGame;

        tempResult = new BlackJackGame(anAnonymousObject.id,
                                       anAnonymousObject.state);

        for (let i = 0; i < anAnonymousObject.players.length; i++) {

            tempResult.addPlayer(Player.createPlayerFrom(anAnonymousObject.players[i]));
        }

        return tempResult;
    }


    /**
     * Answer an instance based on the arguments below
     * @param id string
     * @param state string
     */
    constructor(id: string, state: string) {

        this.id = id;
        this.state = state;
        this.players = [];
    }

    /**
     * Add aPlayer to me
     * @param aPlayer Player
     */
    addPlayer(aPlayer: Player) {

        this.players.push(aPlayer);
    }
    
}