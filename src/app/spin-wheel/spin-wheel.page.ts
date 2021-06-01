import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthenticationService } from '../services/authentication/authentication.service';


@Component({
  selector: 'app-spin-wheel',
  templateUrl: './spin-wheel.page.html',
  styleUrls: ['./spin-wheel.page.scss'],
})

export class SpinWheelPage implements OnInit {
  @ViewChild('myCanvas') myCanvas: ElementRef;
  @ViewChild('spin') spin: ElementRef;
  public ctx: CanvasRenderingContext2D;

  email: string;
  stopButton: boolean = false;
  localStorage: any = [];
  subscribed: boolean = false;
  loggedIn: boolean = false;
  enableSpin: boolean = true;


  color = ['#E65100', '#FFB74D', '#FB8C00', '#E65100', '#FFE0B2', '#E65100', "#FFE0B2", "#E65100"];
  label = ['80% OFF', '90% OFF', 'Free T-Shirt', 'Not Lucky', '10% OFF', 'Free Iphone', '20% Off', 'Free Laptop'];
  slices = this.color.length;
  sliceDeg = 360 / this.slices;
  deg: any;
  public speed: any;
  slowDownRand: any = 0;
  isStopped: any = false;
  width: any;
  center: any;
  lock = false;
  constructor(public navCtrl: NavController, private toast: ToastController, private router: Router, private auth: AuthenticationService,
    private db: AngularFirestore) {
    // this.router.routeReuseStrategy.shouldReuseRoute = function() {
    //   this.localStorage = window.localStorage.getItem('user');
    // this.localStorage = JSON.parse(this.localStorage);
    // console.log("spin wheel user", this.localStorage);
    // if(this.localStorage) {
    // this.subscribed = this.localStorage.subscription == true && this.localStorage.subscriptionVerified == true ? true : false;
    // this.loggedIn =  true;
    // alert(this.loggedIn);

    // }
    // else {
    //   this.loggedIn = false
    //    }
    //    return false;
    // };
    this.speed = 0;
    this.deg = this.rand(0, 360);
    let canvas = document.createElement('canvas');
    this.width = canvas.width; // size
    this.center = this.width / 2;      // center

  }


  async ngOnInit() {
    if (this.auth.userId) {
      this.db.collection('users').doc(this.auth.userId).valueChanges().subscribe((user) => {
        this.localStorage = user;
        // this.localStorage = JSON.parse(this.localStorage);
        console.log("spin wheel user", this.localStorage);
        if (this.localStorage) {
          this.subscribed = this.localStorage.subscription == true && this.localStorage.subscriptionVerified == true ? true : false;
          this.loggedIn = true;
        }
        else {
          this.loggedIn = false
        }
      });
    }
    else {
      this.localStorage = window.localStorage.getItem('user')
      this.localStorage = JSON.parse(this.localStorage);
      console.log("spin wheel user", this.localStorage);
      if (this.localStorage) {
        this.subscribed = this.localStorage.subscription == true && this.localStorage.subscriptionVerified == true ? true : false;
        this.loggedIn = true;
      }
      else {
        this.loggedIn = false
      }
    }


  }

  ngAfterViewInit(): void {
    // alert("here")
    // this.localStorage = window.localStorage.getItem('user');
    // this.localStorage = JSON.parse(this.localStorage);
    // console.log("spin wheel user", this.localStorage);

    // if(this.localStorage) {
    // this.subscribed = this.localStorage.subscription == true && this.localStorage.subscriptionVerified == true ? true : false;
    // this.loggedIn =  true;
    // }
    // else {
    //   this.loggedIn = false
    //    }
    this.ctx = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    this.drawImg();
    // this.anim();
  }

  rand(min, max) {
    return Math.random() * (max - min) + min;
  }
  deg2rad(deg) {
    return deg * Math.PI / 180;
  }
  drawSlice(deg, color) {
    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    this.ctx.moveTo(this.center, this.center);
    this.ctx.arc(this.center, this.center, this.width / 2, this.deg2rad(deg), this.deg2rad(deg + this.sliceDeg));
    this.ctx.lineTo(this.center, this.center);
    this.ctx.fill();
  }

  drawText(deg, text) {
    this.ctx.save();
    this.ctx.translate(this.center, this.center);
    this.ctx.rotate(this.deg2rad(deg));
    this.ctx.textAlign = "right";
    this.ctx.fillStyle = "#fff";
    this.ctx.font = '20px sans-serif';
    this.ctx.fillText(text, 130, 10);
    this.ctx.restore();
  }

  drawImg() {
    this.ctx.clearRect(0, 0, this.width, this.width);
    for (var i = 0; i < this.slices; i++) {
      this.drawSlice(this.deg, this.color[i]);
      this.drawText(this.deg + this.sliceDeg / 2, this.label[i]);
      this.deg += this.sliceDeg;
    }
  }
  anim() {
    this.deg += this.speed;
    this.deg %= 360;

    // Increment speed
    if (!this.isStopped && this.speed < 3) {
      this.speed = this.speed + 1 * 0.1;
    }
    // Decrement Speed
    if (this.isStopped) {
      if (!this.lock) {
        this.lock = true;
        this.slowDownRand = this.rand(0.994, 0.998);
      }
      this.speed = this.speed > 0.2 ? this.speed *= this.slowDownRand : 0;
    }
    // Stopped!
    if (this.lock && !this.speed) {
      var ai = Math.floor(((360 - this.deg - 90) % 360) / this.sliceDeg); // deg 2 Array Index
      ai = (this.slices + ai) % this.slices; // Fix negative index
      return alert("You got:\n" + this.label[ai]); // Get Array Item from end Degree
    }

    this.drawImg();
    window.requestAnimationFrame(this.anim.bind(this));
  };

  onStopClick() {
    this.isStopped = true;
    this.stopButton = false;
  }

  onStartClick() {
    console.log("this.subscribed", this.subscribed)
    console.log("this.loggedIn", this.loggedIn)
    if (this.subscribed == true && this.loggedIn == true) {
      this.enableSpin = false;
      this.stopButton = true;
      this.anim();
    }
    else if (this.loggedIn == true && this.subscribed == false) {
      this.subscribeToast(
        "To enable subscription Contact Admin at 0333-1234567",
        "warning"
      );
    }
    else if (this.loggedIn == false) {
      this.loginToast(
        "Please login to view the item",
        "warning"
      );
    }
  }

  async subscribeToast(message: string, color: string) {
    const toast = await this.toast.create({
      message: message,
      color: color,
      duration: 5000
    });
    toast.present();
  }

  async loginToast(message: string, color: string) {
    const toast = await this.toast.create({
      message: message,
      color: color,
      duration: 7000,
      buttons: [
        {
          text: 'Login',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.router.navigate(['/login']);
          }

        }
      ]

    });
    toast.present();
  }

  validateEmail() {
    if (!this.email && this.enableSpin == true)
      return true;
    else
      return false;
  }

  validateStopButton() {
    if (this.stopButton != true)
      return true;
    else
      return false;
  }

}