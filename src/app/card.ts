import { TemplateParseResult } from '@angular/compiler';

export class Card {

    points: number;
    suit: string;
    cardType: string;

    /**
     * Create a card from anAnonymousObject
     * @param anAnonymousObject any
     */
    static createCardFrom(anAnonymousObject: any) : Card {

        return  new Card(anAnonymousObject.points, 
                         anAnonymousObject.suit, 
                         anAnonymousObject.cardType);
    }

    /**
     * Answer an instance from the args below
     * @param points number
     * @param suit string
     * @param cardType string
     */
    constructor(points: number, suit: string, cardType: string) {

        this.points = points;
        this.suit = suit;
        this.cardType = cardType;

    }


}