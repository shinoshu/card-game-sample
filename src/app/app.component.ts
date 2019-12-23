import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Card } from './card.enum';
import { HitOrStandComponent } from './hit-or-stand/hit-or-stand.component';
import { PointCalculatorService } from './point-calculator.service';
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
    private dialog: MatDialog,
    private pointCalculatorService: PointCalculatorService,
  ) { }

  ngOnInit() {
    for (const [key] of Object.entries(Card)) {
      this.allCards.push(Card[key]);
    }

    this.addCard(2);

    const dialogRef = this.dialog.open(HitOrStandComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'hit') {
        this.addCard(1);
      }
    });
  }

  addCard(num: number) {
    const cards = lodash.shuffle(this.allCards);
    const card = cards.slice(0, num);
    this.cards.push(...card);
  }
}
