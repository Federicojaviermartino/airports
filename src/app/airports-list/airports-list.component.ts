// src/app/airports-list/airports-list.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Airport } from './airport';
import { AirportsListService } from './airports-list.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-airports-list',
  templateUrl: './airports-list.component.html',
  styleUrls: ['./airports-list.component.scss']
})
export class AirportsListComponent implements OnInit, OnDestroy {
  airports$: Observable<Airport[]>;
  username$ = this.authService.currentUser$;
  error = '';
  loading = true;
  private destroy$ = new Subject<void>();

  constructor(
    private airportsService: AirportsListService,
    private authService: AuthService,
    private router: Router
  ) {
    this.airports$ = this.airportsService.getAllAirports();
  }

  ngOnInit(): void {
    this.loadAirports();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadAirports(): void {
    this.loading = true;
    this.error = '';
    this.airports$ = this.airportsService.getAllAirports();
  }

  trackByFn(index: number, airport: Airport): string {
    return airport.key;
  }

  onAirportSelected(airport: Airport): void {
    this.router.navigate(['/airports/airport', airport.key]);
  }

  logout(): void {
    this.authService.logout();
  }
}