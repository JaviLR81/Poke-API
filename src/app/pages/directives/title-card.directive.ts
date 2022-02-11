import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTitleCard]'
})
export class TitleCardDirective implements OnInit {

  @Input() size: string = '16px';
  elemento: ElementRef<HTMLTitleElement>;

  constructor(private el: ElementRef<HTMLTitleElement>) {
    this.elemento = el;
  }

  ngOnInit(): void {
    this.setSize();
  }

  setSize(): void {
    this.elemento.nativeElement.style.fontSize = this.size;
  }



}
