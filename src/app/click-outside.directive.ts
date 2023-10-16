import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {

  @Output() clickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  handleClick(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.clickOutside.emit();
    }
  }
}
