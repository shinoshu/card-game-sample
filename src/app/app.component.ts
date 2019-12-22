import { Component, OnInit } from '@angular/core';
import { Card } from './card.enum';
import * as lodash from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  allCards: Card[] = [];

  cards: Card[] = [];

  ngOnInit() {
    for (const [key] of Object.entries(Card)) {
      this.allCards.push(Card[key]);
    }

    this.cards = lodash.shuffle(this.allCards);
    this.cards = this.cards.slice(0, 2);
  }

  action() {
    const cards = lodash.shuffle(this.allCards);
    const card = cards.slice(0, 1)[0];
    this.cards.push(card);
  }
}
