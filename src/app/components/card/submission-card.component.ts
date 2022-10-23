import { Component, Input } from "@angular/core";
import { Submission } from "../../interfaces/card.interface";

@Component({
  selector: "app-submission-card",
  templateUrl: "./submission-card.component.html",
  styleUrls: ["./submission-card.component.scss"],
})
export class SubmissionCardComponent {
  @Input() submission!: Submission;

  constructor() {}
}
