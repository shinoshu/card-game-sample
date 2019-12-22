import { Component, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  imagePaths: string[] = [];

  constructor() { }

  ngOnInit() {
    for (let [key, value] of Object.entries(Card)) {
      this.imagePaths.push(value);
    }
  }
}
