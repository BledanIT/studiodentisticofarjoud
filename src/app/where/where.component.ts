import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../title/title.component';
import { LocationComponent } from '../location/location.component';
import { LocationInfo, locations } from '../shared/models/locations';

@Component({
  selector: 'app-where',
  imports: [CommonModule, TitleComponent, LocationComponent],
  templateUrl: './where.component.html',
  styleUrl: './where.component.scss'
})
export class WhereComponent {
  locations : LocationInfo[] = locations;
}
