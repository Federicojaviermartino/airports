import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportDetailComponent } from './airport-detail.component';

describe('AirportDetailComponent', () => {
  let component: AirportDetailComponent;
  let fixture: ComponentFixture<AirportDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirportDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
