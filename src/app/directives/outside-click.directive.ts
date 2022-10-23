import {
  Output,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
} from "@angular/core";

@Directive({
  selector: "[outsideClick]",
})
export class OutsideClickDirective {
  constructor(private _elementRef: ElementRef) {}

  @Output()
  public outsideClick = new EventEmitter<MouseEvent>();

  @HostListener("document:click", ["$event", "$event.target"])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }

    const clickedInside =
      this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.outsideClick.emit(event);
    }
  }
}
