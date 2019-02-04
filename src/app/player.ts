
import {Card} from './card';

export class Player {

    id: string;
    state: string;
    points: number;
    cards: Card[];

    /**
     * Create a player from anAnonymousObject
     * @param anAnonymousObject any
     */
    static createPlayerFrom(anAnonymousObject: any) : Player {

        let tempResult: Player;

        tempResult = new Player(anAnonymousObject.id,
                                anAnonymousObject.state,
                                anAnonymousObject.points);
        for (let i = 0; i < anAnonymousObject.cards.length; i++) {

            tempResult.addCard(Card.createCardFrom(anAnonymousObject.cards[i]));
        }

        return tempResult;
    }

    /**
     * Create a player from the following arguments
     * @param id string
     * @param state string
     * @param points number
     */
    constructor(id: string, state: string, points: number) {

        this.id = id;
        this.state = state;
        this.points = points;
        this.cards = [];

    }

    /**
     * Add aCard to me
     * @param aCard Card
     */
    addCard(aCard: Card) {

        this.cards.push(aCard);
    }

}