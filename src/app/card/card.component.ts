import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card.enum';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  isFront = false;

  backImage = 'assets/images/card_back.png';

  @Input() card: Card;

  image(): string {
    return this.isFront ? this.card : this.backImage;
  }

  constructor() { }

  ngOnInit() {
  }

  reverse() {
    this.isFront = !this.isFront;
  }
}
