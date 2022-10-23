import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { GoogleMapsModule } from "@angular/google-maps";
import { MatSliderModule } from "@angular/material/slider";
import { MatInputModule } from "@angular/material/input";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { SubmissionCardComponent } from "./components/card/submission-card.component";
import { HeaderComponent } from "./components/header/header.component";
import { MapComponent } from "./components/map/map.component";
import { InputComponent } from "./shared/input/input.component";
import { DropdownComponent } from "./shared/dropdown/dropdown.component";
import { OutsideClickDirective } from "./directives/outside-click.directive";
import { SubmissionsComponent } from "./pages/submissions/submissions.component";

@NgModule({
  declarations: [
    MapComponent,
    AppComponent,
    InputComponent,
    HeaderComponent,
    DropdownComponent,
    SubmissionsComponent,
    OutsideClickDirective,
    SubmissionCardComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatSliderModule,
    GoogleMapsModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
