import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WhereComponent } from './where/where.component';
import { PricingComponent } from './pricing/pricing.component';
import { AppointmentComponent } from './appointment/appointment.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "where", component: WhereComponent},
    {path: "pricing", component: PricingComponent},
    {path: "appointment", component: AppointmentComponent},
];
