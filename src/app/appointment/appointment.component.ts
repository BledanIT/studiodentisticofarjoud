import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MaterialsModule } from '../materials/materials.module';
import { TitleComponent } from '../title/title.component';
import { LocationInfo, locations } from '../shared/models/locations';
import { DentistInfo, dentists } from '../shared/models/dentists';
import { InterventionInfo, interventions } from '../shared/models/interventions';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MaterialsModule, TitleComponent],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent {
  
  appointmentFormFirst = new FormGroup({
    dentist: new FormControl(''),
    location: new FormControl(''),
    intervention: new FormControl('', [Validators.required]),
  });

  appointmentFormSecond = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    isForChild: new FormControl(''),
    childName: new FormControl(''),
    childAge: new FormControl('', [Validators.min(1), Validators.max(17)]),
  });

  appointmentFormThird = new FormGroup({
    date: new FormControl('', [Validators.required]),
    startTime: new FormControl('', [Validators.required]),
  });

  appointmentFormFourth = new FormGroup({
    privacyCheck: new FormControl(''),
  });
  
  time? : Date;
  locations : LocationInfo[] = locations;
  dentists : DentistInfo[] = dentists;
  interventions : InterventionInfo[] = interventions;
}
