import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController, NavController, Platform } from '@ionic/angular';
import { Subject, Observable, from } from 'rxjs';
// import { StorageService } from '../storage/storage.service';
import { Router } from '@angular/router';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';


@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private _isAuthenticated: boolean = false;
  private _isLoading: boolean = true;
  private _jwtToken: string = "";
  private _userId: string = "";
  private _userInfo: any = {};

  public _statusChange$ = new Subject<boolean>();
  public loginStatus$ = this._statusChange$.asObservable();

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private toast: ToastController,
    // private storage: StorageService,
    private router: Router,
    private nav: NavController,
  ) {
    this.afAuth.authState.subscribe(async (user) => {
      if (user) {
        this._isAuthenticated = true;
        this._jwtToken = await this.afAuth.auth.currentUser.getIdToken(true);
        this._userId = await this.afAuth.auth.currentUser.uid;
        let userInfo = await this.firestore.collection('users').doc(this._userId).valueChanges();
        window.localStorage.setItem('user', JSON.stringify(userInfo));
        console.log(userInfo);
      } else {
        this._isAuthenticated = false;
        this._jwtToken = "";
        // this.storage.clearTokenAndUser();
      }
    });
  }
  get token(): string {
    return this._jwtToken;
  }
  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }
  get isAdmin(): boolean {
    if (!(this._userInfo.userRole === 'Admin')) return true;
    return false;
  }
  get userId(): string {
    return this._userId;
  }
  public get userInfo(): any {
    return this._userInfo;
  }
  get isLoading(): boolean {
    return this._isLoading;
  }



  // async login(email: string, password: string) {
  //   this._isLoading = true;
  //   try {
  //     await this.afAuth.auth.signInWithEmailAndPassword(email, password);
  //   } catch (ex) {
  //     console.log(ex);
  //     this._isLoading = false;
  //     this.presentToast(
  //       "Email or Password is incorrect. Make sure you have entered the right email and password combination",
  //       "warning"
  //     );
  //   }
  // }

  async login(email: string, password: string) {
    this._isLoading = true;
    try {
      let user = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      // let user = await this.afAuth.auth.signInWithPhoneNumber(email, password);
      let userInfo;
      if (user) {
        userInfo = await this.firestore.collection('users').doc(user.user.uid).get().toPromise().then((userInfo) => {
          return userInfo.data();
        });
        // userInfo = afs.collection<Shirt>('shirts');
        // .snapshotChanges() returns a DocumentChangeAction[], which contains
        // a lot of information about "what happened" with each change. If you want to
        // get the data and the id use the map operator.
        // let promise = new Promise((resolve, reject) => {
        //   of(this.firestore.collection('users').valueChanges())
        //       .toPromise()
        //       .then(
        //           res => { // Success

        //             console.log(res);
        //             resolve(res);
        //           },
        //           msg => { // Error
        //             reject(msg);
        //           }
        //       );
        // });
        // userInfo = await promise;


      }

      console.log("User Inform returned from login", Object.assign(userInfo, { id: user.user.uid }));
      window.localStorage.setItem('user', JSON.stringify(userInfo));
      this._isLoading = false;
      return true;

      // if(userInfo){
      //   if(userInfo.role === "Admin")
      //     this.router.navigate([`/employees`]);
      //   else
      //     this.router.navigate([`/users/${user.user.uid}`]);  
      // }
    } catch (ex) {
      console.log(ex);
      this._isLoading = false;
      this.presentToast(
        "Email or Password is incorrect. Make sure you have entered the right email and password combination",
        "warning"
      );
      return false;
    }
  }

  async register(user: any) {
    this._isLoading = true;
    try {
      console.log("Signup Form", user);
      let user_data = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      await this.firestore.collection('users').doc(user_data.user.uid).set(user);
      this.presentToast("User has been registered successfull", "success");
      return true;
    } catch (ex) {
      console.log(ex);
      this._isLoading = false;
      this.presentToast("User registration failed", "error");
      return false;
    }
  }

  async passwordReset(email) {
    try {
      await this.afAuth.auth.sendPasswordResetEmail(email);
      return true;
    } catch (ex) {
      return false;
    }
  }
  async logout() {
    await this.afAuth.auth.signOut();
    this.nav.navigateRoot("");
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toast.create({
      message: message,
      color: color,
      duration: 5000,
    });
    toast.present();
  }

  async refreshToken() {
    this._isAuthenticated = true;
    this._jwtToken = await this.afAuth.auth.currentUser.getIdToken(true);
    this._userId = await this.afAuth.auth.currentUser.uid;

    // this.storage.setToken(this._jwtToken);
  }
}
