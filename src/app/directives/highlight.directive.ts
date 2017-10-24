import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({ selector: '[highlight]' })

export class HighlightDirective implements OnInit {
    constructor(private elRef: ElementRef) {}
    ngOnInit(){}
}