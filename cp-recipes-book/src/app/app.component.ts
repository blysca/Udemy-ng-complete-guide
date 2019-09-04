import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadedFeature: string;
  onNavigate(feature: string){
    console.log('*** onNavigate ', feature);
    this.loadedFeature = feature;
  }
}
