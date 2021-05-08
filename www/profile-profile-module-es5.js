(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" class=\"backbtn\" routerLink=\"/home\" routerDirection=\"back\">\n        <img src='../../assets/back-dark.svg' />\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"notification\">\n        <ion-icon name=\"notifications-outline\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1 class=\"title\">Profile</h1>\n\n  <div class=\"profile-info\">\n    <ion-item>\n      <ion-label position=\"floating\">Name</ion-label>\n      <ion-input value=\"Code Crafts\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Address Lane</ion-label>\n      <ion-input value=\"37/6 A\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">City</ion-label>\n      <ion-input value=\"Moratuwa\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Gender</ion-label>\n      <ion-input value=\"Male\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input value=\"info@codecrafts.net\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Phone Number</ion-label>\n      <ion-input value=\"+94 775 580 646\"></ion-input>\n    </ion-item>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/profile/profile-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/profile/profile-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function srcAppProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/profile/profile.page.ts");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/profile/profile.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.module.ts ***!
      \*******************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "./src/app/profile/profile-routing.module.ts");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/profile/profile.page.ts");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "./src/app/profile/profile.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".backbtn {\n  margin-left: 15px;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\nion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.title {\n  margin-top: 0;\n  color: #434343;\n}\n\n.profile-info {\n  padding-top: 20px;\n}\n\n.profile-info ion-item {\n  --padding-start: 0;\n  --border-color: #97979713;\n}\n\n.profile-info ion-item ion-label {\n  color: #919191;\n  font-size: larger;\n}\n\n.profile-info ion-item ion-input {\n  --color: #434343;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUNJO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtBQUNSOztBQUNRO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBQ1o7O0FBRVE7RUFDSSxnQkFBQTtBQUFaIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrYnRuIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLXRvcDogMTZweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMjZweDtcbiAgICAtLXBhZGRpbmctZW5kOiAyNnB4O1xufVxuXG4udGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgY29sb3I6ICM0MzQzNDM7XG59XG5cbi5wcm9maWxlLWluZm8ge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjOTc5Nzk3MTM7XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiAjOTE5MTkxO1xuICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgICAgLS1jb2xvcjogIzQzNDM0MztcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/profile/profile.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/profile/profile.page.ts ***!
      \*****************************************/

    /*! exports provided: ProfilePage */

    /***/
    function srcAppProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage() {
          _classCallCheck(this, ProfilePage);
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./profile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./profile.page.scss */
        "./src/app/profile/profile.page.scss"))["default"]]
      })], ProfilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map