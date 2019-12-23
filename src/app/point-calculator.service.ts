import { Injectable } from '@angular/core';
import { Card } from './card.enum';

@Injectable({
  providedIn: 'root'
})
export class PointCalculatorService {

  constructor() { }

  calculate(cards: Card[]): number {
    return 0;
  }
}
