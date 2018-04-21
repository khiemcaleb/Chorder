import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputSelectAll]'
})
export class InputSelectAllDirective implements OnInit {
  
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.focus();
  }

}
