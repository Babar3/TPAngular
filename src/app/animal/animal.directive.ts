import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'a[mailTo]'
})
export class AnimalDirective {

  @Input('mailTo') mail : string;

  constructor(private el : ElementRef<HTMLAnchorElement>) { }


  @HostListener('click') onClick() {
    this.el.nativeElement.href = `mailto:${this.mail}`;
    console.log(this.mail);
  }
}
