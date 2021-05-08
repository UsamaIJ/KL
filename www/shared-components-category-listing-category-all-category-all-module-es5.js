(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-components-category-listing-category-all-category-all-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/category-listing/category-all/category-all.page.html":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/category-listing/category-all/category-all.page.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsCategoryListingCategoryAllCategoryAllPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-buttons>\n    <ion-back-button></ion-back-button>\n  </ion-buttons>\n  <ion-toolbar>\n    <ion-title>All Categories</ion-title>\n  </ion-toolbar>\n  <div class=\"progress ion-text-center\">\n    <!-- <ion-progress-bar class=\"progress\" type=\"indeterminate\"></ion-progress-bar> -->\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"category-slider ion-padding-start\">\n    <!-- <ion-grid> -->\n    <!-- <ion-slides [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\"> -->\n    <ion-grid style=\"margin-top: 15px;\">\n      <ion-row>\n        <ion-col size=\"5\" *ngFor=\"let category of categories\" (click)=\"categoryClicked(category)\">\n          <img src=\"{{ category.image && category.image.src ? category.image.src : randomGenerator() }}\" />\n          <span>{{ category.name }}</span>\n        </ion-col>\n      </ion-row>\n      <!-- </ion-slide>\n    </ion-slides> -->\n    </ion-grid>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/shared-components/category-listing/category-all/category-all-routing.module.ts":
    /*!************************************************************************************************!*\
      !*** ./src/app/shared-components/category-listing/category-all/category-all-routing.module.ts ***!
      \************************************************************************************************/

    /*! exports provided: CategoryAllPageRoutingModule */

    /***/
    function srcAppSharedComponentsCategoryListingCategoryAllCategoryAllRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryAllPageRoutingModule", function () {
        return CategoryAllPageRoutingModule;
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


      var _category_all_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./category-all.page */
      "./src/app/shared-components/category-listing/category-all/category-all.page.ts");

      var routes = [{
        path: '',
        component: _category_all_page__WEBPACK_IMPORTED_MODULE_3__["CategoryAllPage"]
      }];

      var CategoryAllPageRoutingModule = function CategoryAllPageRoutingModule() {
        _classCallCheck(this, CategoryAllPageRoutingModule);
      };

      CategoryAllPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CategoryAllPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/shared-components/category-listing/category-all/category-all.module.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/shared-components/category-listing/category-all/category-all.module.ts ***!
      \****************************************************************************************/

    /*! exports provided: CategoryAllPageModule */

    /***/
    function srcAppSharedComponentsCategoryListingCategoryAllCategoryAllModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryAllPageModule", function () {
        return CategoryAllPageModule;
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


      var _category_all_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./category-all-routing.module */
      "./src/app/shared-components/category-listing/category-all/category-all-routing.module.ts");
      /* harmony import */


      var _category_all_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./category-all.page */
      "./src/app/shared-components/category-listing/category-all/category-all.page.ts");

      var CategoryAllPageModule = function CategoryAllPageModule() {
        _classCallCheck(this, CategoryAllPageModule);
      };

      CategoryAllPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _category_all_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryAllPageRoutingModule"]],
        declarations: [_category_all_page__WEBPACK_IMPORTED_MODULE_6__["CategoryAllPage"]]
      })], CategoryAllPageModule);
      /***/
    },

    /***/
    "./src/app/shared-components/category-listing/category-all/category-all.page.scss":
    /*!****************************************************************************************!*\
      !*** ./src/app/shared-components/category-listing/category-all/category-all.page.scss ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSharedComponentsCategoryListingCategoryAllCategoryAllPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-col {\n  height: 100px;\n  margin-right: 28px;\n  margin-bottom: 65px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\nion-col h4 {\n  color: #ffffff;\n  margin: 0;\n}\nion-col img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.16);\n  border-radius: 15px;\n}\nion-col span {\n  position: absolute;\n  top: 110px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvY2F0ZWdvcnktbGlzdGluZy9jYXRlZ29yeS1hbGwvY2F0ZWdvcnktYWxsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUNJO0VBQ0ksY0FBQTtFQUNBLFNBQUE7QUFDUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxpREFBQTtFQUNBLG1CQUFBO0FBQVI7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQURSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvY2F0ZWdvcnktbGlzdGluZy9jYXRlZ29yeS1hbGwvY2F0ZWdvcnktYWxsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDY1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG4gICAgaDQge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDE1cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDExMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/shared-components/category-listing/category-all/category-all.page.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/shared-components/category-listing/category-all/category-all.page.ts ***!
      \**************************************************************************************/

    /*! exports provided: CategoryAllPage */

    /***/
    function srcAppSharedComponentsCategoryListingCategoryAllCategoryAllPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryAllPage", function () {
        return CategoryAllPage;
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


      var _services_categories_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/categories/category.service */
      "./src/app/services/categories/category.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var CategoryAllPage = /*#__PURE__*/function () {
        function CategoryAllPage(router, _categoryService, toast) {
          _classCallCheck(this, CategoryAllPage);

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

        _createClass(CategoryAllPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var params;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.localStorage = window.localStorage.getItem('user');
                      this.localStorage = JSON.parse(this.localStorage);

                      if (this.localStorage) {
                        this.subscribed = this.localStorage.subscription == true && this.localStorage.subscriptionVerified == true ? true : false;
                        this.loggedIn = true;
                      }

                      params = {};
                      params.parent = 0;
                      params.page = 1;
                      params.per_page = 100;

                      this._categoryService.getCategories(params).then(function (categories) {
                        console.log("Categories", categories);
                        _this.categories = categories;
                        _this.isLoading = false;
                      }); // this.categories = this.router.getCurrentNavigation().extras.state.categories;
                      // console.log("all categories", this.categories, "subscription",this.localStorage,this.localStorage.subscription,this.localStorage.subscriptionVerified, this.subscribed);


                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "categoryClicked",
          value: function categoryClicked(cat) {
            var _this2 = this;

            var param = {};
            param.parent = cat.id;
            param.page = 1;
            param.per_page = 100;

            this._categoryService.getCategories(param).then(function (categories) {
              console.log("sub categories", categories);
              _this2.sub_categories = categories;

              if (_this2.sub_categories.length == 0) {
                var params = {
                  state: {
                    id: cat.id
                  }
                };

                _this2.router.navigate(['/product-listing'], params);
              } else {
                var _params = {
                  state: {
                    sub_categories: _this2.sub_categories
                  }
                };

                _this2.router.navigate(['/category-detail-list'], _params);
              }
            });
          }
        }, {
          key: "presentToast",
          value: function presentToast(message, color) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toast.create({
                        message: message,
                        color: color,
                        duration: 2000
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "randomGenerator",
          value: function randomGenerator() {
            return "assets/products/prod-".concat(Math.floor(Math.random() * 4) + 1, ".png");
          }
        }]);

        return CategoryAllPage;
      }();

      CategoryAllPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_categories_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }];
      };

      CategoryAllPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-all',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./category-all.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/category-listing/category-all/category-all.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./category-all.page.scss */
        "./src/app/shared-components/category-listing/category-all/category-all.page.scss"))["default"]]
      })], CategoryAllPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=shared-components-category-listing-category-all-category-all-module-es5.js.map