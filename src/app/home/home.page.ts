import { Component, ViewChild, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../services/categories/category.service'
import { categoryFilter } from '../services/categories/category-filter';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { CategoryListComponent } from '../shared-components/category-listing/category-list/category-list.component'
import { Router, NavigationExtras } from '@angular/router';
import { productFilter } from '../services/products/product-filter';
import { ProductService } from '../services/products/product.service'




@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public categories: any = [];
  public sub_categories: any = [];
  public featuredProducts = [];
  public bestSellProducts = [];
  public products: any = [];
  public isLoading = true;
  public sliderImage = [{src: '../../../../assets/products/background1.jpg'},
  {src: '../../../../assets/products/background1.jpg'},
  {src: '../../../../assets/products/background1.jpg'},
  {src: '../../../../assets/products/background1.jpg'}]

  constructor(
    private data: DataService,
    private _categoryService: CategoryService,
    public navCtrl: NavController,
    private router: Router,
    private _productService : ProductService


  ) { }

  async ngOnInit() {
    this.categories = this.data.getCategories();
    this.featuredProducts = this.data.getFeaturedProducts();
    this.bestSellProducts = this.data.getBestSellProducts();
    let params = <categoryFilter>{ };
    params.parent = 0;
    params.page = 6;
    params.per_page = 6;
    this._categoryService.getCategories(params).then((categories) =>{
      console.log("Categories", categories);
      this.categories = categories;
      this.isLoading = false;
        });

        let paramsProducts = <productFilter> { };

        paramsProducts.category = '264';
        //  this.categoryID;
        paramsProducts.page = 1;
        paramsProducts.per_page = 10;

        this._productService.getProducts(paramsProducts).then((products) =>{
          this.products = products;
          this.isLoading = false;
        });
  }

  categoryClicked(id){

    let param = <categoryFilter>{ };
    param.parent = id;
    param.page = 1;
    param.per_page = 100;
    this._categoryService.getCategories(param).then((categories) =>{
      console.log("sub categories", categories);
      this.sub_categories = categories;

      if(this.sub_categories.length == 0) {
        let params:NavigationExtras = {
          state: {
            id: id
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

  seeAllCategories() {
    let params:NavigationExtras = {
      state: {
        categories: this.categories
      }
    }
    this.router.navigate(['/category-all'],params);
    
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.categories.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  randomGenerator(){
    return `assets/products/prod-${Math.floor(Math.random() * 4) + 1}.png` ;
  }

  slidesDidLoad(slides) {
    slides.startAutoplay();
  }


}
