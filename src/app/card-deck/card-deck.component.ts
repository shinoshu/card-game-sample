import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.scss'],
  animations: [
    trigger('inOut', [
      state('inDeck', style({
        opacity: 0.5,
        transform: 'translate(-450px, 530px)',
      })),
      state('outDeck', style({
        opacity: 1,
      })),
      transition('inDeck => outDeck', [
        animate('0.5s')
      ]),
      transition('outDeck => inDeck', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class CardDeckComponent implements OnInit {
  inDeck = true;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.inDeck = !this.inDeck;
    }, 1000);
  }
}
