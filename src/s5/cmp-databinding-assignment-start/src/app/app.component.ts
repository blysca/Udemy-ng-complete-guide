import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inerval = []
  
  onIntervalFired(event: number){
    console.log('*** event = ', event);
    this.inerval.push(event)
  }
}
