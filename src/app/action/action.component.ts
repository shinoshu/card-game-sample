import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  @Output() action = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  stand() {
    this.action.emit('stand');
  }

  hit() {
    this.action.emit('hit');
  }
}
