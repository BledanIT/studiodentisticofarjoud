import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../materials/materials.module';
import { LocationInfo, locations } from '../shared/models/locations';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, MaterialsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  locations : LocationInfo[] = locations;
}
