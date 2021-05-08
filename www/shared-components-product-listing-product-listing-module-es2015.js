(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-components-product-listing-product-listing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/product-listing/product-listing.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/product-listing/product-listing.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Products</ion-title>\n  </ion-toolbar>\n  <div *ngIf=\"isLoading\" class=\"progress ion-text-center\">\n    <ion-progress-bar class=\"progress\" type=\"indeterminate\"></ion-progress-bar>\n  </div>\n\n</ion-header>\n\n<ion-content *ngIf=\"!isLoading && products.length > 0\">\n  <ion-list class=\"ios list-ios hydrated\" inset>\n    <ion-item style=\"margin-bottom: 10px;\" class=\"ion-no-padding ion-item\" *ngFor=\"let product of products\" (click)=\"productClicked(product)\">\n      <ion-thumbnail style=\"height:100px; width:100px\" slot=\"start\" class=\"ios hydrated\">\n        <img  style=\"border-radius: 15px;\" src=\"{{ product.images[0] ? product.images[0].src : 'assets/products/prod-1.png'  }}\">\n      </ion-thumbnail>\n      <ion-label>\n        <p>{{ product.name }}</p>\n        <h2> Price: <b>35$</b> </h2>\n        <p>This is product description</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-content *ngIf=\"!isLoading && products.length < 1\">\n  <div class=\"fullheight xc\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-icon class=\"slash\" style=\"font-size: 250px;\" name=\"cube\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-top: 30px;\">\n        <ion-col size=\"12\">\n          <h4>No Products found for this category</h4>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/shared-components/product-listing/product-listing-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shared-components/product-listing/product-listing-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ProductListingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListingPageRoutingModule", function() { return ProductListingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _product_listing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-listing.page */ "./src/app/shared-components/product-listing/product-listing.page.ts");




const routes = [
    {
        path: '',
        component: _product_listing_page__WEBPACK_IMPORTED_MODULE_3__["ProductListingPage"]
    }
];
let ProductListingPageRoutingModule = class ProductListingPageRoutingModule {
};
ProductListingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductListingPageRoutingModule);



/***/ }),

/***/ "./src/app/shared-components/product-listing/product-listing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared-components/product-listing/product-listing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListingPageModule", function() { return ProductListingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _product_listing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-listing-routing.module */ "./src/app/shared-components/product-listing/product-listing-routing.module.ts");
/* harmony import */ var _product_listing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-listing.page */ "./src/app/shared-components/product-listing/product-listing.page.ts");







let ProductListingPageModule = class ProductListingPageModule {
};
ProductListingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _product_listing_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductListingPageRoutingModule"]
        ],
        declarations: [_product_listing_page__WEBPACK_IMPORTED_MODULE_6__["ProductListingPage"]]
    })
], ProductListingPageModule);



/***/ }),

/***/ "./src/app/shared-components/product-listing/product-listing.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/shared-components/product-listing/product-listing.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col {\n  height: 100px;\n  margin-right: 28px;\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-col h4 {\n  color: #ffffff;\n  margin: 0;\n}\n.fullheight {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.slash:after {\n  position: absolute;\n  content: \"/\";\n  color: red;\n  font-weight: 10;\n  font-size: 250px;\n  left: 80px;\n  top: -70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvcHJvZHVjdC1saXN0aW5nL3Byb2R1Y3QtbGlzdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNJLGNBQUE7RUFDQSxTQUFBO0FBQ1I7QUFlQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVpGO0FBZUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFaSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3Byb2R1Y3QtbGlzdGluZy9wcm9kdWN0LWxpc3RpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbCB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgaDQge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpbWcge1xyXG4gICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vICAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAvLyAgICAgdG9wOiAwO1xyXG4gICAgLy8gICAgIGxlZnQ6IDA7XHJcbiAgICAvLyAgICAgei1pbmRleDogLTE7XHJcbiAgICAvLyAgICAgYm94LXNoYWRvdzogMHB4IDE1cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgIC8vIH1cclxuICAgIFxyXG59XHJcblxyXG4uZnVsbGhlaWdodCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNsYXNoOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiL1wiO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDtcclxuICAgIGZvbnQtc2l6ZTogMjUwcHg7XHJcbiAgICBsZWZ0OiA4MHB4O1xyXG4gICAgdG9wOiAtNzBweDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/shared-components/product-listing/product-listing.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared-components/product-listing/product-listing.page.ts ***!
  \***************************************************************************/
/*! exports provided: ProductListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListingPage", function() { return ProductListingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_products_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/products/product.service */ "./src/app/services/products/product.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let ProductListingPage = class ProductListingPage {
    constructor(router, _productService, toast) {
        this.router = router;
        this._productService = _productService;
        this.toast = toast;
        this.categoryID = null;
        // Data Variables //
        this.products = [];
        // Data Variables //
        // Loading Variables //
        this.isLoading = true;
        // Loading Variables //
        this.localStorage = [];
        this.subscribed = false;
        this.loggedIn = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.localStorage = window.localStorage.getItem('user');
            this.localStorage = JSON.parse(this.localStorage);
            if (this.localStorage) {
                this.subscribed = this.localStorage.subscription == true && this.localStorage.subscriptionVerified == true ? true : false;
                this.loggedIn = true;
            }
            else {
                this.loggedIn = false;
            }
            this.categoryID = this.router.getCurrentNavigation().extras.state.id;
            let params = {};
            params.category = this.categoryID;
            //  '264';
            //  this.categoryID;
            params.page = 1;
            params.per_page = 10;
            this._productService.getProducts(params).then((products) => {
                this.products = products;
                this.isLoading = false;
            });
        });
    }
    productClicked(product) {
        if ((this.subscribed == true && this.loggedIn == true) || this.categoryID != 264)
            this.router.navigate(['/item-details']);
        else if (this.loggedIn == true && this.subscribed == false && this.categoryID == 264) {
            this.subscribeToast("Please Subscribe to purchase the item", "warning");
        }
        else if (this.loggedIn == false && this.categoryID == 264) {
            this.loginToast("Please login to view the item", "warning");
        }
    }
    subscribeToast(message, color) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: message,
                color: color,
                duration: 2000
            });
            toast.present();
        });
    }
    loginToast(message, color) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
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
        });
    }
};
ProductListingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_products_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
ProductListingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-listing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-listing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/product-listing/product-listing.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-listing.page.scss */ "./src/app/shared-components/product-listing/product-listing.page.scss")).default]
    })
], ProductListingPage);



/***/ })

}]);
//# sourceMappingURL=shared-components-product-listing-product-listing-module-es2015.js.map