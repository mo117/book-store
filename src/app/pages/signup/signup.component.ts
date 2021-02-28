import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { APiService } from '../../service/api.service';
import { ToastrService } from 'ngx-toastr';
import { SessionData } from 'src/app/service/seisson-data';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  ispublisher: any;
  constructor(private apiservice: APiService, private toastar: ToastrService, private router: Router) { }
  //sign up form by ReactiveForms
  LogInForm = new FormGroup({
    user: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmpassword: new FormControl('', Validators.required),
    publisher: new FormControl('', Validators.required),
  })


  ngOnInit(): void {
    this.ispublisher = null;
  }

  selectPublish(ispublisher) {
    this.ispublisher = ispublisher;
    console.log(this.ispublisher);

  }
  onSubmit(formData) {


    if (formData.valid) {
      console.log(formData);
      this.apiservice.signup(formData.value, this.ispublisher).subscribe(
        res => {
          console.log(res);
          if (res.status == 1) {
            // save seesion data of user after sign up by calling SaveDataInSession in session-data file

            SessionData.SaveDataInSession(res.data)
            this.toastar.success(res.message);
            this.router.navigate(['Home']);
          }
          else {
            this.toastar.error(res.message);
          }
        }, error => {
          console.log(error);

          this.toastar.error(error.error.message);
        }
      )
    }
    else {
      this.toastar.error("Please Fill Data Succfully");

    }
  }
  // showSuccess() {
  //   this.toastar.success('hello');
  // }



}
