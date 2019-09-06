import {Component, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {ICounterOfActions} from './interfaces/counter-of-actions';
import {CounterService} from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit{
  actions: ICounterOfActions;
  
  
  constructor(
    private userService: UserService,
    private counterService: CounterService
  ) {}
  
  ngOnInit(): void {
    this.actions = this.counterService.counters;
  }
}
