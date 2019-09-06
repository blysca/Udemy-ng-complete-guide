import { Component, EventEmitter, Input, Output } from '@angular/core';
import {UserService} from '../services/user.service';
import {CounterService} from '../services/counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  
  constructor(
    private userService: UserService,
    private counterService: CounterService
  ) {}

  onSetToInactive(id: number) {
    this.userService.onSettedToInactive(id);
    this.counterService.onAddedToInactive();
  }
}
