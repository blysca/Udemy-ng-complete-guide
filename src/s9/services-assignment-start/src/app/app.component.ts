import {Component, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {ICounterOfActions} from './interfaces/counter-of-actions';
import {CounterService} from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  actions: ICounterOfActions;
  activeUsers: string[];
  inactiveUsers: string[];
  
  constructor(
    private userService: UserService,
    private counterService: CounterService
  ) {}
  
  ngOnInit(): void {
    this.actions = this.counterService.counters;
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }
}
