import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { EmailSuppressionService } from "./email-suppression.service";

@Component({
  selector: 'app-email-suppression',
  templateUrl: './email-suppression.component.html',
  styleUrls: ['./email-suppression.component.scss']
})

export class EmailSuppressionComponent implements OnInit {
  email = new FormControl('', Validators.email);
  constructor(private emailService: EmailSuppressionService, private router: Router) { }
  height;
  screenHeight;
  isLoading = false;
  overlay = false;
  invalid;

  ngOnInit() {
    this.reSize();
  }

  // checking the status of the email whether it is opt-in or opt-out or a new one 
  checkEmailStatus() {
    if (this.email.value == '' || this.email.value.trim().length == 0) {
      return;
    }
    console.log(this.email.value);
    this.emailService.checkPreferences(this.email.value)
      .subscribe(
        data => {
          console.log("success", data);
        },
        error => {
          console.log("errror", error)
        }
      )
  }

  // to unsubscribe the email after clicking the unsubscribe button
  submitOptout() {
    this.isLoading = true;
    this.overlay = true;
    if (this.email.value == '' || this.email.value.trim().length == 0 || this.email.invalid) {
      this.invalid = true;
      this.isLoading = false;
      this.overlay = false;
      return;
    }
    this.emailService.submitOptOut(this.email.value)
      .subscribe(
        data => {
          console.log("success", data);
          if (data['status'] == 'Success') {
            this.isLoading = false;
            this.overlay = false;
            this.router.navigateByUrl('/thankyou'); //Navigate to thankyou page 
          }
        },
        error => {
          console.log("errror", error)
        }
      )
  }

  // to remove the invalid class after prompting the error 
  removeinvalid() {
    this.invalid = false;
  }

  // to make the footer always at the bottom of the screen
  reSize() {
    this.height = window.innerHeight - (document.getElementById('footerId').offsetHeight + document.getElementById('headerId').offsetHeight);
    this.screenHeight = (this.height) + 'px';
    document.getElementById('main1').style.minHeight = this.screenHeight;
  }

}

