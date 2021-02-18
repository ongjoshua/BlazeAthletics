import { Component, Injectable, OnInit } from '@angular/core';
import { AdminAuthServicer } from './service/admin-auth.service';
import { AuthenticationService } from './service/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BlazeAthletics';

  constructor(private authService: AuthenticationService,
    private adminAuthService: AdminAuthServicer){}

  ngOnInit()
  {
    this.authService.autoLogin();
    this.adminAuthService.autoLogin();
  }
}
