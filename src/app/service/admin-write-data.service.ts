import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "./authentication.service";

@Injectable({
    providedIn: 'root'
})
export class AdminWriteData
{
    constructor(private http: HttpClient, private router: Router, private authService: AuthenticationService){}


    date: string;

    logAdminEntry(postData:{date: string})
    {
     return this.http.post('https://blaze-athletics-firebase-default-rtdb.firebaseio.com/admins.json', 'null');
    }
}