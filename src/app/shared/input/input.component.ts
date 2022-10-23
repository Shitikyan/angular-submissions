import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent {
  @Input() icon: IconDefinition | undefined;
  @Input() placeholder: string | undefined;
  @Input() name: string | undefined;
  @Input() type: string = "text";
  @Input() datepicker: any;

  @Output() inputClick = new EventEmitter();
  @Output() changeValue = new EventEmitter();

  constructor() {}
}
