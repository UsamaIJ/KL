import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../../../services/categories/category.service'
import { ProductService } from '../../../services/products/product.service'
import { productFilter } from '../../../services/products/product-filter';
import { categoryFilter } from '../../../services/categories/category-filter';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-category-detail-list',
  templateUrl: './category-detail-list.page.html',
  styleUrls: ['./category-detail-list.page.scss'],
})
export class CategoryDetailListPage implements OnInit {categoryID:any = null;
  public categories: any = [];
  categoryName: string = "";



  constructor(
    private router: Router,
    private _categoryService: CategoryService,
    private _productService : ProductService

  ) { }

  async ngOnInit() {
    this.categories = this.router.getCurrentNavigation().extras.state.sub_categories;
    this.categoryName = this.router.getCurrentNavigation().extras.state.name;
    console.log("sub-category in listing", this.categories);
    // let params = <categoryFilter>{ };
    // let productParams = <productFilter> { };

    // params.parent = this.categoryID;
    // params.page = 1;
    // params.per_page = 10;
    // this._categoryService.getCategories(params).then((categories) =>{
    //   console.log("Categories", categories);
    //   this.categories = categories;

    //   if(this.categories.length == 0) {
    //     let params:NavigationExtras = {
    //       state: {
    //         id: this.categoryID
    //       }
    //     }
    //       this.router.navigate(['/product-listing'],params);
    //   }
    // });
  }

  categoryClicked(id) {
    let params:NavigationExtras = {
      state: {
        id: id
      }
    }
      this.router.navigate(['/product-listing'],params);
  }
  randomGenerator(){
    return `assets/products/prod-${Math.floor(Math.random() * 4) + 1}.png` ;
  }
  
}

