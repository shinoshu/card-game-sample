import { Component, OnInit } from '@angular/core';
import { Card } from '../card.enum';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  cards: Card[] = [];

  constructor() { }

  ngOnInit() {
    for (const [key] of Object.entries(Card)) {
      this.cards.push(Card[key]);
    }
  }
}
