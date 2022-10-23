import { Component, EventEmitter, Input, Output } from "@angular/core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { DropdownOption } from "src/app/interfaces/card.interface";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"],
})
export class DropdownComponent {
  isOpen = false;
  selectedOptionValue = "";
  faChevronDown = faChevronDown;

  @Input() options: DropdownOption[] = [];
  @Input() placeholder = "";
  @Output() optionSelect = new EventEmitter();

  constructor() {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: DropdownOption) {
    this.selectedOptionValue = option.value;
    this.toggleDropdown();
    this.optionSelect.emit(option);
  }
}
