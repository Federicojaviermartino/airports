import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportRowComponent } from './airport-row.component';

describe('AirportRowComponent', () => {
  let component: AirportRowComponent;
  let fixture: ComponentFixture<AirportRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirportRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
