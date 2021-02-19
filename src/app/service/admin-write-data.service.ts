import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "./authentication.service";

@Injectable({
    providedIn: 'root'
})
export class AdminWriteData
{
    adminData = {};
    loggingData = {};
    constructor(private http: HttpClient, private router: Router, private authService: AuthenticationService){}

    logAdminEntry(adminUID: string, date: string)
    {
     this.loggingData[adminUID] = "Logged in at: " + date   
     return this.http.patch('https://blaze-athletics-firebase-default-rtdb.firebaseio.com/adminLog.json', this.loggingData);
    }

    addAdmin(adminUID: string)
    {
    this.adminData[adminUID]  = true; 
     return this.http.patch('https://blaze-athletics-firebase-default-rtdb.firebaseio.com/admins.json', this.adminData);
    }
}