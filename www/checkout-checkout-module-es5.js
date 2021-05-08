(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCheckoutCheckoutPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-buttons class=\"backbtn\" routerLink=\"/home\" routerDirection=\"back\">\n        <img src=\"../../assets/back-dark.svg\" />\n      </ion-buttons>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"notification\">\n        <ion-icon name=\"notifications-outline\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <h1 class=\"title\">Checkout</h1>\n\n  <div class=\"cart-items\">\n    <ion-card mode=\"ios\">\n      <ion-card-content>\n        <div class=\"item-img\">\n          <img src=\"../../assets/cart/cart1.png\" />\n        </div>\n\n        <div class=\"item-info\">\n          <p>Women t-shirt</p>\n          <p>Lotto.LTD</p>\n          <p>$34.00</p>\n\n          <div class=\"qty-selector\">\n            <ion-button fill=\"clear\">-</ion-button>\n            <ion-label>1</ion-label>\n            <ion-button fill=\"clear\">+</ion-button>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card mode=\"ios\">\n      <ion-card-content>\n        <div class=\"item-img\">\n          <img src=\"../../assets/cart/cart2.png\" />\n        </div>\n\n        <div class=\"item-info\">\n          <p>Female t-shirt</p>\n          <p>Bata</p>\n          <p>$44.00</p>\n\n          <div class=\"qty-selector\">\n            <ion-button fill=\"clear\">-</ion-button>\n            <ion-label>1</ion-label>\n            <ion-button fill=\"clear\">+</ion-button>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <div class=\"address\">\n    <ion-item lines=\"none\">\n      37/6 A, Moratuwa, Sri Lanka\n      <ion-badge slot=\"end\">&nbsp;</ion-badge>\n    </ion-item>\n  </div>\n\n  <hr>\n\n  <div class=\"cart-total\">\n    <ion-item lines=\"none\">\n      <ion-label>Sub Total</ion-label>\n      <ion-label slot=\"end\" class=\"ion-text-right\">$160.00</ion-label>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label>Discount</ion-label>\n      <ion-label slot=\"end\" class=\"ion-text-right\">5%</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Shipping</ion-label>\n      <ion-label slot=\"end\" class=\"ion-text-right\">$10.00</ion-label>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label>Total</ion-label>\n      <ion-label slot=\"end\" class=\"ion-text-right\">$162.00</ion-label>\n    </ion-item>\n  </div>\n</ion-content>\n<ion-footer translucent=\"true\" class=\"ion-no-border\" mode=\"md\">\n  <ion-toolbar color=\"translucent\">\n    <ion-button expand=\"block\" class=\"main-button\" routerLink=\"/confirm\" routerDirection=\"forward\">Buy</ion-button>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/checkout/checkout-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/checkout/checkout-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: CheckoutPageRoutingModule */

    /***/
    function srcAppCheckoutCheckoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutPageRoutingModule", function () {
        return CheckoutPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _checkout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./checkout.page */
      "./src/app/checkout/checkout.page.ts");

      var routes = [{
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_3__["CheckoutPage"]
      }];

      var CheckoutPageRoutingModule = function CheckoutPageRoutingModule() {
        _classCallCheck(this, CheckoutPageRoutingModule);
      };

      CheckoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CheckoutPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/checkout/checkout.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/checkout/checkout.module.ts ***!
      \*********************************************/

    /*! exports provided: CheckoutPageModule */

    /***/
    function srcAppCheckoutCheckoutModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function () {
        return CheckoutPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./checkout-routing.module */
      "./src/app/checkout/checkout-routing.module.ts");
      /* harmony import */


      var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./checkout.page */
      "./src/app/checkout/checkout.page.ts");

      var CheckoutPageModule = function CheckoutPageModule() {
        _classCallCheck(this, CheckoutPageModule);
      };

      CheckoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutPageRoutingModule"]],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
      })], CheckoutPageModule);
      /***/
    },

    /***/
    "./src/app/checkout/checkout.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/checkout/checkout.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppCheckoutCheckoutPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".backbtn {\n  margin-left: 15px;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\nion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.title {\n  margin-top: 0;\n  color: #434343;\n}\n\n.cart-items ion-card {\n  margin-left: 0;\n  margin-right: 0;\n  border-radius: 0;\n}\n\n.cart-items ion-card ion-card-content {\n  display: flex;\n  position: relative;\n}\n\n.cart-items ion-card ion-card-content .item-img {\n  display: flex;\n  align-items: center;\n  margin-right: 16px;\n}\n\n.cart-items ion-card ion-card-content .item-img img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 110px;\n  height: 110px;\n  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.16);\n}\n\n.cart-items ion-card ion-card-content .item-info p {\n  font-size: 16px;\n}\n\n.cart-items ion-card ion-card-content .item-info p:nth-child(1) {\n  color: #434343;\n}\n\n.cart-items ion-card ion-card-content .item-info p:nth-child(2) {\n  color: #919191;\n}\n\n.cart-items ion-card ion-card-content .item-info p:nth-child(3) {\n  color: var(--ion-color-primary);\n}\n\n.cart-items ion-card ion-card-content .item-info .qty-selector {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f6f6f6;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n\n.cart-items ion-card ion-card-content .item-info .qty-selector ion-button {\n  --color: #565656;\n  font-size: 16px;\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.cart-items ion-card ion-card-content .item-info .qty-selector ion-label {\n  color: #565656 !important;\n  font-size: 16px;\n}\n\n.address ion-item {\n  --padding-start: 0;\n  font-size: 18px;\n  color: #434343;\n}\n\n.address ion-item ion-badge {\n  width: 12px;\n  height: 12px;\n  padding: 0;\n  border-radius: 50%;\n}\n\nhr {\n  background: #97979713;\n}\n\n.cart-total ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.cart-total ion-item ion-label {\n  margin-right: 0;\n}\n\n.cart-total ion-item ion-label:nth-child(1) {\n  color: #919191;\n}\n\n.cart-total ion-item ion-label:nth-child(2) {\n  color: #434343;\n}\n\nion-footer {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\nion-footer .main-button::after {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFHSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBUjs7QUFFUTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQUFaOztBQUVZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBaEI7O0FBRWdCO0VBQ0ksb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaURBQUE7QUFBcEI7O0FBS2dCO0VBQ0ksZUFBQTtBQUhwQjs7QUFNZ0I7RUFDSSxjQUFBO0FBSnBCOztBQU1nQjtFQUNJLGNBQUE7QUFKcEI7O0FBTWdCO0VBQ0ksK0JBQUE7QUFKcEI7O0FBT2dCO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFMcEI7O0FBT29CO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUx4Qjs7QUFRb0I7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUFOeEI7O0FBZUk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBWlI7O0FBY1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQVpaOztBQWlCQTtFQUNJLHFCQUFBO0FBZEo7O0FBa0JJO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtBQWZSOztBQWlCUTtFQUNJLGVBQUE7QUFmWjs7QUFrQlE7RUFDSSxjQUFBO0FBaEJaOztBQW1CUTtFQUNJLGNBQUE7QUFqQlo7O0FBc0JBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQW5CSjs7QUFxQkk7RUFDSSwyQkFBQTtBQW5CUiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrYnRuIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLXRvcDogMTZweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMjZweDtcbiAgICAtLXBhZGRpbmctZW5kOiAyNnB4O1xufVxuXG4udGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgY29sb3I6ICM0MzQzNDM7XG59XG5cbi5jYXJ0LWl0ZW1zIHtcbiAgICBpb24tY2FyZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG5cbiAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAuaXRlbS1pbWcge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG5cbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAzMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLml0ZW0taW5mbyB7XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDM0MzQzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTE5MTkxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnF0eS1zZWxlY3RvciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAtLWNvbG9yOiAjNTY1NjU2O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTY1NjU2ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hZGRyZXNzIHtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogIzQzNDM0MztcblxuICAgICAgICBpb24tYmFkZ2Uge1xuICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5ociB7XG4gICAgYmFja2dyb3VuZDogIzk3OTc5NzEzO1xufVxuXG4uY2FydC10b3RhbCB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1sYWJlbDpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgY29sb3I6ICM5MTkxOTE7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tbGFiZWw6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNDM0MzQzO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcblxuICAgIC5tYWluLWJ1dHRvbjo6YWZ0ZXIge1xuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/checkout/checkout.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/checkout/checkout.page.ts ***!
      \*******************************************/

    /*! exports provided: CheckoutPage */

    /***/
    function srcAppCheckoutCheckoutPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutPage", function () {
        return CheckoutPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CheckoutPage = /*#__PURE__*/function () {
        function CheckoutPage() {
          _classCallCheck(this, CheckoutPage);
        }

        _createClass(CheckoutPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CheckoutPage;
      }();

      CheckoutPage.ctorParameters = function () {
        return [];
      };

      CheckoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./checkout.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./checkout.page.scss */
        "./src/app/checkout/checkout.page.scss"))["default"]]
      })], CheckoutPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=checkout-checkout-module-es5.js.map