import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AirportsListService } from '../airports-list/airports-list.service';
import { Airport } from '../airports-list/airport';

interface AirportDetail extends Airport {
  owner?: string;
  build?: string;
  image?: string;
  description?: string;
}

@Component({
  selector: 'app-airport-detail',
  templateUrl: './airport-detail.component.html',
  styleUrls: ['./airport-detail.component.scss']
})
export class AirportDetailComponent implements OnInit {
  airportDetail?: AirportDetail;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private airportsService: AirportsListService
  ) {}

  ngOnInit(): void {
    this.loadAirportDetails();
  }

  private loadAirportDetails(): void {
    const airportKey = this.route.snapshot.paramMap.get('key');
    if (!airportKey) {
      this.error = 'No airport key provided';
      this.loading = false;
      return;
    }

    this.airportsService.getAirport(airportKey).subscribe({
      next: (data) => {
        this.airportDetail = data;
        this.loading = false;
      },
      error: (error) => {
        this.error = error.message;
        this.loading = false;
      }
    });
  }
}