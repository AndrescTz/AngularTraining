import { Directive, ElementRef, Input, OnInit, DoCheck, Renderer2 } from '@angular/core';
import { Constants } from '../services/contants';

@Directive({
  selector: '[messageTypeBox]'
})
export class MessageTypeBoxDirective implements OnInit, DoCheck{
  @Input() messageTypeBox: string;
  @Input() showMessage: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
  }
  ngDoCheck() {
    this.assignMessageType(this.messageTypeBox);

    if (!this.showMessage) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    }else {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
    }
  }
  private assignMessageType(messageTypeBox){
    switch (messageTypeBox) {
      case Constants.MSG_TYPE_ERROR:
        this.renderer.addClass(this.el.nativeElement, 'alert-danger');
        break;
      case Constants.MSG_TYPE_WARNING:
        this.renderer.addClass(this.el.nativeElement, 'alert-warning');
        break;
      case Constants.MSG_TYPE_SUCCESS:
        this.renderer.addClass(this.el.nativeElement, 'alert-success');
        break;
      default:
        break;
    }
  }
}