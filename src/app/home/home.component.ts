import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MaterialsModule } from '../materials/materials.module';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, MaterialsModule, TitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{

  constructor() {}

  public fullMenu : boolean = false;

  get mobileSectorClass() {
    return 'pres-sector d-flex flex-column gap-5';
  }

  get desktopSectorClass() {
    return 'pres-sector d-flex flex-row gap-5';
  }
}
