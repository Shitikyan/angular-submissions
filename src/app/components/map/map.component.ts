import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"],
})
export class MapComponent implements AfterViewInit {
  @ViewChild("gmapContainer", { static: true }) gmap!: ElementRef;

  map!: google.maps.Map;

  firstCoordinates = new google.maps.LatLng(40.1772, 44.50349);
  secondCoordinates = new google.maps.LatLng(40.194154, 44.55189);
  mapOptions: google.maps.MapOptions = {
    center: this.firstCoordinates,
    zoom: 10,
  };

  firstMarker = new google.maps.Marker({
    position: this.firstCoordinates,
    map: this.map,
  });
  secondMarker = new google.maps.Marker({
    position: this.secondCoordinates,
    map: this.map,
  });

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.firstMarker.setMap(this.map);
    this.secondMarker.setMap(this.map);
  }

  constructor() {}
}
