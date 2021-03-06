import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../services/products/product.service'
import { productFilter } from '../../services/products/product-filter';
import { ToastController, NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.page.html',
  styleUrls: ['./product-listing.page.scss'],
})

export class ProductListingPage implements OnInit {categoryID:any = null;
  
  // Data Variables //
  public products: any = [];
  // Data Variables //

  // Loading Variables //
  isLoading = true;
  // Loading Variables //

  localStorage: any = [];
  subscribed: boolean = false;
  loggedIn: boolean = false;

  constructor(
    private router: Router,
    private _productService : ProductService,
    private toast: ToastController,


  ) { }

  async ngOnInit() {

    this.localStorage = window.localStorage.getItem('user');
    this.localStorage = JSON.parse(this.localStorage);
    if(this.localStorage) {
    this.subscribed = this.localStorage.subscription == true && this.localStorage.subscriptionVerified == true ? true : false;
    this.loggedIn =  true;
    }
    else {
      this.loggedIn = false
       }

    this.categoryID = this.router.getCurrentNavigation().extras.state.id;

    let params = <productFilter> { };

        params.category = this.categoryID;
        //  '264';
        //  this.categoryID;
        params.page = 1;
        params.per_page = 10;

        this._productService.getProducts(params).then((products) =>{
          this.products = products;
          this.isLoading = false;
        });
  }

  productClicked (product) { 
    if((this.subscribed == true && this.loggedIn == true) || this.categoryID != 264)
    this.router.navigate(['/item-details']);
    else if(this.loggedIn == true && this.subscribed == false && this.categoryID == 264)
    {
      this.subscribeToast(
        "Please Subscribe to purchase the item",
        "warning"
        );
    }
    else if (this.loggedIn == false && this.categoryID == 264) {
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
      duration: 2000
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

}

