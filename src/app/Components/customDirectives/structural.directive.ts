import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructural]',
})
export class StructuralDirective {
  constructor(
    private tempRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appStructural(condition: boolean) {
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.tempRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
