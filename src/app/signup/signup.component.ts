import { Component } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [RouterModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor (private router: Router){}
  login(){
    this.router.navigate(['/login']);
  }
}
