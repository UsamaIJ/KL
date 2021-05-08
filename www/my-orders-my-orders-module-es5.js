(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-orders-my-orders-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/my-orders/my-orders.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-orders/my-orders.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMyOrdersMyOrdersPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" class=\"backbtn\" routerLink=\"/home\" routerDirection=\"back\">\n        <img src='../../assets/back-dark.svg' />\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"notification\">\n        <ion-icon name=\"notifications-outline\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1 class=\"title\">My Orders</h1>\n\n  <div class=\"order-items\">\n    <ion-card mode=\"ios\">\n      <ion-card-content>\n        <div class=\"item-img\">\n          <img src='../../assets/cart/cart1.png' />\n        </div>\n\n        <div class=\"item-info\">\n          <p>Women t-shirt</p>\n          <p>Lotto.LTD</p>\n          <p>$34.00</p>\n\n          <ion-button expand=\"block\" class=\"main-button\">Order Again</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card mode=\"ios\">\n      <ion-card-content>\n        <div class=\"item-img\">\n          <img src='../../assets/cart/cart2.png' />\n        </div>\n\n        <div class=\"item-info\">\n          <p>Female t-shirt</p>\n          <p>Bata</p>\n          <p>$44.00</p>\n\n          <ion-button expand=\"block\" class=\"main-button\">Order Again</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card mode=\"ios\">\n      <ion-card-content>\n        <div class=\"item-img\">\n          <img src='../../assets/cart/cart3.png' />\n        </div>\n\n        <div class=\"item-info\">\n          <p>Shirt</p>\n          <p>Next</p>\n          <p>$30.00</p>\n\n          <ion-button expand=\"block\" class=\"main-button\">Order Again</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card mode=\"ios\">\n      <ion-card-content>\n        <div class=\"item-img\">\n          <img src='../../assets/cart/cart4.png' />\n        </div>\n\n        <div class=\"item-info\">\n          <p>Women shirt</p>\n          <p>Plus Point</p>\n          <p>$54.00</p>\n\n          <ion-button expand=\"block\" class=\"main-button\">Order Again</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card mode=\"ios\">\n      <ion-card-content>\n        <div class=\"item-img\">\n          <img src='../../assets/cart/cart5.png' />\n        </div>\n\n        <div class=\"item-info\">\n          <p>Shirt</p>\n          <p>Cat's Eye</p>\n          <p>$50.00</p>\n\n          <ion-button expand=\"block\" class=\"main-button\">Order Again</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/my-orders/my-orders-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/my-orders/my-orders-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: MyOrdersPageRoutingModule */

    /***/
    function srcAppMyOrdersMyOrdersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyOrdersPageRoutingModule", function () {
        return MyOrdersPageRoutingModule;
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


      var _my_orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./my-orders.page */
      "./src/app/my-orders/my-orders.page.ts");

      var routes = [{
        path: '',
        component: _my_orders_page__WEBPACK_IMPORTED_MODULE_3__["MyOrdersPage"]
      }];

      var MyOrdersPageRoutingModule = function MyOrdersPageRoutingModule() {
        _classCallCheck(this, MyOrdersPageRoutingModule);
      };

      MyOrdersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MyOrdersPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/my-orders/my-orders.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/my-orders/my-orders.module.ts ***!
      \***********************************************/

    /*! exports provided: MyOrdersPageModule */

    /***/
    function srcAppMyOrdersMyOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyOrdersPageModule", function () {
        return MyOrdersPageModule;
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


      var _my_orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./my-orders-routing.module */
      "./src/app/my-orders/my-orders-routing.module.ts");
      /* harmony import */


      var _my_orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./my-orders.page */
      "./src/app/my-orders/my-orders.page.ts");

      var MyOrdersPageModule = function MyOrdersPageModule() {
        _classCallCheck(this, MyOrdersPageModule);
      };

      MyOrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyOrdersPageRoutingModule"]],
        declarations: [_my_orders_page__WEBPACK_IMPORTED_MODULE_6__["MyOrdersPage"]]
      })], MyOrdersPageModule);
      /***/
    },

    /***/
    "./src/app/my-orders/my-orders.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/my-orders/my-orders.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppMyOrdersMyOrdersPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".backbtn {\n  margin-left: 15px;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\nion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.title {\n  margin-top: 0;\n  color: #434343;\n}\n\n.order-items ion-card {\n  margin-left: 0;\n  margin-right: 0;\n  border-radius: 0;\n}\n\n.order-items ion-card ion-card-content {\n  display: flex;\n  position: relative;\n}\n\n.order-items ion-card ion-card-content .item-img {\n  display: flex;\n  align-items: center;\n  margin-right: 16px;\n}\n\n.order-items ion-card ion-card-content .item-img img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 110px;\n  height: 110px;\n  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.16);\n}\n\n.order-items ion-card ion-card-content .item-info p {\n  font-size: 16px;\n}\n\n.order-items ion-card ion-card-content .item-info p:nth-child(1) {\n  color: #434343;\n}\n\n.order-items ion-card ion-card-content .item-info p:nth-child(2) {\n  color: #919191;\n}\n\n.order-items ion-card ion-card-content .item-info p:nth-child(3) {\n  color: var(--ion-color-primary);\n}\n\n.order-items ion-card ion-card-content .item-info .main-button {\n  --border-radius: 5px;\n  margin: 10px 0 0 0;\n}\n\n.order-items ion-card ion-card-content .item-info .main-button::after {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktb3JkZXJzL215LW9yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUdJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFSOztBQUVRO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBQVo7O0FBRVk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFoQjs7QUFFZ0I7RUFDSSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpREFBQTtBQUFwQjs7QUFLZ0I7RUFDSSxlQUFBO0FBSHBCOztBQU1nQjtFQUNJLGNBQUE7QUFKcEI7O0FBTWdCO0VBQ0ksY0FBQTtBQUpwQjs7QUFNZ0I7RUFDSSwrQkFBQTtBQUpwQjs7QUFPZ0I7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FBTHBCOztBQVFnQjtFQUNJLDJCQUFBO0FBTnBCIiwiZmlsZSI6InNyYy9hcHAvbXktb3JkZXJzL215LW9yZGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2J0biB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5ub3RpZmljYXRpb24ge1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDI2cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMjZweDtcbn1cblxuLnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGNvbG9yOiAjNDM0MzQzO1xufVxuXG4ub3JkZXItaXRlbXMge1xuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcblxuICAgICAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgIC5pdGVtLWltZyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDMwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaXRlbS1pbmZvIHtcbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHA6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MzQzNDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHA6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5MTkxOTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHA6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubWFpbi1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5tYWluLWJ1dHRvbjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/my-orders/my-orders.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/my-orders/my-orders.page.ts ***!
      \*********************************************/

    /*! exports provided: MyOrdersPage */

    /***/
    function srcAppMyOrdersMyOrdersPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyOrdersPage", function () {
        return MyOrdersPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MyOrdersPage = /*#__PURE__*/function () {
        function MyOrdersPage() {
          _classCallCheck(this, MyOrdersPage);
        }

        _createClass(MyOrdersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MyOrdersPage;
      }();

      MyOrdersPage.ctorParameters = function () {
        return [];
      };

      MyOrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-orders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./my-orders.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/my-orders/my-orders.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./my-orders.page.scss */
        "./src/app/my-orders/my-orders.page.scss"))["default"]]
      })], MyOrdersPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=my-orders-my-orders-module-es5.js.map