import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminAuthService } from 'src/app/service/admin-auth.service';
import { AdminWriteData } from 'src/app/service/admin-write-data.service';

@Component({
  selector: 'app-accounts-new-admin',
  templateUrl: './accounts-new-admin.component.html',
  styleUrls: ['./accounts-new-admin.component.css']
})
export class AccountsNewAdminComponent implements OnInit {

  addAccountForm: FormGroup;
  errorMessage: string = null;
  message: string = null;

  constructor(private adminAuth: AdminAuthService, private adminWrite: AdminWriteData) { }

  ngOnInit()
  {
    this.addAccountForm = new FormGroup(
      {
        "name": new FormControl(null, [Validators.required]),
        "email": new FormControl(null, [Validators.email, Validators.required]),
        "contactNumber": new FormControl(null, [Validators.required]),
        "address": new FormControl(null, [Validators.required]),
        "password": new FormControl(null, [Validators.required, Validators.minLength(6)])
      }
    );
  }

  onClear()
  {
    this.addAccountForm.reset();
  }

  onSubmit()
  {
    this.adminAuth.adminSignUp(this.addAccountForm.value.email, this.addAccountForm.value.password).subscribe(responseData => 
      {
        console.log(responseData.localId);
        this.adminWrite.addAdmin(responseData.localId).subscribe();
        this.message = "Account added successfully!";
      }, error => 
      {
        this.errorMessage = error;
      }
    );
  }
}
