import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-accounts-new-admin',
  templateUrl: './accounts-new-admin.component.html',
  styleUrls: ['./accounts-new-admin.component.css']
})
export class AccountsNewAdminComponent implements OnInit {

  addAccountForm: FormGroup;

  constructor() { }

  ngOnInit()
  {
    this.addAccountForm = new FormGroup(
      {
        "name": new FormControl(null, [Validators.required]),
        "email": new FormControl(null, [Validators.email, Validators.required]),
        "contactNumber": new FormControl(null, [Validators.email]),
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

  }
}
