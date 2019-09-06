import { Injectable } from '@angular/core';
import {ICounterOfActions} from '../interfaces/counter-of-actions';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counters: ICounterOfActions = {
    activeToInactive: 0,
    inactiveToActive: 0,
  };
  constructor() { }
  
  onAddedToActive(): void {
    this.counters.inactiveToActive++
  }
  
  onAddedToInactive(): void {
    this.counters.activeToInactive++
  }
}
