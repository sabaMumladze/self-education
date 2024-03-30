import { Component } from '@angular/core';
import { OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { DeliverService } from '../deliver.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrl: './gmap.component.css'
})
export class GMapComponent {
  constructor(private deliver: DeliverService, private router: Router) { }
  ngOnInit(): void { }
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 41.6531,
    lng: 44.8129
  }
  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 8;
  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
    if (event.latLng != null) this.center = (event.latLng.toJSON());
    if (event.latLng != null) this.display = event.latLng.toJSON();
    let lat = this.display.lat
    let lng = this.display.lng
    this.deliver.sendlocation(lat, lng)

  }
  openInfoWindow(marker: MapMarker) {
    if (this.infoWindow != undefined) this.infoWindow.open(marker);

  }

  show() {
    if (this.display === undefined) {
      Swal.fire({
        title: "აირჩიეთ ლოკაცია",
        text: "You did't choose the locaion",
        icon: "warning",
        confirmButtonText: "okay"
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "იხილეთ ლოცაციის ამინდი",
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(()=> {this.router.navigate(['/home'])},1555)
    
    }

  }

}
