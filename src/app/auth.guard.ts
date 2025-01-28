import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(): boolean {
        const securityKey = localStorage.getItem('securityKey');
        if (!securityKey) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
