import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailSendingService } from 'src/app/service/email-sending.service';

@Component({
  selector: 'app-faqs-user',
  templateUrl: './faqs-user.component.html',
  styleUrls: ['./faqs-user.component.css']
})
export class FaqsUserComponent implements OnInit {

  faqForm: FormGroup;
  message: string = null;
  errorMessage: string = null;

  constructor(private sendEmail: EmailSendingService) {}

  ngOnInit(){
    this.faqForm = new FormGroup(
      {
        "name": new FormControl(null, [Validators.required]),
        "email": new FormControl(null, [Validators.required, Validators.email]),
        "message": new FormControl(null, [Validators.required])
      }
    );
  }

  onCancel()
  {
    this.faqForm.reset();
  }

  onSubmit()
  {
    this.sendEmail.sendEmail(this.faqForm)
    .subscribe(response => {
        this.message = "Message Sent Successfully";
        this.faqForm.reset();
      }, error => 
      {
        this.errorMessage = "Email was not sent";
      }
    );
  }
}
