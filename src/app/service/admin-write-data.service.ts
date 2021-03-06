import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AdminData } from "../models/admin-data-model";
import { AdminDataServices } from "./admin-data.service";
import { AuthenticationService } from "./authentication.service";

@Injectable({
    providedIn: 'root'
})
export class AdminWriteData
{
    admins = {};
    date = {};
    constructor(private http: HttpClient, private router: Router, private authService: AuthenticationService, private adminService: AdminDataServices){}

    logAdminEntry(adminUID: string, date: string)
    {   
     this.date[adminUID] = date;     
     return this.http.patch('https://blaze-athletics-firebase-default-rtdb.firebaseio.com/adminLog.json', this.date);
    }

    deleteAdmin(UID: string)
    {
     return this.http.delete('https://blaze-athletics-firebase-default-rtdb.firebaseio.com/admins/'+UID+'.json');
    }

    addAdmin(adminUID: string)
    { 
     this.admins[adminUID] = true;   
     return this.http.patch('https://blaze-athletics-firebase-default-rtdb.firebaseio.com/admins.json', this.admins);
    }

    putAdminData()
    {
      const adminData = this.adminService.getAdminData();  
      this.http.put('https://blaze-athletics-firebase-default-rtdb.firebaseio.com/adminData.json', adminData).subscribe();  
    }

    getAdmins()
    {
      this.http.get<AdminData[]>('https://blaze-athletics-firebase-default-rtdb.firebaseio.com/adminData.json').subscribe(adminData => {
          this.adminService.setAdminData(adminData);
      });
    } 
}