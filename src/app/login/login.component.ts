import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AuthenticateService } from '../authenticate.service';
import { ContentService } from '../content.service';
import { ReadVarExpr } from '@angular/compiler';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private contentService: ContentService,
    private authenticateservice: AuthenticateService,
    private httpModule: HttpClientModule,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      passwort: ['', Validators.required],
    });
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    const val = this.loginForm.value;
    this.authenticateservice.login(val.username, val.passwort).subscribe(
      res => {
        console.log("login");
        if(res.success){
          localStorage.setItem('token', res.token)
          console.log(res.success);
          window.location.reload();
        }
        else {
          console.log(res.success);
        }
      }
    );
  }    
  
  onRegister(): void {
    const val = this.loginForm.value;
    this.authenticateservice.addUser(val.username, val.passwort).subscribe(
      () => {
        console.log("register");
      }
    );
  } 
}
