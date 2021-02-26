import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UserDataService } from 'src/app/service/user-data.service';
import { UserWriteData } from 'src/app/service/user-write-data.service';

@Component({
  selector: 'app-my-account-user',
  templateUrl: './my-account-user.component.html',
  styleUrls: ['./my-account-user.component.css']
})
export class MyAccountUserComponent implements OnInit{

  title = 'appBootstrap';
  
  public isCollapsed = false;
  constructor(private userDataService: UserDataService, private userWriteService: UserWriteData ,private authService: AuthenticationService, private router: Router) {
    
   }


  ngOnInit()
  {
  }

  onLogOut()
  {
    this.authService.logout();
  }
}
