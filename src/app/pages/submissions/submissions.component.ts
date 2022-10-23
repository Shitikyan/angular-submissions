import { Component } from "@angular/core";
import {
  faFileArrowDown,
  faMagnifyingGlass,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { DropdownOption } from "../../interfaces/card.interface";
import { submissions } from "../../mock-data/submissions";

interface SubmissionsFilter {
  from: string | undefined;
  status: string | undefined;
}

@Component({
  selector: "app-submissions",
  templateUrl: "./submissions.component.html",
  styleUrls: ["./submissions.component.scss"],
})
export class SubmissionsComponent {
  faFileArrowDown = faFileArrowDown;
  faMagnifyingGlass = faMagnifyingGlass;
  faCalendarDays = faCalendarDays;
  nowDate = new Date().toLocaleDateString();
  view = "Map";

  fromDropdownOptions = [
    { id: "from1", value: "from1" },
    { id: "from2", value: "from2" },
    { id: "from3", value: "from3" },
  ];

  statusDropdownOptions = [
    { id: "complete", value: "complete" },
    { id: "incomplete", value: "incomplete" },
    { id: "all", value: "all" },
  ];

  submissionsFilter: SubmissionsFilter = {
    from: undefined,
    status: undefined,
  };

  get selectedCards() {
    return submissions.filter((sub) => {
      let fromCheck = true;
      let statusCheck = true;

      if (this.submissionsFilter.from) {
        fromCheck = sub.from == this.submissionsFilter.from;
      }
      if (this.submissionsFilter.status) {
        statusCheck = sub.status == this.submissionsFilter.status;
      }

      return fromCheck && statusCheck;
    });
  }

  constructor() {}

  selectFrom(from: DropdownOption) {
    this.submissionsFilter = { ...this.submissionsFilter, from: from.id };
  }

  selectStatus(status: DropdownOption) {
    this.submissionsFilter = { ...this.submissionsFilter, status: status.id };
  }
}
