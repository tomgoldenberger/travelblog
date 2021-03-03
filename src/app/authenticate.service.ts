import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blogentry } from './blogentry';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) { }

  lfdsogin(){
    window.alert("yeet");
    this.http.get('http://localhost:8000/login')
  }
  login() {
    return this.http.get('http://localhost:8000').pipe(
      tap((_) => console.log('info')),
      
    );
  
  }

}
