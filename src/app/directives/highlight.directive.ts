import {Directive, ElementRef, OnInit, Renderer2, Input} from "@angular/core";

@Directive({
  selector: '[highlight]'
})

export class HighlightDirective implements OnInit{
  constructor(private elRef: ElementRef, private renderer: Renderer2){}
  @Input('highlight') plan: string = '';
  ngOnInit(){
    if(this.plan === 'pay'){
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
      this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
    }
  }
}
