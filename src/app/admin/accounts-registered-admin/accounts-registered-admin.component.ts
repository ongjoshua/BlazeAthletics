import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminData } from 'src/app/models/admin-data-model';
import { AdminAuthService } from 'src/app/service/admin-auth.service';
import { AdminDataServices } from 'src/app/service/admin-data.service';
import { AdminWriteData } from 'src/app/service/admin-write-data.service';

@Component({
  selector: 'app-accounts-registered-admin',
  templateUrl: './accounts-registered-admin.component.html',
  styleUrls: ['./accounts-registered-admin.component.css']
})
export class AccountsRegisteredAdminComponent implements OnInit, OnDestroy {

  adminData: AdminData[];
  adminSubscription: Subscription;
  password: string = null;

  constructor(private adminWrite: AdminWriteData, private adminService: AdminDataServices, private adminAuthService: AdminAuthService) { }

  ngOnInit(){
    this.adminWrite.getAdmins();

   this.adminSubscription = this.adminService.adminDataChanged.subscribe(
      (adminData: AdminData[]) => 
      {
        this.adminData = adminData;
      }
    );
    this.adminData = this.adminService.getAdminData();
  }
  
  onClick(place: number)
  {
    console.log(place)
  }

  onDelete(place: number)
  {

    this.adminAuthService.authenticate(this.adminData[place].email, this.password).subscribe(response =>
      {
        this.adminAuthService.adminSignOut(response.idToken).subscribe();
      }
    );

    this.adminWrite.deleteAdmin(this.adminData[place].UID).subscribe();
    this.adminService.deleteAdmin(place);
    this.adminWrite.putAdminData();
  }

  onInput(password: string)
  {
    this.password = password;
  }

  addIndex(index: number)
  { 
    this.adminService.indexNumber = index;
  }

  ngOnDestroy()
  {
    if(this.adminSubscription != null)
    {
      this.adminSubscription.unsubscribe();
    }
  }
}
