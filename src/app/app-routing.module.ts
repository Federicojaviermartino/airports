import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirportsListComponent } from './airports-list/airports-list.component';
import { LoginComponent } from './login/login.component';
import { AirportDetailComponent } from './airport-detail/airport-detail.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'airports',
        component: AirportsListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'airports/airport/:key',
        component: AirportDetailComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }