import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';
import { AuthenticationService } from '../services/authentication/authentication.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isLoading: boolean = false;
  email: string;
  password: string;

  constructor(
    private _auth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.initializeSigninModel();
  } 

  initializeSigninModel(){
    this.email = "";
    this.password = "";
  }

  validateSigninForm() {
    if (!this.email || !this.password)
      return true;
    else
      return false;
  }

  submitSigninForm(){
    this.isLoading = true;
    this._auth.login(this.email,this.password).then((result) => {
      if(result==true)
      this.router.navigate(['/home']);
    });
    if(!this._auth.isLoading)
      this.isLoading = false;
  }

}
