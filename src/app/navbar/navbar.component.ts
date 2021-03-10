import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authenticateservice: AuthenticateService,) { }

  ngOnInit(): void {
  }

  //Logout Button
  //löscht das Token und reloaded die Seite
  onSubmit(): void {
    this.authenticateservice.logout()
    window.location.reload();
  }
}
