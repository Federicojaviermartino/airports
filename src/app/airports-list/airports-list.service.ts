import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Airport } from './airport';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AirportsListService {
    constructor(private http: HttpClient) { }

    getAllAirports(): Observable<Airport[]> {
        const headers = new HttpHeaders().set('securityKey', localStorage.getItem('securityKey') || '');
        return this.http.get<Airport[]>('/allAirports', { headers });
    }

    getAirport(airportKey: string): Observable<Airport> {
        const headers = new HttpHeaders().set('securityKey', localStorage.getItem('securityKey') || '');
        return this.http.post<Airport>('/airport', { key: airportKey }, { headers });
    }
}