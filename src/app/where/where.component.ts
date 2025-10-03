import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../title/title.component';
import { LocationComponent } from '../location/location.component';
import { LocationInfo, locations } from '../shared/models/locations';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-where',
  imports: [CommonModule, TitleComponent, LocationComponent],
  templateUrl: './where.component.html',
  styleUrl: './where.component.scss'
})
export class WhereComponent implements OnInit{

  constructor(private dbService : DatabaseService) {};

  locations : LocationInfo[] = locations;
  locations2! : any[];

  ngOnInit(): void {
    this.dbService.getDatabase('locationFake').subscribe((res) => this.locations2 = res);
  }
}
