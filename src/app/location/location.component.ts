import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from "@angular/platform-browser";
import { GoogleMapsModule } from '@angular/google-maps';
import { LocationInfo, locations } from '../shared/models/locations';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-location',
  imports: [GoogleMapsModule, CommonModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent implements OnInit{

  constructor(private sanitizer: DomSanitizer, private dbService : DatabaseService) {}

  @Input() locID : number = 0;
  zoom = 17;
  mapOptions: google.maps.MapOptions = {
    //mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    maxZoom: 24,
    minZoom: 8,
    zoom: 17
  };

  locations : LocationInfo[] = locations;
  locations2! : any[];
  
  transformLink(link : string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }

  ngOnInit(): void {
    this.dbService.getDatabase('locations').subscribe((res) => this.locations2 = res);
  }
}
