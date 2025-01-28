import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material Imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Components
import { AppComponent } from './app.component';
import { AirportsListComponent } from './airports-list/airports-list.component';
import { AirportRowComponent } from './airport-row/airport-row.component';
import { LoginComponent } from './login/login.component';
import { AirportDetailComponent } from './airport-detail/airport-detail.component';
import { AppRoutingModule } from './app-routing.module';

// Services
import { AuthService } from './auth/auth.service';
import { AirportsListService } from './airports-list/airports-list.service';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    AirportsListComponent,
    AirportRowComponent,
    LoginComponent,
    AirportDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [
    AuthService,
    AirportsListService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }