import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login({ username: this.username, password: this.password })
      .subscribe((res) => {
        alert('Login successful');
      });
  }

}
