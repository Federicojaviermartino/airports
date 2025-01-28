// src/app/airport-detail/airport-detail.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
export class AirportDetailComponent implements OnInit, OnDestroy {
  airportDetail?: AirportDetail;
  loading = true;
  error = '';
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private airportsService: AirportsListService
  ) {}

  ngOnInit(): void {
    this.loadAirportDetails();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadAirportDetails(): void {
    const airportKey = this.route.snapshot.paramMap.get('key');
    if (!airportKey) {
      this.error = 'No airport key provided';
      this.loading = false;
      return;
    }

    this.airportsService.getAirport(airportKey)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
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