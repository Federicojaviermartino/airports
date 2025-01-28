import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username.trim()) {
      localStorage.setItem('securityKey', 'dummy_security_key');
      localStorage.setItem('username', this.username);
      this.router.navigate(['/airports']);
    } else {
      alert('Please enter a valid username.');
    }
  }
}

