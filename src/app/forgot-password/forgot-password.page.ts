import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service'



@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  email: string;
  
  constructor(
    private router: Router,
    private _auth: AuthenticationService

  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.initializeSigninModel();
  } 

  initializeSigninModel(){
    this.email = "";
  }

  validateEmail() {
    if(this.email != "")
    return false;
    else 
    return true;
  }

  sendEmail(){
    this._auth.passwordReset(this.email); 
  }

}
