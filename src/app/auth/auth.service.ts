import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<string | null>(localStorage.getItem('username'));
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private router: Router) {}

  login(username: string): void {
    const securityKey = this.generateSecurityKey();
    localStorage.setItem('securityKey', securityKey);
    localStorage.setItem('username', username);
    this.currentUserSubject.next(username);
    this.router.navigate(['/airports']);
  }

  logout(): void {
    localStorage.removeItem('securityKey');
    localStorage.removeItem('username');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('securityKey');
  }

  private generateSecurityKey(): string {
    return Math.random().toString(36).substring(2);
  }
}