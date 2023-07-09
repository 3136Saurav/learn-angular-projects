import { Directive, Input, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.color') color: String = 'black'
  @Input() defaultBackgroundColor: string = 'transparent'
  @Input() highlightBackgroundColor: string = 'skin'


  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.defaultBackgroundColor)
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white')
  }

  @HostListener('mouseenter', ['$event']) mouseOver(eventData: Event) {
    console.log(eventData)
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.highlightBackgroundColor);
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    this.color = 'white';
  }
  
  @HostListener('mouseleave', ['$event']) mouseLeave(eventData: Event) {
    console.log(eventData)
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.defaultBackgroundColor);
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    this.color = 'red'
  }
}
