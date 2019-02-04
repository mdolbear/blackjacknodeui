import { Injectable } from '@angular/core';
import {Card} from './card';

@Injectable({
  providedIn: 'root'
})
export class CardImageService {

  static readonly IMAGE_FILES: string[] =
  ['assets/cardImages/2C.jpg',
   'assets/cardImages/2D.jpg',
   'assets/cardImages/2H.jpg',
   'assets/cardImages/2S.jpg',
   'assets/cardImages/3C.jpg',
   'assets/cardImages/3D.jpg',
   'assets/cardImages/3H.jpg',
   'assets/cardImages/3S.jpg',
   'assets/cardImages/4C.jpg',
   'assets/cardImages/4D.jpg',
   'assets/cardImages/4H.jpg',
   'assets/cardImages/4S.jpg',
   'assets/cardImages/5C.jpg',
   'assets/cardImages/5D.jpg',
   'assets/cardImages/5H.jpg',
   'assets/cardImages/5S.jpg',
   'assets/cardImages/6C.jpg',
   'assets/cardImages/6D.jpg',
   'assets/cardImages/6H.jpg',
   'assets/cardImages/6S.jpg',
   'assets/cardImages/7C.jpg',
   'assets/cardImages/7D.jpg',
   'assets/cardImages/7H.jpg',
   'assets/cardImages/7S.jpg',
   'assets/cardImages/8C.jpg',
   'assets/cardImages/8D.jpg',
   'assets/cardImages/8H.jpg',
   'assets/cardImages/8S.jpg',
   'assets/cardImages/9C.jpg',
   'assets/cardImages/9D.jpg',
   'assets/cardImages/9H.jpg',
   'assets/cardImages/9S.jpg',
   'assets/cardImages/10C.jpg',
   'assets/cardImages/10D.jpg',
   'assets/cardImages/10H.jpg',
   'assets/cardImages/10S.jpg',
   'assets/cardImages/JC.jpg',
   'assets/cardImages/JD.jpg',
   'assets/cardImages/JH.jpg',
   'assets/cardImages/JS.jpg',
   'assets/cardImages/QC.jpg',
   'assets/cardImages/QD.jpg',
   'assets/cardImages/QH.jpg',
   'assets/cardImages/QS.jpg',
   'assets/cardImages/KC.jpg',
   'assets/cardImages/KD.jpg',
   'assets/cardImages/KH.jpg',
   'assets/cardImages/KS.jpg',
   'assets/cardImages/AC.jpg',
   'assets/cardImages/AD.jpg',
   'assets/cardImages/AH.jpg',
   'assets/cardImages/AS.jpg'
  ];

  constructor() { }

  /**
   * Answer the image file name for aCard
   * @param aCard Card
   * @return string
   */
  public getImageFor(aCard: Card): string {

    let tempIndex: number;

    tempIndex = this.getSuitIndexFor(aCard.suit) +
                this.getCardTypeIndexFor(aCard.cardType);
    
    return CardImageService.IMAGE_FILES[tempIndex];
  }


  /**
   * Answer the index for aSuit
   * @param aSuit 
   * @return number
   */
  private getSuitIndexFor(aSuit: string): number {

    let tempIndex: number = 0;

    switch (aSuit) {

      case "CLUBS":
        tempIndex = 0;
        break;

      case "DIAMONDS":
        tempIndex = 1;
        break;

      case "HEARTS":
        tempIndex = 2;
        break;

      case "SPADES":
        tempIndex = 3;
        break;

      default: 
        throw new Error("Invalid Suit argument");
    }

    return tempIndex;
  }

  /**
   * Answer the index for aCardType
   * @param aCardType 
   * @return numbrer
   */
  private getCardTypeIndexFor(aCardType: string): number {

    let tempIndex: number;

    switch (aCardType) {

      case "TWO":
        tempIndex = 0;
        break;

      case "THREE":
        tempIndex = 4;
        break;

      case "FOUR":
        tempIndex = 8;
        break;

      case "FIVE":
        tempIndex = 12;
        break;

      case "SIX":
        tempIndex = 16;
        break;

      case "SEVEN":
        tempIndex = 20;
        break;

      case "EIGHT":
        tempIndex = 24;
        break;

      case "NINE":
        tempIndex = 28;
        break;

      case "TEN":
        tempIndex = 32;
        break;

      case "JACK":
        tempIndex = 36;
        break;

      case "QUEEN":
        tempIndex = 40;
        break;

      case "KING":
        tempIndex = 44;
        break;

      case "ACE":
        tempIndex = 48;
        break;

      default: 
        throw new Error("Invalid CardType argument");
    }

    return tempIndex;
  }


}
