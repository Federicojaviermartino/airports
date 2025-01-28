import { Component, OnInit } from '@angular/core';
import { AirportsListService } from './airports-list.service';
import { Airport } from './airport';

@Component({
    selector: 'app-airports-list',
    templateUrl: './airports-list.component.html',
    styleUrls: ['./airports-list.component.scss']
})
export class AirportsListComponent implements OnInit {
    airportsList: Airport[] = [];
    error?: string;

    constructor(private airportsListService: AirportsListService) { }

    ngOnInit(): void {
        this.airportsListService.getAllAirports().subscribe(
            (res) => {
                this.airportsList = res;
            },
            (error) => {
                this.error = error.message;
            }
        );
    }
}