import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FlightInformationModel } from '../../models/flight-information-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flight-information',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor],
  templateUrl: './flight-information.component.html',
  styleUrl: './flight-information.component.css'
})
export class FlightInformationComponent {

  public flightInformation: FlightInformationModel = {
    origin: '',
    destiny: '',
    departureDate: '',
    adults: 1,
    infants: 0,
    children: 0,
  };

  public opacityForm: string = "";
  public blockForm: boolean = false;
  public loadingBar: boolean = false;

  public adultsOptions: number[] = [];
  public childrenOptions: number[] = [];
  public infantsOptions: number[] = [];

  public ngOnInit() {
    for (let i = 1; i <= 9; i++) {
      if (i >= 2) {
        this.adultsOptions.push(i);
      }
      this.childrenOptions.push(i);
      this.infantsOptions.push(i);
    }
  }

  public SearchAction() {
    this.opacityForm = "opacity-form"
    this.blockForm = true;
    this.loadingBar = true;
    console.log(this.flightInformation)
    setTimeout(() =>{
      this.opacityForm = ""
      this.blockForm = false;
      this.loadingBar = false;
    }, 5000);
  }

}
