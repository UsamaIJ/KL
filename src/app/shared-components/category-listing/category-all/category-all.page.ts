import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../../../services/categories/category.service'
import { categoryFilter } from '../../../services/categories/category-filter';
import { ToastController, NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-category-all',
  templateUrl: './category-all.page.html',
  styleUrls: ['./category-all.page.scss'],
})
export class CategoryAllPage implements OnInit {


  private sub_categories:any = [];
  private categories: any = [];
  localStorage: any = [];
  subscribed: boolean = false;
  loggedIn: boolean = false;
  public isLoading = true;

  constructor(
    private router: Router,
    private _categoryService: CategoryService,
    private toast: ToastController,

  ) { }

  async ngOnInit() {

    this.localStorage = window.localStorage.getItem('user');
    this.localStorage = JSON.parse(this.localStorage);
    if(this.localStorage) {
    this.subscribed = this.localStorage.subscription == true && this.localStorage.subscriptionVerified == true ? true : false;
    this.loggedIn = true;
    }

    let params = <categoryFilter>{ };
    params.parent = 0;
    params.page = 1;
    params.per_page = 100;
    this._categoryService.getCategories(params).then((categories) =>{
      console.log("Categories", categories);
      this.categories = categories;
      this.isLoading = false;
        });
    // this.categories = this.router.getCurrentNavigation().extras.state.categories;

    // console.log("all categories", this.categories, "subscription",this.localStorage,this.localStorage.subscription,this.localStorage.subscriptionVerified, this.subscribed);

  }

  categoryClicked(cat){

    let param = <categoryFilter>{ };
    param.parent = cat.id;
    param.page = 1;
    param.per_page = 100;
    this._categoryService.getCategories(param).then((categories) =>{
      console.log("sub categories", categories);
      this.sub_categories = categories;

      if(this.sub_categories.length == 0) {
        let params:NavigationExtras = {
          state: {
            id: cat.id
          }
        }
        this.router.navigate(['/product-listing'],params);
      }
  
      else {
        let params:NavigationExtras = {
          state: {
            sub_categories: this.sub_categories
          }
        }
        this.router.navigate(['/category-detail-list'],params);
      }
    });
 
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toast.create({
      message: message,
      color: color,
      duration: 5000,
    });
    toast.present();
  }

  randomGenerator(){
    return `assets/products/prod-${Math.floor(Math.random() * 4) + 1}.png` ;
  }

}

