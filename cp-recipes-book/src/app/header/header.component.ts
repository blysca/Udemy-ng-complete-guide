import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() featureSelected = new EventEmitter<string>();
  activeItem: string;
  
  
  constructor() {
  }
  
  ngOnInit() {
    this.activeItem = 'recipes';
    this.featureSelected.emit(this.activeItem);
  }
  
  onSelect(feature: string) {
    this.activeItem = feature;
    this.featureSelected.emit(this.activeItem);
  }
}
