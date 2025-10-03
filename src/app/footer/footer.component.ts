import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../materials/materials.module';
import { DatabaseService } from '../database.service';
import { LocationInfo, locations } from '../shared/models/locations';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, MaterialsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  constructor(private dbService : DatabaseService) {};

  locations : LocationInfo[] = locations;
  locations2! : any[];

  ngOnInit(): void {
    this.dbService.getDatabase('locationFake').subscribe((res) => this.locations2 = res);
  }
}
