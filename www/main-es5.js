(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\" [disabled]=\"!isMenuEnabled\">\n      <ion-content>\n        <div class=\"main-list\">\n          <ion-list id=\"inbox-list\">\n\n            <ion-menu-toggle auto-hide=\"false\">\n              \n              <ion-item *ngFor=\"let menuItem of appPages; let i = index\" lines=\"none\" (click)=\"navigate(menuItem.url, index)\" detail=\"false\" class=\"ion-text-center\" [class.selected]=\"selectedIndex == 1\">\n                <ion-label>{{ menuItem.title }}</ion-label>\n              </ion-item>\n            </ion-menu-toggle>\n            \n          </ion-list>\n\n          <!-- Close Button -->\n          <ion-button fill=\"clear\" color=\"dark\" (click)=\"close()\">\n            <ion-icon name=\"close-circle-outline\"></ion-icon>\n          </ion-button>\n        </div>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
      }, {
        path: 'folder/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | folder-folder-module */
          "folder-folder-module").then(__webpack_require__.bind(null,
          /*! ./folder/folder.module */
          "./src/app/folder/folder.module.ts")).then(function (m) {
            return m.FolderPageModule;
          });
        }
      }, {
        path: 'welcome',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | welcome-welcome-module */
          "welcome-welcome-module").then(__webpack_require__.bind(null,
          /*! ./welcome/welcome.module */
          "./src/app/welcome/welcome.module.ts")).then(function (m) {
            return m.WelcomePageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | login-login-module */
          [__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "./src/app/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'signup',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | signup-signup-module */
          [__webpack_require__.e("common"), __webpack_require__.e("signup-signup-module")]).then(__webpack_require__.bind(null,
          /*! ./signup/signup.module */
          "./src/app/signup/signup.module.ts")).then(function (m) {
            return m.SignupPageModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | home-home-module */
          [__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "./src/app/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'item-details',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | item-details-item-details-module */
          "item-details-item-details-module").then(__webpack_require__.bind(null,
          /*! ./item-details/item-details.module */
          "./src/app/item-details/item-details.module.ts")).then(function (m) {
            return m.ItemDetailsPageModule;
          });
        }
      }, {
        path: 'my-cart',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | my-cart-my-cart-module */
          "my-cart-my-cart-module").then(__webpack_require__.bind(null,
          /*! ./my-cart/my-cart.module */
          "./src/app/my-cart/my-cart.module.ts")).then(function (m) {
            return m.MyCartPageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | profile-profile-module */
          "profile-profile-module").then(__webpack_require__.bind(null,
          /*! ./profile/profile.module */
          "./src/app/profile/profile.module.ts")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'my-orders',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | my-orders-my-orders-module */
          "my-orders-my-orders-module").then(__webpack_require__.bind(null,
          /*! ./my-orders/my-orders.module */
          "./src/app/my-orders/my-orders.module.ts")).then(function (m) {
            return m.MyOrdersPageModule;
          });
        }
      }, {
        path: 'favorite',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | favorite-favorite-module */
          "favorite-favorite-module").then(__webpack_require__.bind(null,
          /*! ./favorite/favorite.module */
          "./src/app/favorite/favorite.module.ts")).then(function (m) {
            return m.FavoritePageModule;
          });
        }
      }, {
        path: 'checkout',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | checkout-checkout-module */
          "checkout-checkout-module").then(__webpack_require__.bind(null,
          /*! ./checkout/checkout.module */
          "./src/app/checkout/checkout.module.ts")).then(function (m) {
            return m.CheckoutPageModule;
          });
        }
      }, {
        path: 'confirm',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | confirm-confirm-module */
          "confirm-confirm-module").then(__webpack_require__.bind(null,
          /*! ./confirm/confirm.module */
          "./src/app/confirm/confirm.module.ts")).then(function (m) {
            return m.ConfirmPageModule;
          });
        }
      }, {
        path: 'category-list',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | shared-components-category-listing-category-detail-list-category-detail-list-module */
          [__webpack_require__.e("common"), __webpack_require__.e("shared-components-category-listing-category-detail-list-category-detail-list-module")]).then(__webpack_require__.bind(null,
          /*! ./shared-components/category-listing/category-detail-list/category-detail-list.module */
          "./src/app/shared-components/category-listing/category-detail-list/category-detail-list.module.ts")).then(function (m) {
            return m.CategoryDetailListPageModule;
          });
        }
      }, {
        path: 'category-detail-list',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | shared-components-category-listing-category-detail-list-category-detail-list-module */
          [__webpack_require__.e("common"), __webpack_require__.e("shared-components-category-listing-category-detail-list-category-detail-list-module")]).then(__webpack_require__.bind(null,
          /*! ./shared-components/category-listing/category-detail-list/category-detail-list.module */
          "./src/app/shared-components/category-listing/category-detail-list/category-detail-list.module.ts")).then(function (m) {
            return m.CategoryDetailListPageModule;
          });
        }
      }, {
        path: 'product-listing',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | shared-components-product-listing-product-listing-module */
          [__webpack_require__.e("common"), __webpack_require__.e("shared-components-product-listing-product-listing-module")]).then(__webpack_require__.bind(null,
          /*! ./shared-components/product-listing/product-listing.module */
          "./src/app/shared-components/product-listing/product-listing.module.ts")).then(function (m) {
            return m.ProductListingPageModule;
          });
        }
      }, {
        path: 'category-all',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | shared-components-category-listing-category-all-category-all-module */
          [__webpack_require__.e("common"), __webpack_require__.e("shared-components-category-listing-category-all-category-all-module")]).then(__webpack_require__.bind(null,
          /*! ./shared-components/category-listing/category-all/category-all.module */
          "./src/app/shared-components/category-listing/category-all/category-all.module.ts")).then(function (m) {
            return m.CategoryAllPageModule;
          });
        }
      }, {
        path: 'employees',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | employees-employees-module */
          [__webpack_require__.e("common"), __webpack_require__.e("employees-employees-module")]).then(__webpack_require__.bind(null,
          /*! ./employees/employees.module */
          "./src/app/employees/employees.module.ts")).then(function (m) {
            return m.EmployeesPageModule;
          });
        }
      }, {
        path: 'users',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | users-users-module */
          [__webpack_require__.e("common"), __webpack_require__.e("users-users-module")]).then(__webpack_require__.bind(null,
          /*! ./users/users.module */
          "./src/app/users/users.module.ts")).then(function (m) {
            return m.UsersPageModule;
          });
        }
      }, {
        path: 'employee-details/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | employee-details-employee-details-module */
          [__webpack_require__.e("common"), __webpack_require__.e("employee-details-employee-details-module")]).then(__webpack_require__.bind(null,
          /*! ./employee-details/employee-details.module */
          "./src/app/employee-details/employee-details.module.ts")).then(function (m) {
            return m.EmployeeDetailsPageModule;
          });
        }
      }, {
        path: 'spin-wheel',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | spin-wheel-spin-wheel-module */
          "spin-wheel-spin-wheel-module").then(__webpack_require__.bind(null,
          /*! ./spin-wheel/spin-wheel.module */
          "./src/app/spin-wheel/spin-wheel.module.ts")).then(function (m) {
            return m.SpinWheelPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu {\n  --width: 100%;\n}\n\n.main-list {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.main-list ion-list {\n  width: 100%;\n}\n\n.main-list ion-list ion-item {\n  font-size: 18px;\n  font-weight: 100;\n}\n\n.main-list ion-list .selected {\n  border-left: 5px solid var(--ion-color-primary);\n  color: var(--ion-color-primary);\n}\n\n.main-list ion-button {\n  position: absolute;\n  bottom: 10%;\n  right: 10%;\n  font-size: 24px;\n  --ripple-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxXQUFBO0FBQ0o7O0FBQ0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDTjs7QUFFSTtFQUNFLCtDQUFBO0VBQ0EsK0JBQUE7QUFBTjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUFGSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IHtcbiAgLS13aWR0aDogMTAwJTtcbn1cblxuLm1haW4tbGlzdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaW9uLWxpc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICB9XG5cbiAgICAuc2VsZWN0ZWQge1xuICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwJTtcbiAgICByaWdodDogMTAlO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./util.service */
      "./src/app/util.service.ts");
      /* harmony import */


      var _ionic_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/core */
      "./node_modules/@ionic/core/dist/esm/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, util, router) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.util = util;
          this.router = router;
          this.isMenuEnabled = true;
          this.selectedIndex = 0;
          this.appPages = [{
            title: 'Home',
            url: '/home'
          }, {
            title: 'Profile',
            url: '/profile'
          }, {
            title: 'My Cart',
            url: '/my-cart'
          }, {
            title: 'Favorite',
            url: '/favorite'
          }, {
            title: 'My Orders',
            url: '/my-orders'
          }, {
            title: 'Spin Wheel',
            url: '/spin-wheel'
          } // ,
          // {
          //   title: 'Employees',
          //   url: '/employees'
          // },
          // {
          //   title: 'Users',
          //   url: '/users'
          // }
          ];
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            localStorage.removeItem("user");
            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.selectedIndex = 1;
            this.util.getMenuState().subscribe(function (menuState) {
              _this2.isMenuEnabled = menuState;
            });
          }
        }, {
          key: "navigate",
          value: function navigate(path, selectedId) {
            this.selectedIndex = selectedId;
            this.router.navigate([path]);
          }
        }, {
          key: "close",
          value: function close() {
            _ionic_core__WEBPACK_IMPORTED_MODULE_6__["menuController"].toggle();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _interceptors_auth_interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./interceptors/auth-interceptor/auth-interceptor */
      "./src/app/interceptors/auth-interceptor/auth-interceptor.ts");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire */
      "./node_modules/@angular/fire/__ivy_ngcc__/es2015/index.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/database/es2015/index.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
      /* harmony import */


      var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../environments/environment.prod */
      "./src/environments/environment.prod.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/service-worker */
      "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_15__["environment"].firebaseConfig), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_16__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__["ServiceWorkerModule"].register('ngsw-worker.js', {
          enabled: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_15__["environment"].production
        })],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestore"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_auth_interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"],
          multi: true
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/interceptors/auth-interceptor/auth-interceptor.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/interceptors/auth-interceptor/auth-interceptor.ts ***!
      \*******************************************************************/

    /*! exports provided: AuthInterceptor */

    /***/
    function srcAppInterceptorsAuthInterceptorAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor() {
          _classCallCheck(this, AuthInterceptor);
        }

        _createClass(AuthInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var params = {
              'consumer_key': 'ck_46a686785baa6cc6220bad248fe4991cbc3045c6',
              'consumer_secret': 'cs_0b7b8be8e199c771656da5ceaeb64acbace8976d'
            };
            request = request.clone({
              url: 'https://khareedlay.pk/wp-json/wc/v3/'.concat(request.url),
              setParams: params
            });
            return next.handle(request);
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.ctorParameters = function () {
        return [];
      };

      AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
      /***/
    },

    /***/
    "./src/app/util.service.ts":
    /*!*********************************!*\
      !*** ./src/app/util.service.ts ***!
      \*********************************/

    /*! exports provided: UtilService */

    /***/
    function srcAppUtilServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilService", function () {
        return UtilService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var UtilService = /*#__PURE__*/function () {
        function UtilService() {
          _classCallCheck(this, UtilService);

          this.isMenuEnabled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        } // Creating method to handle Side Menu State (Enabled or Disabeld)


        _createClass(UtilService, [{
          key: "setMenuState",
          value: function setMenuState(enabled) {
            this.isMenuEnabled.next(enabled);
          } // Method for get the Menu State

        }, {
          key: "getMenuState",
          value: function getMenuState() {
            return this.isMenuEnabled;
          }
        }]);

        return UtilService;
      }();

      UtilService.ctorParameters = function () {
        return [];
      };

      UtilService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UtilService);
      /***/
    },

    /***/
    "./src/environments/environment.prod.ts":
    /*!**********************************************!*\
      !*** ./src/environments/environment.prod.ts ***!
      \**********************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: true,
        firebaseConfig: {
          apiKey: "AIzaSyDOd6mtyQCDdSayezZXYnbZIZhgkc5ykNw",
          authDomain: "khareedly-d72b2.firebaseapp.com",
          projectId: "khareedly-d72b2",
          storageBucket: "khareedly-d72b2.appspot.com",
          messagingSenderId: "509261173488",
          appId: "1:509261173488:web:653efa1485fb5937702835",
          measurementId: "G-XRXN75FSFV"
        }
      };
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\usama-temp\kz\2\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map