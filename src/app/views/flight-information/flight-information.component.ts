import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightInformationModel } from '../../models/flight-information-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flight-information',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './flight-information.component.html',
  styleUrl: './flight-information.component.css'
})
export class FlightInformationComponent {

  public flightInformation: FlightInformationModel = {
    origin: '',
    destiny: '',
    departureDate: '',
    returnDate: '',
    adults: 1,
    children: 0,
    infants: 0
  };

  public ngOnInit() {
  }

}
