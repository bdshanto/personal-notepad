import { LoginVm } from './../models/login-vm';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationResponse } from '../models/authentication-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private API_URL = 'https://localhost:44302';
  constructor(
    private http: HttpClient
  ) { }

  login(login: LoginVm): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.API_URL}/api/Auth/Login`, login);
  }

}
