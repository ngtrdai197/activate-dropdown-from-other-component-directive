import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCloseMainMenu]',
})
export class CloseMainMenuDirective {

  constructor(private readonly elementRef: ElementRef) { }

  @HostListener('document:click', ['$event'])
  clickOutside() {
    const include = document.getElementById('openMenu').contains(event.target as any)
    if (!this.elementRef.nativeElement.contains(event.target) && !include) {
      console.log(`outside ...`)
      document.getElementById('dropdownMenu').classList.remove('show')
    }
  }

}
