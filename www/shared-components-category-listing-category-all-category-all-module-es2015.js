(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-components-category-listing-category-all-category-all-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/category-listing/category-all/category-all.page.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/category-listing/category-all/category-all.page.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-buttons>\n    <ion-back-button></ion-back-button>\n  </ion-buttons>\n  <ion-toolbar>\n    <ion-title>All Categories</ion-title>\n  </ion-toolbar>\n  <div class=\"progress ion-text-center\">\n    <!-- <ion-progress-bar class=\"progress\" type=\"indeterminate\"></ion-progress-bar> -->\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"category-slider ion-padding-start\">\n    <!-- <ion-grid> -->\n    <!-- <ion-slides [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\"> -->\n    <ion-grid style=\"margin-top: 15px;\">\n      <ion-row>\n        <ion-col size=\"5\" *ngFor=\"let category of categories\" (click)=\"categoryClicked(category)\">\n          <img src=\"{{ category.image && category.image.src ? category.image.src : randomGenerator() }}\" />\n          <span>{{ category.name }}</span>\n        </ion-col>\n      </ion-row>\n      <!-- </ion-slide>\n    </ion-slides> -->\n    </ion-grid>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/shared-components/category-listing/category-all/category-all-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/shared-components/category-listing/category-all/category-all-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: CategoryAllPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryAllPageRoutingModule", function() { return CategoryAllPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _category_all_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-all.page */ "./src/app/shared-components/category-listing/category-all/category-all.page.ts");




const routes = [
    {
        path: '',
        component: _category_all_page__WEBPACK_IMPORTED_MODULE_3__["CategoryAllPage"]
    }
];
let CategoryAllPageRoutingModule = class CategoryAllPageRoutingModule {
};
CategoryAllPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoryAllPageRoutingModule);



/***/ }),

/***/ "./src/app/shared-components/category-listing/category-all/category-all.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared-components/category-listing/category-all/category-all.module.ts ***!
  \****************************************************************************************/
/*! exports provided: CategoryAllPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryAllPageModule", function() { return CategoryAllPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _category_all_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-all-routing.module */ "./src/app/shared-components/category-listing/category-all/category-all-routing.module.ts");
/* harmony import */ var _category_all_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-all.page */ "./src/app/shared-components/category-listing/category-all/category-all.page.ts");







let CategoryAllPageModule = class CategoryAllPageModule {
};
CategoryAllPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _category_all_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryAllPageRoutingModule"]
        ],
        declarations: [_category_all_page__WEBPACK_IMPORTED_MODULE_6__["CategoryAllPage"]]
    })
], CategoryAllPageModule);



/***/ }),

/***/ "./src/app/shared-components/category-listing/category-all/category-all.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/shared-components/category-listing/category-all/category-all.page.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col {\n  height: 100px;\n  margin-right: 28px;\n  margin-bottom: 65px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\nion-col h4 {\n  color: #ffffff;\n  margin: 0;\n}\nion-col img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.16);\n  border-radius: 15px;\n}\nion-col span {\n  position: absolute;\n  top: 110px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvY2F0ZWdvcnktbGlzdGluZy9jYXRlZ29yeS1hbGwvY2F0ZWdvcnktYWxsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUNJO0VBQ0ksY0FBQTtFQUNBLFNBQUE7QUFDUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxpREFBQTtFQUNBLG1CQUFBO0FBQVI7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQURSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvY2F0ZWdvcnktbGlzdGluZy9jYXRlZ29yeS1hbGwvY2F0ZWdvcnktYWxsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDY1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG4gICAgaDQge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDE1cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDExMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/shared-components/category-listing/category-all/category-all.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared-components/category-listing/category-all/category-all.page.ts ***!
  \**************************************************************************************/
/*! exports provided: CategoryAllPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryAllPage", function() { return CategoryAllPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_categories_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/categories/category.service */ "./src/app/services/categories/category.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let CategoryAllPage = class CategoryAllPage {
    constructor(router, _categoryService, toast) {
        this.router = router;
        this._categoryService = _categoryService;
        this.toast = toast;
        this.sub_categories = [];
        this.categories = [];
        this.localStorage = [];
        this.subscribed = false;
        this.loggedIn = false;
        this.isLoading = true;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.localStorage = window.localStorage.getItem('user');
            this.localStorage = JSON.parse(this.localStorage);
            if (this.localStorage) {
                this.subscribed = this.localStorage.subscription == true && this.localStorage.subscriptionVerified == true ? true : false;
                this.loggedIn = true;
            }
            let params = {};
            params.parent = 0;
            params.page = 1;
            params.per_page = 100;
            this._categoryService.getCategories(params).then((categories) => {
                console.log("Categories", categories);
                this.categories = categories;
                this.isLoading = false;
            });
            // this.categories = this.router.getCurrentNavigation().extras.state.categories;
            // console.log("all categories", this.categories, "subscription",this.localStorage,this.localStorage.subscription,this.localStorage.subscriptionVerified, this.subscribed);
        });
    }
    categoryClicked(cat) {
        let param = {};
        param.parent = cat.id;
        param.page = 1;
        param.per_page = 100;
        this._categoryService.getCategories(param).then((categories) => {
            console.log("sub categories", categories);
            this.sub_categories = categories;
            if (this.sub_categories.length == 0) {
                let params = {
                    state: {
                        id: cat.id
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
    presentToast(message, color) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: message,
                color: color,
                duration: 2000,
            });
            toast.present();
        });
    }
    randomGenerator() {
        return `assets/products/prod-${Math.floor(Math.random() * 4) + 1}.png`;
    }
};
CategoryAllPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_categories_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
CategoryAllPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-all',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./category-all.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/category-listing/category-all/category-all.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./category-all.page.scss */ "./src/app/shared-components/category-listing/category-all/category-all.page.scss")).default]
    })
], CategoryAllPage);



/***/ })

}]);
//# sourceMappingURL=shared-components-category-listing-category-all-category-all-module-es2015.js.map