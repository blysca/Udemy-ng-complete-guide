import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChange,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name:string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) contentParagraph:ElementRef;
  
  constructor() {
    console.log('*** constructor called! ');
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('*** ngOnChanges called! ');
    console.log('*** changes ', changes);
  }
  
  ngOnInit() {
    console.log('*** ngOnInit called! ');
    console.log('***@viewchild() header = ', this.header.nativeElement.textContent);
    console.log('***@contentchild() contentParagraph = ', this.contentParagraph.nativeElement.textContent);
  }
  
  ngDoCheck(): void {
    console.log('*** ngDoCheck called! ');
  }
  
  ngAfterContentInit(): void {
    console.log('*** ngAfterContentInit called! ');
    console.log('*** @contentchild() contentParagraph = ', this.contentParagraph.nativeElement.textContent);
  }
  
  ngAfterContentChecked(): void {
    console.log('*** AfterContentChecked called! ');
  }
  ngAfterViewInit(): void {
    console.log('*** AfterViewInit called! ');
    console.log('***@viewchild() header = ', this.header.nativeElement.textContent);
  }
  
  ngAfterViewChecked(): void {
    console.log('*** AfterViewChecked called! ');
  }

  ngOnDestroy() {
    console.log('*** ngOnDestroy called!');
  }
}
