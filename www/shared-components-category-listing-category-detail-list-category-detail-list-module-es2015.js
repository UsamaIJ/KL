(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-components-category-listing-category-detail-list-category-detail-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/category-listing/category-detail-list/category-detail-list.page.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/category-listing/category-detail-list/category-detail-list.page.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Category</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-content [fullscreen]=\"true\">\n\n  <ion-header collapse=\"condense\">\n    <ion-toolbar> -->\n      <!-- <ion-title size=\"large\">Category Details</ion-title>  -->\n    <!-- </ion-toolbar>\n  </ion-header>\n\n  <ion-card *ngFor=\"let item of categories\">\n    <ion-item (click)=\"categoryClicked(item.id)\"> -->\n      <!-- <ion-thumbnail slot=\"start\">\n        <img src='../../assets/logos/{{trimAndLowerCaseBusinessName(s.transactions[0].biz_name)}}.png'>\n      </ion-thumbnail> -->\n      <!-- <ion-label> -->\n        <!-- <h2>{{item.name}}</h2> -->\n        <!-- <p>accounts: {{s.totalBankAccounts.length}}</p> -->\n      <!-- </ion-label> -->\n      <!-- <ion-label class=\"amount-label\" fill=\"outline\" slot=\"end\">{{s.total | currency:'USD'}}</ion-label> -->\n    <!-- </ion-item>  \n  </ion-card> -->\n\n\n  <!-- <ion-row>\n    <ion-col size=\"5\" *ngFor=\"let product of categories\" (click)=\"categoryClicked(item.id)\">\n      <h4>{{ product.name }}</h4>\n      <img src=\"{{ product.images[0] ? product.images[0].src : 'assets/products/prod-1.png'  }}\" />\n    </ion-col>\n  </ion-row> -->\n\n  <!-- <div class=\"category-slider ion-padding-start\">\n    <ion-slides [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\">\n      <ion-slide *ngFor=\"let category of categories\">\n        <ion-col (click)=\"categoryClicked(category.id)\">\n          <h4>{{ category.name }}</h4>\n        </ion-col>\n      </ion-slide>\n    </ion-slides>\n  </div> -->\n\n<!-- </ion-content> -->\n\n\n<ion-content>\n  <div class=\"category-slider ion-padding-start\">\n    <!-- <ion-grid> -->\n    <!-- <ion-slides [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\"> -->\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"5\" *ngFor=\"let category of categories\" (click)=\"categoryClicked(category.id)\">\n          <h4>{{ category.name }}</h4>\n          <img src=\"{{randomGenerator() }}\" />\n        </ion-col>\n      </ion-row>\n      <!-- </ion-slide>\n    </ion-slides> -->\n    </ion-grid>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/shared-components/category-listing/category-detail-list/category-detail-list-routing.module.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/shared-components/category-listing/category-detail-list/category-detail-list-routing.module.ts ***!
  \****************************************************************************************************************/
/*! exports provided: CategoryDetailListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailListPageRoutingModule", function() { return CategoryDetailListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _category_detail_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-detail-list.page */ "./src/app/shared-components/category-listing/category-detail-list/category-detail-list.page.ts");




const routes = [
    {
        path: '',
        component: _category_detail_list_page__WEBPACK_IMPORTED_MODULE_3__["CategoryDetailListPage"]
    }
];
let CategoryDetailListPageRoutingModule = class CategoryDetailListPageRoutingModule {
};
CategoryDetailListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoryDetailListPageRoutingModule);



/***/ }),

/***/ "./src/app/shared-components/category-listing/category-detail-list/category-detail-list.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/shared-components/category-listing/category-detail-list/category-detail-list.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: CategoryDetailListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailListPageModule", function() { return CategoryDetailListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _category_detail_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-detail-list-routing.module */ "./src/app/shared-components/category-listing/category-detail-list/category-detail-list-routing.module.ts");
/* harmony import */ var _category_detail_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-detail-list.page */ "./src/app/shared-components/category-listing/category-detail-list/category-detail-list.page.ts");







let CategoryDetailListPageModule = class CategoryDetailListPageModule {
};
CategoryDetailListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _category_detail_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryDetailListPageRoutingModule"]
        ],
        declarations: [_category_detail_list_page__WEBPACK_IMPORTED_MODULE_6__["CategoryDetailListPage"]]
    })
], CategoryDetailListPageModule);



/***/ }),

/***/ "./src/app/shared-components/category-listing/category-detail-list/category-detail-list.page.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/shared-components/category-listing/category-detail-list/category-detail-list.page.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2NhdGVnb3J5LWxpc3RpbmcvY2F0ZWdvcnktZGV0YWlsLWxpc3QvY2F0ZWdvcnktZGV0YWlsLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared-components/category-listing/category-detail-list/category-detail-list.page.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/shared-components/category-listing/category-detail-list/category-detail-list.page.ts ***!
  \******************************************************************************************************/
/*! exports provided: CategoryDetailListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailListPage", function() { return CategoryDetailListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_categories_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/categories/category.service */ "./src/app/services/categories/category.service.ts");
/* harmony import */ var _services_products_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/products/product.service */ "./src/app/services/products/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let CategoryDetailListPage = class CategoryDetailListPage {
    constructor(router, _categoryService, _productService) {
        this.router = router;
        this._categoryService = _categoryService;
        this._productService = _productService;
        this.categoryID = null;
        this.categories = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.categories = this.router.getCurrentNavigation().extras.state.sub_categories;
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
        });
    }
    categoryClicked(id) {
        let params = {
            state: {
                id: id
            }
        };
        this.router.navigate(['/product-listing'], params);
    }
    randomGenerator() {
        return `assets/products/prod-${Math.floor(Math.random() * 4) + 1}.png`;
    }
};
CategoryDetailListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_categories_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _services_products_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
];
CategoryDetailListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-detail-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./category-detail-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/category-listing/category-detail-list/category-detail-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./category-detail-list.page.scss */ "./src/app/shared-components/category-listing/category-detail-list/category-detail-list.page.scss")).default]
    })
], CategoryDetailListPage);



/***/ })

}]);
//# sourceMappingURL=shared-components-category-listing-category-detail-list-category-detail-list-module-es2015.js.map