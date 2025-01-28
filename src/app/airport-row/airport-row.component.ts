import { Component, Input } from '@angular/core';
import { Airport } from '../airports-list/airport'; 


@Component({
  selector: 'app-airport-row',
  templateUrl: './airport-row.component.html',
  styleUrls: ['./airport-row.component.scss'],
})
export class AirportRowComponent {
  @Input() airport!: Airport;
}
