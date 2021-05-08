import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../../../services/categories/category.service'
import { categoryFilter } from '../../../services/categories/category-filter';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {


  categoryID:any = null;
  public categories: any = [];



  constructor(
    private router: Router,
    private _categoryService: CategoryService,

  ) { }

  async ngOnInit() {
    this.categoryID = this.router.getCurrentNavigation().extras.state.id;

    let params = <categoryFilter>{ };
    params.parent = 138;
    this._categoryService.getCategories(params).then((categories) =>{
      console.log("Categories", categories);
      this.categories = categories;
    });
  }

}
