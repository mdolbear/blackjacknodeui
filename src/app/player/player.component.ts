import { Component, OnInit, Input } from '@angular/core';
import {CardImageService} from '../card-image.service';
import {Player} from '../player';
import {Card} from '../card';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() player: Player;

  constructor(public cardImageService: CardImageService) { }

  ngOnInit() {
  }

  /**
   * Answer my image location for aCard
   * @param aCard Card
   */
  public getImageLocationFor(playedCard: any) : string {

    return this.cardImageService.getImageFor(playedCard);
  }
}
