import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit{

  name: string;
  email: string;
  phoneNo: string;
  password: string;
  employeeId: string;
  role: string = "User";
  subscription: boolean = false;
  subscriptionVerified: boolean = false;
  signup: boolean = false;


  constructor(
    private _auth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.initializeSignupModel();
  } 

  initializeSignupModel(){
    this.name = "";
    this.email = "";
    this.phoneNo = "";
    this.password = "";
    this.employeeId = "";
  }

  validateSignupForm() {
    if (!this.name || !this.email || !this.phoneNo || !this.password)
      return true;
    else
      return false;
  }

  submitSignupForm(){
     this._auth.register({
      email: this.email,
      password: this.password,
      fullName: this.name,
      phoneNumber: this.phoneNo,
      role: this.role,
      subscription: this.subscription,
      subscriptionVerified: this.subscriptionVerified,
      employeeId: this.employeeId=="" ?  "1001" : this.employeeId
    }).then((result) => {

      if(result==true)
      this.router.navigate(['/home']);


    })  

  }
}
