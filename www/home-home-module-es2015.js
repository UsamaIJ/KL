(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <img src=\"../../assets/menu_bar.svg\" />\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"notification\">\n        <ion-icon name=\"notifications-outline\" color=\"dark\"></ion-icon>\n        <span>&nbsp;</span>\n      </ion-button>\n      <ion-button class=\"filter\">\n        <ion-icon name=\"funnel-outline\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"search ion-padding\">\n    <ion-item lines=\"none\">\n      <ion-input placeholder=\"Search Your Product\"></ion-input>\n      <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n  </div>\n\n  <div>\n    <ion-slides pager #mySlider class=\"slides\" (ionSlidesDidLoad)=\"slidesDidLoad(mySlider)\">\n      <ion-slide *ngFor=\"let number of [1,2,3,4,5,6]\" style=\"padding-left: 7%;padding-right: 7%;\">\n        <img src=\"../../../../assets/products/prod-7.jpg\" style=\"object-fit: scale-down; border-radius: 5%;\"/>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n\n\n\n  <div class=\"title ion-padding\">\n    <h2>Categories</h2>\n    <p (click)=\"seeAllCategories()\">See all</p>\n  </div>\n\n  <div class=\"category-slider ion-padding-start\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"3\" *ngFor=\"let category of categories\">\n                <div class=\"category-container\" (click)=\"categoryClicked(category.id)\">\n                  <ion-avatar>\n                    <ion-img [src]=\"category.image && category.image.src ? category.image.src : randomGenerator()\"></ion-img>\n                  </ion-avatar>\n                  <span class=\"category-name\">{{category.name}}</span>\n                </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n      <ion-spinner name=\"dots\"></ion-spinner>\n    </div>\n    </div>\n  <div class=\"title ion-padding\">\n    <h2 class=\"font-bold\">Featured</h2>\n    <p>See all</p>\n  </div>\n\n  <div class=\"product-slider ion-padding-start\">\n    <ion-slides [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\">\n      <ion-slide *ngFor=\"let product of featuredProducts\">\n        <ion-col class=\"ion-text-left\" routerLink=\"/item-details\" routerDirection=\"forward\">\n          <img src=\"{{ product.image }}\" />\n          <p>${{ product.price }}</p>\n          <h6>{{ product.name }}</h6>\n        </ion-col>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <div class=\"title ion-padding\">\n    <h2 class=\"font-bold\">Best Sell</h2>\n    <p>See all</p>\n  </div>\n\n  <div class=\"product-slider ion-padding-start\">\n    <ion-slides [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\">\n      <ion-slide *ngFor=\"let product of bestSellProducts\">\n        <ion-col class=\"ion-text-left\" routerLink=\"/item-details\" routerDirection=\"forward\">\n          <img src=\"{{ product.image }}\" />\n          <p>${{ product.price }}</p>\n          <h6>{{ product.name }}</h6>\n        </ion-col>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n\n  \n    <!-- <ion-button (click)=\"toggleInfiniteScroll()\" expand=\"block\">\n      Toggle Infinite Scroll\n    </ion-button> -->\n\n    <div class=\"title ion-padding\">\n      <h2 class=\"font-bold\">Products</h2>\n      <p>See all</p>\n    </div>\n  \n    <ion-list>\n\n      <div class=\"category-slider ion-padding-start\">\n        <!-- <ion-grid> -->\n        <!-- <ion-slides [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\"> -->\n        <ion-grid style=\"margin-top: 15px;\">\n          <ion-row>\n            <ion-col size=\"5\" *ngFor=\"let product of products\" (click)=\"categoryClicked(product.id)\">\n              <img  style=\"border-radius: 15px;\" src=\"{{ product.images[0] ? product.images[0].src : 'assets/products/prod-1.png'  }}\">\n              <!-- <img src=\"{{ category.image && category.image.src ? category.image.src : randomGenerator() }}\" /> -->\n              <span>{{ product.name }}</span>\n              <h4> Price: <b>35$</b> </h4>\n\n            </ion-col>\n          </ion-row>\n          <!-- </ion-slide>\n        </ion-slides> -->\n        </ion-grid>\n      </div>\n    </ion-list>\n  \n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more data...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    \n</ion-content>\n");

/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DataService = class DataService {
    constructor() { }
    getCategories() {
        let categories = [];
        let cat1 = {
            id: 1,
            name: 'Womens',
            image: '../../assets/categories/category-1.png'
        };
        let cat2 = {
            id: 2,
            name: 'Mens',
            image: '../../assets/categories/category-2.png'
        };
        let cat3 = {
            id: 3,
            name: 'Kids',
            image: '../../assets/categories/category-3.png'
        };
        categories.push(cat1, cat2, cat3);
        return categories;
    }
    getFeaturedProducts() {
        let products = [];
        let prod1 = {
            id: 1,
            name: 'Womens T-Shirt',
            price: 55,
            image: '../../assets/products/prod-1.png'
        };
        let prod2 = {
            id: 2,
            name: 'Mens T-Shirt',
            price: 34,
            image: '../../assets/products/prod-2.png'
        };
        let prod3 = {
            id: 1,
            name: 'Womens T-Shirt',
            price: 40,
            image: '../../assets/products/prod-3.png'
        };
        products.push(prod1, prod2, prod3);
        return products;
    }
    getBestSellProducts() {
        let products = [];
        let prod1 = {
            id: 1,
            name: 'Womens T-Shirt',
            price: 55,
            image: '../../assets/products/prod-4.png'
        };
        let prod2 = {
            id: 2,
            name: 'Mens T-Shirt',
            price: 34,
            image: '../../assets/products/prod-5.png'
        };
        let prod3 = {
            id: 1,
            name: 'Womens T-Shirt',
            price: 40,
            image: '../../assets/products/prod-6.png'
        };
        products.push(prod1, prod2, prod3);
        return products;
    }
};
DataService.ctorParameters = () => [];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  margin-left: 10px;\n}\n\n.filter {\n  margin-right: 10px;\n}\n\n.search {\n  margin-bottom: 20px;\n}\n\n.search ion-item {\n  border-radius: 10px;\n  box-shadow: 0px 13px 30px 0px rgba(0, 0, 0, 0.09);\n  padding: 8px;\n}\n\n.search ion-item ion-icon {\n  margin-right: 16px;\n}\n\n.search ion-item ion-input {\n  padding-left: 10px !important;\n  border-left: 1px solid #F4F4F4;\n}\n\n.title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 32px;\n}\n\n.title h2 {\n  margin: 0 0 0 16px;\n  color: #434343;\n}\n\n.title p {\n  margin: 0 16px 0 0;\n  color: #656565;\n}\n\n.category-slider ion-slide {\n  width: 150px;\n  height: 100px;\n  margin-right: 10px;\n  margin-left: 20px;\n  margin-bottom: 30px;\n}\n\n.category-slider ion-slide ion-col {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.category-slider ion-slide ion-col h4 {\n  color: #ffffff;\n  margin: 0;\n}\n\n.category-slider ion-slide ion-col img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 8px;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.16);\n}\n\n.font-bold {\n  font-weight: bold;\n}\n\n.product-slider {\n  margin-bottom: 30px;\n}\n\n.product-slider ion-slide {\n  width: 150px;\n  height: auto;\n  margin-left: 20px;\n  margin-right: 10px;\n}\n\n.product-slider ion-slide ion-col img {\n  width: 100%;\n  height: 180px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 8px;\n}\n\n.product-slider ion-slide ion-col p {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n.product-slider ion-slide ion-col h6 {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\nion-slide:focus {\n  outline: none !important;\n}\n\nion-col:focus {\n  outline: none !important;\n}\n\nion-img {\n  border-radius: 100% !important;\n}\n\n.category-name {\n  font-size: small;\n  white-space: pre;\n}\n\n.category-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFDSTtFQUNJLG1CQUFBO0VBQ0EsaURBQUE7RUFDQSxZQUFBO0FBQ1I7O0FBQ1E7RUFDSSxrQkFBQTtBQUNaOztBQUVRO0VBQ0ksNkJBQUE7RUFDQSw4QkFBQTtBQUFaOztBQUtBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUZKOztBQUlJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBRlI7O0FBS0k7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFIUjs7QUFRSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBTFI7O0FBT1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFMWjs7QUFPWTtFQUNJLGNBQUE7RUFDQSxTQUFBO0FBTGhCOztBQVFZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGlEQUFBO0FBTmhCOztBQVlBO0VBQ0ksaUJBQUE7QUFUSjs7QUFZQTtFQUNJLG1CQUFBO0FBVEo7O0FBV0k7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFUUjs7QUFZWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0FBVmhCOztBQWFZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBWGhCOztBQWNZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBWmhCOztBQW1CQTtFQUNJLHdCQUFBO0FBaEJKOztBQW1CQTtFQUNJLHdCQUFBO0FBaEJKOztBQW9CQTtFQUNJLDhCQUFBO0FBakJKOztBQW9CQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFqQko7O0FBb0JBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFqQkoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmZpbHRlciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uc2VhcmNoIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMTNweCAzMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRjRGNEY0O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XG5cbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbjogMCAwIDAgMTZweDtcbiAgICAgICAgY29sb3I6ICM0MzQzNDM7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMCAxNnB4IDAgMDtcbiAgICAgICAgY29sb3I6ICM2NTY1NjU7XG4gICAgfVxufVxuXG4uY2F0ZWdvcnktc2xpZGVyIHtcbiAgICBpb24tc2xpZGUge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5mb250LWJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJvZHVjdC1zbGlkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgICBpb24tc2xpZGUge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcblxuICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoNiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFJlbW92aW5nIGhpZ2hsaWdodCB3aGVuIGZvY3VzZWQvY2xpY2tlZCBvbiBwcm9kdWN0XG5pb24tc2xpZGU6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5cbmlvbi1pbWcgIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5jYXRlZ29yeS1uYW1le1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgd2hpdGUtc3BhY2U6IHByZTtcbn1cblxuLmNhdGVnb3J5LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _services_categories_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/categories/category.service */ "./src/app/services/categories/category.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_products_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/products/product.service */ "./src/app/services/products/product.service.ts");







let HomePage = class HomePage {
    constructor(data, _categoryService, navCtrl, router, _productService) {
        this.data = data;
        this._categoryService = _categoryService;
        this.navCtrl = navCtrl;
        this.router = router;
        this._productService = _productService;
        this.categories = [];
        this.sub_categories = [];
        this.featuredProducts = [];
        this.bestSellProducts = [];
        this.products = [];
        this.isLoading = true;
        this.sliderImage = [{ src: '../../../../assets/products/prod-1.png' },
            { src: '../../../../assets/products/prod-2.png' },
            { src: '../../../../assets/products/prod-3.png' },
            { src: '../../../../assets/products/prod-4.png' },
            { src: '../../../../assets/products/prod-5.png' },
            { src: '../../../../assets/products/prod-6.png' }];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.categories = this.data.getCategories();
            this.featuredProducts = this.data.getFeaturedProducts();
            this.bestSellProducts = this.data.getBestSellProducts();
            let params = {};
            params.parent = 0;
            params.page = 1;
            params.per_page = 8;
            this._categoryService.getCategories(params).then((categories) => {
                console.log("Categories", categories);
                this.categories = categories;
                this.isLoading = false;
            });
            let paramsProducts = {};
            paramsProducts.category = '264';
            //  this.categoryID;
            paramsProducts.page = 1;
            paramsProducts.per_page = 10;
            this._productService.getProducts(paramsProducts).then((products) => {
                this.products = products;
                this.isLoading = false;
            });
        });
    }
    categoryClicked(id) {
        let param = {};
        param.parent = id;
        param.page = 1;
        param.per_page = 100;
        this._categoryService.getCategories(param).then((categories) => {
            console.log("sub categories", categories);
            this.sub_categories = categories;
            if (this.sub_categories.length == 0) {
                let params = {
                    state: {
                        id: id
                    }
                };
                this.router.navigate(['/product-listing'], params);
            }
            else {
                let params = {
                    state: {
                        sub_categories: this.sub_categories
                    }
                };
                this.router.navigate(['/category-detail-list'], params);
            }
        });
    }
    seeAllCategories() {
        let params = {
            state: {
                categories: this.categories
            }
        };
        this.router.navigate(['/category-all'], params);
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
    randomGenerator() {
        return `assets/products/prod-${Math.floor(Math.random() * 4) + 1}.png`;
    }
    slidesDidLoad(slides) {
        slides.startAutoplay();
    }
};
HomePage.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _services_categories_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_products_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] }
];
HomePage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"],] }]
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map