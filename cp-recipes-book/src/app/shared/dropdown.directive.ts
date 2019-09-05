import {Directive, ElementRef, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{
  @HostBinding('class.show')  isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = true;
    this.el.nativeElement.querySelector('.dropdown-menu').classList.add('show');
  }
  
  @HostListener('document:click', ['$event.target']) close (targetElement) {
    let inside: boolean = this.el.nativeElement.contains(targetElement);
    if(!inside) {
      this.isOpen = false;
      this.el.nativeElement.querySelector('.dropdown-menu').classList.remove('show')
    }
  }
  
  constructor(private el: ElementRef) { }
  
  ngOnInit(): void {
  }
}
