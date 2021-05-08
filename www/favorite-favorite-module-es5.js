(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorite-favorite-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/favorite/favorite.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorite/favorite.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFavoriteFavoritePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" class=\"backbtn\" routerLink=\"/home\" routerDirection=\"back\">\n        <img src='../../assets/back-dark.svg' />\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"notification\">\n        <ion-icon name=\"notifications-outline\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1 class=\"title\">Favorite</h1>\n\n  <ion-row class=\"favorite-items\">\n    <ion-col size=\"6\" class=\"ion-text-left padding-left0\">\n      <img src=\"../../assets/products/prod-1.png\" />\n      <p>$34.00</p>\n      <h6>Women t-shirt</h6>\n    </ion-col>\n    <ion-col size=\"6\" class=\"ion-text-left padding-right0\">\n      <img src=\"../../assets/products/prod-2.png\" />\n      <p>$24.00</p>\n      <h6>Mens t-shirt</h6>\n    </ion-col>\n    <ion-col size=\"6\" class=\"ion-text-left padding-left0\">\n      <img src=\"../../assets/products/prod-3.png\" />\n      <p>$54.00</p>\n      <h6>Women t-shirt</h6>\n    </ion-col>\n    <ion-col size=\"6\" class=\"ion-text-left padding-right0\">\n      <img src=\"../../assets/products/prod-4.png\" />\n      <p>$44.00</p>\n      <h6>Blezer</h6>\n    </ion-col>\n    <ion-col size=\"6\" class=\"ion-text-left padding-left0\">\n      <img src=\"../../assets/products/prod-5.png\" />\n      <p>$14.00</p>\n      <h6>T-shirt</h6>\n    </ion-col>\n    <ion-col size=\"6\" class=\"ion-text-left padding-right0\">\n      <img src=\"../../assets/products/prod-6.png\" />\n      <p>$30.00</p>\n      <h6>Shirt</h6>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/favorite/favorite-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/favorite/favorite-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: FavoritePageRoutingModule */

    /***/
    function srcAppFavoriteFavoriteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoritePageRoutingModule", function () {
        return FavoritePageRoutingModule;
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


      var _favorite_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./favorite.page */
      "./src/app/favorite/favorite.page.ts");

      var routes = [{
        path: '',
        component: _favorite_page__WEBPACK_IMPORTED_MODULE_3__["FavoritePage"]
      }];

      var FavoritePageRoutingModule = function FavoritePageRoutingModule() {
        _classCallCheck(this, FavoritePageRoutingModule);
      };

      FavoritePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FavoritePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/favorite/favorite.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/favorite/favorite.module.ts ***!
      \*********************************************/

    /*! exports provided: FavoritePageModule */

    /***/
    function srcAppFavoriteFavoriteModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoritePageModule", function () {
        return FavoritePageModule;
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


      var _favorite_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./favorite-routing.module */
      "./src/app/favorite/favorite-routing.module.ts");
      /* harmony import */


      var _favorite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./favorite.page */
      "./src/app/favorite/favorite.page.ts");

      var FavoritePageModule = function FavoritePageModule() {
        _classCallCheck(this, FavoritePageModule);
      };

      FavoritePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _favorite_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoritePageRoutingModule"]],
        declarations: [_favorite_page__WEBPACK_IMPORTED_MODULE_6__["FavoritePage"]]
      })], FavoritePageModule);
      /***/
    },

    /***/
    "./src/app/favorite/favorite.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/favorite/favorite.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppFavoriteFavoritePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".backbtn {\n  margin-left: 15px;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\nion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.title {\n  margin-top: 0;\n  color: #434343;\n}\n\n.favorite-items {\n  margin-top: 20px;\n}\n\n.favorite-items ion-col {\n  padding: 10px;\n}\n\n.favorite-items ion-col img {\n  width: 100%;\n  height: 180px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 8px;\n}\n\n.favorite-items ion-col p {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n.favorite-items ion-col h6 {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n.padding-left0 {\n  padding-left: 0 !important;\n}\n\n.padding-right0 {\n  padding-right: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGUvZmF2b3JpdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxhQUFBO0FBQ1I7O0FBQ1E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQUNaOztBQUVRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQVo7O0FBR1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFEWjs7QUFNQTtFQUNJLDBCQUFBO0FBSEo7O0FBTUE7RUFDSSwyQkFBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvZmF2b3JpdGUvZmF2b3JpdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tidG4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyNnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDI2cHg7XG59XG5cbi50aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBjb2xvcjogIzQzNDM0Mztcbn1cblxuLmZhdm9yaXRlLWl0ZW1zIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gICAgaW9uLWNvbCB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIFxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICBoNiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucGFkZGluZy1sZWZ0MCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5wYWRkaW5nLXJpZ2h0MCB7XG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/favorite/favorite.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/favorite/favorite.page.ts ***!
      \*******************************************/

    /*! exports provided: FavoritePage */

    /***/
    function srcAppFavoriteFavoritePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoritePage", function () {
        return FavoritePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FavoritePage = /*#__PURE__*/function () {
        function FavoritePage() {
          _classCallCheck(this, FavoritePage);
        }

        _createClass(FavoritePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FavoritePage;
      }();

      FavoritePage.ctorParameters = function () {
        return [];
      };

      FavoritePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorite',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./favorite.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/favorite/favorite.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./favorite.page.scss */
        "./src/app/favorite/favorite.page.scss"))["default"]]
      })], FavoritePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=favorite-favorite-module-es5.js.map