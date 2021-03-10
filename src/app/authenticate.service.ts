import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blogentry } from './blogentry';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Router, CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(
    private http: HttpClient,
    public router: Router
  ) { }

  login(username, password) {
    return this.http.post<any>('http://localhost:4444/login', { username: username, password: password })
  }

  check() {
    return this.http.get<any>('http://localhost:4444/auth', this.httpOptions)
  }

  logout() {
    localStorage.removeItem('token')
  }

  addUser(username: string, password: String) {
    return this.http.post<Blogentry>('http://localhost:4444/register', { username: username, password: password })
  }

  httpOptions = {
    headers: new HttpHeaders().append("Authorization", "Bearer " + localStorage.token),
  };
}