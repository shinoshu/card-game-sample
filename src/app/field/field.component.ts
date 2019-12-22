import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card.enum';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  @Input() cards: Card[] = [];

  constructor() { }

  ngOnInit() {
  }
}
