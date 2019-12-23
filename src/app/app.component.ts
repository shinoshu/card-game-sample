import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Card } from './card.enum';
import { HitOrStandComponent } from './hit-or-stand/hit-or-stand.component';
import * as lodash from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  allCards: Card[] = [];

  cards: Card[] = [];

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    for (const [key] of Object.entries(Card)) {
      this.allCards.push(Card[key]);
    }

    this.cards = lodash.shuffle(this.allCards);
    this.cards = this.cards.slice(0, 2);

    this.dialog.open(HitOrStandComponent);
  }

  action() {
    const cards = lodash.shuffle(this.allCards);
    const card = cards.slice(0, 1)[0];
    this.cards.push(card);
  }
}
