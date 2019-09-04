import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showPass = true;
  logBtnEvents = [];
  
  toggleDetails(event: Event){
    this.showPass = !this.showPass;
    this.logBtnEvents.push(event);
  }
}
