(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-details-item-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/item-details/item-details.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/item-details/item-details.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" class=\"backbtn\" routerLink=\"/home\" routerDirection=\"back\">\n        <img src=\"../../assets/back-dark.svg\" />\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon name=\"search-outline\" color=\"dark\"></ion-icon>\n      </ion-button>\n      <ion-button class=\"notification\">\n        <ion-icon name=\"notifications-outline\" color=\"dark\"></ion-icon>\n        <span>&nbsp;</span>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides pager=\"true\" class=\"product-slider\">\n    <ion-slide>\n      <img src=\"../../assets/product-slider/prod-slide1.png\" />\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/product-slider/prod-slide1.png\" />\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/product-slider/prod-slide1.png\" />\n    </ion-slide>\n  </ion-slides>\n\n  <div class=\"ion-padding-vertical\">\n    <h1 class=\"item-name\">Black turtleneck top</h1>\n\n    <h4 class=\"price\">\n      $42\n      <span class=\"real-price\">$62</span>\n    </h4>\n  </div>\n\n  <div class=\"seperator\">\n    <hr>\n  </div>\n\n  <div class=\"review\">\n    <ion-row>\n      <ion-col size=\"6\">\n        <div class=\"rating\">\n          4.5\n        </div>\n\n        Very Good\n      </ion-col>\n      <ion-col size=\"6\">\n        <div class=\"count\">49 Reviews</div>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class=\"seperator\">\n    <hr>\n  </div>\n\n  <div class=\"description\">\n    <h5>Description</h5>\n\n    <p>\n      A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.\n    </p>\n\n  </div>\n\n  <div class=\"seperator\">\n    <hr>\n  </div>\n\n  <div class=\"variation\">\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"size\">\n      <ion-segment-button value=\"size\">\n        <ion-label>Select Size</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"color\">\n        <ion-label>Select Color</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div class=\"seperator\">\n    <hr>\n  </div>\n\n  <div class=\"variation-selector\">\n    <div class=\"sizes\" [class.active-variation]=\"activeVariation == 'size'\">\n      <div [class.active]=\"selectedSize == 1\" (click)=\"changeSize(1)\">\n        S\n      </div>\n      <div [class.active]=\"selectedSize == 2\" (click)=\"changeSize(2)\">\n        M\n      </div>\n      <div [class.active]=\"selectedSize == 3\" (click)=\"changeSize(3)\">\n        L\n      </div>\n      <div [class.active]=\"selectedSize == 4\" (click)=\"changeSize(4)\">\n        XL\n      </div>\n    </div>\n\n    <div class=\"colors\" [class.active-variation]=\"activeVariation == 'color'\">\n      <div [class.active]=\"selectedColor == 1\" (click)=\"changeColor(1)\">\n        BLACK\n      </div>\n      <div [class.active]=\"selectedColor == 2\" (click)=\"changeColor(2)\">\n        GREEN\n      </div>\n      <div [class.active]=\"selectedColor == 3\" (click)=\"changeColor(3)\">\n        BLUE\n      </div>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-button (click)=\"navigate('/my-cart', 3)\" expand=\"full\" color=\"light\">Add to cart</ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button expand=\"full\">Buy now</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ "./src/app/item-details/item-details-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/item-details/item-details-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ItemDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsPageRoutingModule", function() { return ItemDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _item_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-details.page */ "./src/app/item-details/item-details.page.ts");




const routes = [
    {
        path: '',
        component: _item_details_page__WEBPACK_IMPORTED_MODULE_3__["ItemDetailsPage"]
    }
];
let ItemDetailsPageRoutingModule = class ItemDetailsPageRoutingModule {
};
ItemDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ItemDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/item-details/item-details.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/item-details/item-details.module.ts ***!
  \*****************************************************/
/*! exports provided: ItemDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsPageModule", function() { return ItemDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _item_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-details-routing.module */ "./src/app/item-details/item-details-routing.module.ts");
/* harmony import */ var _item_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-details.page */ "./src/app/item-details/item-details.page.ts");







let ItemDetailsPageModule = class ItemDetailsPageModule {
};
ItemDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _item_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["ItemDetailsPageRoutingModule"]
        ],
        declarations: [_item_details_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsPage"]]
    })
], ItemDetailsPageModule);



/***/ }),

/***/ "./src/app/item-details/item-details.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/item-details/item-details.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backbtn {\n  margin-left: 15px;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\nion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.item-name {\n  color: #2a2a2a;\n}\n\n.price {\n  color: var(--ion-color-primary);\n}\n\n.price span {\n  color: #2a2a2a;\n  text-decoration: line-through;\n  margin-left: 20px;\n  font-size: medium;\n  vertical-align: top;\n}\n\n.seperator hr {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  background: #e2e2e2;\n}\n\n.review {\n  margin-top: 16px;\n  color: #2a2a2a;\n}\n\n.review .rating {\n  display: inline-block;\n  color: #ffffff;\n  background: var(--ion-color-primary);\n  padding: 10px 20px 10px 20px;\n  border-radius: 5px;\n  margin-right: 10px;\n}\n\n.review .count {\n  height: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  color: var(--ion-color-primary);\n}\n\n.description h5 {\n  color: #2a2a2a;\n  padding-top: 10px;\n}\n\n.description p {\n  color: #656565;\n}\n\n.variation {\n  padding-top: 16px;\n}\n\n.variation ion-segment-button {\n  color: #2a2a2a;\n}\n\n.variation-selector {\n  margin-top: 30px;\n  display: flex;\n  position: relative;\n}\n\n.variation-selector .active-variation {\n  opacity: 1 !important;\n  z-index: 1 !important;\n}\n\n.variation-selector .sizes {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  opacity: 0;\n  z-index: 0;\n  padding-bottom: 30px;\n}\n\n.variation-selector .sizes div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #f3f3f3;\n  width: 50px;\n  height: 50px;\n  margin-right: 8px;\n  transition: 0.5s ease-in-out;\n}\n\n.variation-selector .sizes .active {\n  color: #ffffff;\n  background-color: var(--ion-color-primary);\n}\n\n.variation-selector .colors {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  opacity: 0;\n  z-index: 0;\n  padding-bottom: 30px;\n}\n\n.variation-selector .colors div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #f3f3f3;\n  width: 70px;\n  height: 50px;\n  margin-right: 8px;\n  transition: 0.5s ease-in-out;\n}\n\n.variation-selector .colors .active {\n  color: #ffffff;\n  background-color: var(--ion-color-primary);\n}\n\nion-footer ion-row {\n  padding: 0;\n}\n\nion-footer ion-row ion-col {\n  padding: 0;\n}\n\nion-footer ion-row ion-col ion-button {\n  margin: 0;\n  height: 50px;\n  font-size: 18px;\n  box-shadow: none;\n}\n\n.footer-md::before {\n  background-image: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS1kZXRhaWxzL2l0ZW0tZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtBQUNKOztBQUNJO0VBQ0ksY0FBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ1I7O0FBSUk7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFEUjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUlJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFGUjs7QUFLSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FBSFI7O0FBUUk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFMUjs7QUFRSTtFQUNJLGNBQUE7QUFOUjs7QUFVQTtFQUNJLGlCQUFBO0FBUEo7O0FBU0k7RUFDSSxjQUFBO0FBUFI7O0FBV0E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQVJKOztBQVVJO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtBQVJSOztBQVdJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBVFI7O0FBV1E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FBVFo7O0FBWVE7RUFDSSxjQUFBO0VBQ0EsMENBQUE7QUFWWjs7QUFjSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQVpSOztBQWNRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQVpaOztBQWVRO0VBQ0ksY0FBQTtFQUNBLDBDQUFBO0FBYlo7O0FBbUJJO0VBQ0ksVUFBQTtBQWhCUjs7QUFrQlE7RUFDSSxVQUFBO0FBaEJaOztBQWtCWTtFQUNJLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBaEJoQjs7QUF1QkE7RUFDSSxpQ0FBQTtBQXBCSiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tZGV0YWlscy9pdGVtLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tidG4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyNnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDI2cHg7XG59XG5cbi5pdGVtLW5hbWUge1xuICAgIGNvbG9yOiAjMmEyYTJhO1xufVxuXG4ucHJpY2Uge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6ICMyYTJhMmE7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgfVxufVxuXG4uc2VwZXJhdG9yIHtcbiAgICBociB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlMmUyZTI7XG4gICAgfVxufVxuXG4ucmV2aWV3IHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuXG4gICAgLnJhdGluZyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLmNvdW50IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBoNSB7XG4gICAgICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgY29sb3I6ICM2NTY1NjU7XG4gICAgfVxufVxuXG4udmFyaWF0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcblxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIH1cbn1cblxuLnZhcmlhdGlvbi1zZWxlY3RvciB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5hY3RpdmUtdmFyaWF0aW9uIHtcbiAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAgICAgICB6LWluZGV4OiAxICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnNpemVzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb2xvcnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG5cbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgICBpb24tcm93IHtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFRoaXMgd2lsbCByZW1vdmUgZm9vdGVyIHNoYWRvdyBvbiBhbmRyb2lkXG4uZm9vdGVyLW1kOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/item-details/item-details.page.ts":
/*!***************************************************!*\
  !*** ./src/app/item-details/item-details.page.ts ***!
  \***************************************************/
/*! exports provided: ItemDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsPage", function() { return ItemDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let ItemDetailsPage = class ItemDetailsPage {
    constructor(animatioCntrl, router) {
        this.animatioCntrl = animatioCntrl;
        this.router = router;
        this.selectedIndex = 0;
    }
    ngOnInit() {
        this.activeVariation = 'size';
    }
    segmentChanged(e) {
        this.activeVariation = e.detail.value;
        if (this.activeVariation == 'color') {
            this.animatioCntrl.create()
                .addElement(document.querySelector('.sizes'))
                .duration(500)
                .iterations(1)
                .fromTo('transform', 'translateX(0px)', 'translateX(100%)')
                .fromTo('opacity', '1', '0.2')
                .play();
            this.animatioCntrl.create()
                .addElement(document.querySelector('.colors'))
                .duration(500)
                .iterations(1)
                .fromTo('transform', 'translateX(-100%)', 'translateX(0)')
                .fromTo('opacity', '0.2', '1')
                .play();
        }
        else {
            this.animatioCntrl.create()
                .addElement(document.querySelector('.sizes'))
                .duration(500)
                .iterations(1)
                .fromTo('transform', 'translateX(100%)', 'translateX(0)')
                .fromTo('opacity', '0.2', '1')
                .play();
            this.animatioCntrl.create()
                .addElement(document.querySelector('.colors'))
                .duration(500)
                .iterations(1)
                .fromTo('transform', 'translateX(0px)', 'translateX(-100%)')
                .fromTo('opacity', '1', '0.2')
                .play();
        }
    }
    changeSize(size) {
        this.selectedSize = size;
    }
    changeColor(color) {
        this.selectedColor = color;
    }
    navigate(path, selectedId) {
        this.selectedIndex = selectedId;
        this.router.navigate([path]);
    }
};
ItemDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AnimationController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ItemDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/item-details/item-details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-details.page.scss */ "./src/app/item-details/item-details.page.scss")).default]
    })
], ItemDetailsPage);



/***/ })

}]);
//# sourceMappingURL=item-details-item-details-module-es2015.js.map