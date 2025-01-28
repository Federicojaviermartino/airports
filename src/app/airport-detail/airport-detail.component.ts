import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AirportsListService } from '../airports-list/airports-list.service';

@Component({
  selector: 'app-airport-detail',
  templateUrl: './airport-detail.component.html',
  styleUrls: ['./airport-detail.component.scss'],
})
export class AirportDetailComponent implements OnInit {
  airportDetail: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const airportKey = this.route.snapshot.paramMap.get('key');
    this.getAirportDetail(airportKey);
  }

  getAirportDetail(key: string | null): void {
    if (!key) return;
    this.http
      .post('/airport', { key }, { headers: { securityKey: 'myKey' } })
      .subscribe(
        (data) => (this.airportDetail = data),
        (error) => console.error('Error fetching airport details:', error)
      );
  }
}
