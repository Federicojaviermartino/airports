import { Component, OnInit, OnDestroy } from '@angular/core';
import { AirportsListService } from './airports-list.service';
import { Airport } from './airport';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-airports-list',
    templateUrl: './airports-list.component.html',
    styleUrls: ['./airports-list.component.scss']
})
export class AirportsListComponent implements OnInit, OnDestroy {
    airportsList: Airport[] = [];
    error = '';
    loading = true;
    private destroy$ = new Subject<void>();

    constructor(private airportsListService: AirportsListService) { }

    ngOnInit(): void {
        this.loadAirports();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    private loadAirports(): void {
        this.airportsListService.getAllAirports()
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: (airports) => {
                    this.airportsList = airports;
                    this.loading = false;
                },
                error: (error) => {
                    this.error = error.message;
                    this.loading = false;
                }
            });
    }
}