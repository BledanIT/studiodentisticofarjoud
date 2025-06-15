import { Component } from '@angular/core';
import { MaterialsModule } from '../materials/materials.module';
import { TitleComponent } from '../title/title.component';
import { InterventionInfo, interventions } from '../shared/models/interventions';

@Component({
  selector: 'app-pricing',
  imports: [MaterialsModule, TitleComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {

  EuroCurrency = new Intl.NumberFormat('en-IT', {
    style: 'currency',
    currency: 'EUR',
  });

  displayedColumns: string[] = ['name', 'duration', 'price'];
  pricesArray = interventions;
}
