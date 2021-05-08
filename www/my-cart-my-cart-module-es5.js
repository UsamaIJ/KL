(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-cart-my-cart-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/my-cart/my-cart.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-cart/my-cart.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMyCartMyCartPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-buttons class=\"backbtn\" routerLink=\"/home\" routerDirection=\"back\">\n        <img src=\"../../assets/back-dark.svg\" />\n      </ion-buttons>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"notification\">\n        <ion-icon name=\"notifications-outline\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <h1 class=\"title\">Cart</h1>\n\n  <div class=\"cart-items\">\n    <ion-card mode=\"ios\">\n      <ion-card-content>\n        <div class=\"item-img\">\n          <img src=\"../../assets/cart/cart1.png\" />\n        </div>\n\n        <div class=\"item-info\">\n          <p>Women t-shirt</p>\n          <p>Lotto.LTD</p>\n          <p>$34.00</p>\n\n          <div class=\"qty-selector\">\n            <ion-button fill=\"clear\">-</ion-button>\n            <ion-label>1</ion-label>\n            <ion-button fill=\"clear\">+</ion-button>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card mode=\"ios\">\n      <ion-card-content>\n        <div class=\"item-img\">\n          <img src=\"../../assets/cart/cart2.png\" />\n        </div>\n\n        <div class=\"item-info\">\n          <p>Female t-shirt</p>\n          <p>Bata</p>\n          <p>$44.00</p>\n\n          <div class=\"qty-selector\">\n            <ion-button fill=\"clear\">-</ion-button>\n            <ion-label>1</ion-label>\n            <ion-button fill=\"clear\">+</ion-button>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card mode=\"ios\">\n      <ion-card-content>\n        <div class=\"item-img\">\n          <img src=\"../../assets/cart/cart3.png\" />\n        </div>\n\n        <div class=\"item-info\">\n          <p>Shirt</p>\n          <p>Next</p>\n          <p>$54.00</p>\n\n          <div class=\"qty-selector\">\n            <ion-button fill=\"clear\">-</ion-button>\n            <ion-label>1</ion-label>\n            <ion-button fill=\"clear\">+</ion-button>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card mode=\"ios\">\n      <ion-card-content>\n        <div class=\"item-img\">\n          <img src=\"../../assets/cart/cart4.png\" />\n        </div>\n\n        <div class=\"item-info\">\n          <p>Women shirt</p>\n          <p>Plus Point</p>\n          <p>$34.00</p>\n\n          <div class=\"qty-selector\">\n            <ion-button fill=\"clear\">-</ion-button>\n            <ion-label>1</ion-label>\n            <ion-button fill=\"clear\">+</ion-button>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card mode=\"ios\">\n      <ion-card-content>\n        <div class=\"item-img\">\n          <img src=\"../../assets/cart/cart5.png\" />\n        </div>\n\n        <div class=\"item-info\">\n          <p>Shirt</p>\n          <p>Cat's Eye</p>\n          <p>$44.00</p>\n\n          <div class=\"qty-selector\">\n            <ion-button fill=\"clear\">-</ion-button>\n            <ion-label>1</ion-label>\n            <ion-button fill=\"clear\">+</ion-button>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n<ion-footer translucent=\"true\" class=\"ion-no-border\" mode=\"md\">\n  <ion-toolbar color=\"translucent\">\n    <ion-button expand=\"block\" class=\"main-button\" routerLink=\"/checkout\" routerDirection=\"forward\">Continue</ion-button>\n  </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./src/app/my-cart/my-cart-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/my-cart/my-cart-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: MyCartPageRoutingModule */

    /***/
    function srcAppMyCartMyCartRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyCartPageRoutingModule", function () {
        return MyCartPageRoutingModule;
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


      var _my_cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./my-cart.page */
      "./src/app/my-cart/my-cart.page.ts");

      var routes = [{
        path: '',
        component: _my_cart_page__WEBPACK_IMPORTED_MODULE_3__["MyCartPage"]
      }];

      var MyCartPageRoutingModule = function MyCartPageRoutingModule() {
        _classCallCheck(this, MyCartPageRoutingModule);
      };

      MyCartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MyCartPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/my-cart/my-cart.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/my-cart/my-cart.module.ts ***!
      \*******************************************/

    /*! exports provided: MyCartPageModule */

    /***/
    function srcAppMyCartMyCartModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyCartPageModule", function () {
        return MyCartPageModule;
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


      var _my_cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./my-cart-routing.module */
      "./src/app/my-cart/my-cart-routing.module.ts");
      /* harmony import */


      var _my_cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./my-cart.page */
      "./src/app/my-cart/my-cart.page.ts");

      var MyCartPageModule = function MyCartPageModule() {
        _classCallCheck(this, MyCartPageModule);
      };

      MyCartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyCartPageRoutingModule"]],
        declarations: [_my_cart_page__WEBPACK_IMPORTED_MODULE_6__["MyCartPage"]]
      })], MyCartPageModule);
      /***/
    },

    /***/
    "./src/app/my-cart/my-cart.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/my-cart/my-cart.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppMyCartMyCartPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".backbtn {\n  margin-left: 15px;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\nion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.title {\n  margin-top: 0;\n  color: #434343;\n}\n\n.cart-items ion-card {\n  margin-left: 0;\n  margin-right: 0;\n  border-radius: 0;\n}\n\n.cart-items ion-card ion-card-content {\n  display: flex;\n  position: relative;\n}\n\n.cart-items ion-card ion-card-content .item-img {\n  display: flex;\n  align-items: center;\n  margin-right: 16px;\n}\n\n.cart-items ion-card ion-card-content .item-img img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 110px;\n  height: 110px;\n  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.16);\n}\n\n.cart-items ion-card ion-card-content .item-info p {\n  font-size: 16px;\n}\n\n.cart-items ion-card ion-card-content .item-info p:nth-child(1) {\n  color: #434343;\n}\n\n.cart-items ion-card ion-card-content .item-info p:nth-child(2) {\n  color: #919191;\n}\n\n.cart-items ion-card ion-card-content .item-info p:nth-child(3) {\n  color: var(--ion-color-primary);\n}\n\n.cart-items ion-card ion-card-content .item-info .qty-selector {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f6f6f6;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n\n.cart-items ion-card ion-card-content .item-info .qty-selector ion-button {\n  --color: #565656;\n  font-size: 16px;\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.cart-items ion-card ion-card-content .item-info .qty-selector ion-label {\n  color: #565656 !important;\n  font-size: 16px;\n}\n\nion-footer {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\nion-footer .main-button::after {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktY2FydC9teS1jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBR0k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQVI7O0FBRVE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUFBWjs7QUFFWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQWhCOztBQUVnQjtFQUNJLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlEQUFBO0FBQXBCOztBQUtnQjtFQUNJLGVBQUE7QUFIcEI7O0FBTWdCO0VBQ0ksY0FBQTtBQUpwQjs7QUFNZ0I7RUFDSSxjQUFBO0FBSnBCOztBQU1nQjtFQUNJLCtCQUFBO0FBSnBCOztBQU9nQjtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTHBCOztBQU9vQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFMeEI7O0FBUW9CO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FBTnhCOztBQWNBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQVhKOztBQWFJO0VBQ0ksMkJBQUE7QUFYUiIsImZpbGUiOiJzcmMvYXBwL215LWNhcnQvbXktY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2J0biB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5ub3RpZmljYXRpb24ge1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDI2cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMjZweDtcbn1cblxuLnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGNvbG9yOiAjNDM0MzQzO1xufVxuXG4uY2FydC1pdGVtcyB7XG4gICAgaW9uLWNhcmQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuXG4gICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgLml0ZW0taW1nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMzBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pdGVtLWluZm8ge1xuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcDpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQzNDM0MztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcDpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzkxOTE5MTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcDpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5xdHktc2VsZWN0b3Ige1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLS1jb2xvcjogIzU2NTY1NjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU2NTY1NiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcblxuICAgIC5tYWluLWJ1dHRvbjo6YWZ0ZXIge1xuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/my-cart/my-cart.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/my-cart/my-cart.page.ts ***!
      \*****************************************/

    /*! exports provided: MyCartPage */

    /***/
    function srcAppMyCartMyCartPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyCartPage", function () {
        return MyCartPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MyCartPage = /*#__PURE__*/function () {
        function MyCartPage() {
          _classCallCheck(this, MyCartPage);
        }

        _createClass(MyCartPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MyCartPage;
      }();

      MyCartPage.ctorParameters = function () {
        return [];
      };

      MyCartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-cart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./my-cart.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/my-cart/my-cart.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./my-cart.page.scss */
        "./src/app/my-cart/my-cart.page.scss"))["default"]]
      })], MyCartPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=my-cart-my-cart-module-es5.js.map