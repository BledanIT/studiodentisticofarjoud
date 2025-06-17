import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { MaterialsModule } from '../materials/materials.module';

@Component({
  selector: 'app-privacy',
  imports: [CommonModule, MaterialsModule],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {
  constructor(private _location: Location) {}

  backClicked() {
    this._location.back();
  }
}
