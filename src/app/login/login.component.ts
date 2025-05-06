import { Component, AfterViewInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements AfterViewInit {
  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    const form = document.querySelector('form');
    form?.addEventListener('submit', (event) => {
      event.preventDefault();

      const emailInput = (document.querySelector('input[type="email"]') as HTMLInputElement)?.value;
      const passwordInput = (document.querySelector('input[type="password"]') as HTMLInputElement)?.value;

      if (emailInput === 'user@gmail.com' && passwordInput === 'user121720') {
        this.router.navigate(['/homepage']);
      } else {
        alert('Invalid credentials. Please try again.');
      }
    });
  }

  signup() {
    this.router.navigate(['/signup']);
  }
}
