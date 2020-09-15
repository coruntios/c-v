import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  sent = false;
  message: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    
    if (form.valid) {
      this.apiService.post(form.value).subscribe(res => {
        this.sent = true;
        this.message = 'Send Succesfully, please await for the answer'
        form.resetForm();
      }, (err: HttpErrorResponse) => {
        console.log(err.status);
        switch (err.status) {
          case 400:
            this.message = `You already sent an email in the last hour, for spam prevention you can not use the Email: ${form.value.to}, please message me at the following Email: majg8a@gmail.com, or use a different Email`;
            break;
          case 500:
            this.message = `The Email: ${form.value.to} is not valid please use another one`;
            break;
        }
      })
    }
  }

}
