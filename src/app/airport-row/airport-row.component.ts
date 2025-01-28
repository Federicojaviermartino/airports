// src/app/airport-row/airport-row.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Airport } from '../airports-list/airport';

@Component({
  selector: 'app-airport-row',
  templateUrl: './airport-row.component.html',
  styleUrls: ['./airport-row.component.scss']
})
export class AirportRowComponent {
  @Input() airport!: Airport;
  @Output() airportSelected = new EventEmitter<Airport>();

  onSelect(): void {
    this.airportSelected.emit(this.airport);
  }
}