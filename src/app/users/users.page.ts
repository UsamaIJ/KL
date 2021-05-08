import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from '../services/users/users.service'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users: any;
  userSubscription: Subscription;
  constructor(
    private userService: UsersService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    
    this.retrieveAllUsers();
    
  }

  retrieveAllUsers(): void {
    this.userSubscription = this.userService.getAllUsers().subscribe(data => {
      this.users = data;
      console.log("All Users",this.users)
    });
  }


  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

  toggleSubscription(event, userId){
    console.log("Toggle Event",event);
    this.presentAlertConfirm(userId);
  }

  async presentAlertConfirm(userId: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you Sure you want to enable subscription for this user?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: async() => {
            await this.userService.updateUserSubscription(userId);
            this.retrieveAllUsers();
          }
        }
      ]
    });

    await alert.present();
  }

}
