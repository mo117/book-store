import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { SessionData } from 'src/app/service/seisson-data';
import { APiService } from '../../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private apiservice: APiService, private toastar: ToastrService, private router: Router) { }
  //login form by ReactiveForms
  LogInForm = new FormGroup({
    user: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
  }

  onSubmit(formData) {
    console.log(formData);

    if (formData.valid) {

      this.apiservice.logIn(formData.value).subscribe(
        res => {
          console.log(res);
          if (res.status == 1) {
            // save seesion data of user after log in by calling SaveDataInSession in session-data file
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


}
