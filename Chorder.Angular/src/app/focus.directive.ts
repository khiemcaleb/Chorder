import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit {

  @Input("appFocus") isFocus: boolean;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    if (this.isFocus)
      this.elementRef.nativeElement.focus();
  }


}
