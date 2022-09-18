import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAttributeDirective]',
})
export class AttributeDirective {
  constructor(private ele: ElementRef) {
    ele.nativeElement.style.textTransform = 'uppercase';
    ele.nativeElement.style.color = 'red';
    ele.nativeElement.style.background = 'lightgray';
  }
}
