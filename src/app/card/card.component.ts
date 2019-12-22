import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card.enum';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  isFront = false;

  @Input() card: Card;

  image(): string {
    return this.isFront ? this.card : Card.Back;
  }

  constructor() { }

  ngOnInit() {
  }

  reverse() {
    this.isFront = !this.isFront;
  }
}
