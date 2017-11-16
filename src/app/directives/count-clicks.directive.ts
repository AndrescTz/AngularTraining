import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: 'li[count-clicks]'
})

export class CountCLicksDirective{
  clickN = 0;

  @HostBinding('style.opacity') opacity: number = .1;
  @HostListener('click', ['$event.target']) onClick(btn) {
    this.opacity += .1;
  }
}
