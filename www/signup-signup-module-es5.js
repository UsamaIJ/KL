(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button class=\"backbtn\" routerLink=\"/welcome\" routerDirection=\"back\">\n        <img src=\"../../assets/back.svg\" />\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"ion-padding container\">\n    <h1>Signup</h1>\n\n    <div class=\"form-container\">\n      <ion-item>\n        <ion-label position=\"floating\">Name</ion-label>\n        <ion-input [(ngModel)]=\"name\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input [(ngModel)]=\"email\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Phone No.</ion-label>\n        <ion-input [(ngModel)]=\"phoneNo\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Password</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Employee ID</ion-label>\n        <ion-input [(ngModel)]=\"employeeId\"></ion-input>\n      </ion-item>\n\n      <ion-button [disabled]= \"validateSignupForm()\" expand=\"block\" class=\"main-button\" (click)=\"submitSignupForm()\">Sign Up</ion-button>\n\n      <div class=\"sign-up\">\n        Already have an account? <ion-button color=\"dark\" fill=\"clear\" routerLink=\"/login\" routerDirection=\"forward\">\n          Sign in</ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/signup/signup-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/signup/signup-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: SignupPageRoutingModule */

    /***/
    function srcAppSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
        return SignupPageRoutingModule;
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


      var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signup.page */
      "./src/app/signup/signup.page.ts");

      var routes = [{
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
      }];

      var SignupPageRoutingModule = function SignupPageRoutingModule() {
        _classCallCheck(this, SignupPageRoutingModule);
      };

      SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SignupPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/signup/signup.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.module.ts ***!
      \*****************************************/

    /*! exports provided: SignupPageModule */

    /***/
    function srcAppSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
        return SignupPageModule;
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


      var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./signup-routing.module */
      "./src/app/signup/signup-routing.module.ts");
      /* harmony import */


      var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./signup.page */
      "./src/app/signup/signup.page.ts");

      var SignupPageModule = function SignupPageModule() {
        _classCallCheck(this, SignupPageModule);
      };

      SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
      })], SignupPageModule);
      /***/
    },

    /***/
    "./src/app/signup/signup.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --border-width: 0 !important;\n}\n\n.header-md::after {\n  background: none !important;\n}\n\n.container h1 {\n  margin-top: 0;\n}\n\n.backbtn {\n  margin-left: 20px;\n}\n\n.form-container {\n  margin-top: 48px;\n}\n\n.form-container ion-item {\n  --padding-start: 0;\n  --border-color: #DADADA;\n}\n\n.form-container ion-item ion-label {\n  color: #A6A6A6;\n}\n\n.form-container ion-item ion-icon {\n  margin-top: auto;\n  color: #c6cbd4;\n}\n\n.form-container ion-button {\n  margin-top: 48px;\n}\n\n.sign-up {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.sign-up ion-button {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSw0QkFBQTtBQUFKOztBQUlBO0VBQ0ksMkJBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLFNBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyB3aWxsIHJlbW92ZSBpT1MgSGVhZGVyIExpbmVcbmlvbi10b29sYmFyIHtcbiAgICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xufVxuXG4vLyBSZW1vdmluZyBBbmRyb2lkIEhlYWRlciBMaW5lXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyIGgxIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uYmFja2J0biB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogNDhweDtcbn1cblxuLmZvcm0tY29udGFpbmVyIGlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1ib3JkZXItY29sb3I6ICNEQURBREE7XG59XG5cbi5mb3JtLWNvbnRhaW5lciBpb24taXRlbSBpb24tbGFiZWwge1xuICAgIGNvbG9yOiAjQTZBNkE2O1xufVxuXG4uZm9ybS1jb250YWluZXIgaW9uLWl0ZW0gaW9uLWljb24ge1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgY29sb3I6ICNjNmNiZDQ7XG59XG5cbi5mb3JtLWNvbnRhaW5lciBpb24tYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiA0OHB4O1xufVxuXG4uc2lnbi11cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2lnbi11cCBpb24tYnV0dG9uIHtcbiAgICBtYXJnaW46IDA7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/signup/signup.page.ts":
    /*!***************************************!*\
      !*** ./src/app/signup/signup.page.ts ***!
      \***************************************/

    /*! exports provided: SignupPage */

    /***/
    function srcAppSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
        return SignupPage;
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


      var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/authentication/authentication.service */
      "./src/app/services/authentication/authentication.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var SignupPage = /*#__PURE__*/function () {
        function SignupPage(_auth, router) {
          _classCallCheck(this, SignupPage);

          this._auth = _auth;
          this.router = router;
          this.role = "User";
          this.subscription = false;
          this.subscriptionVerified = false;
          this.signup = false;
        }

        _createClass(SignupPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.initializeSignupModel();
          }
        }, {
          key: "initializeSignupModel",
          value: function initializeSignupModel() {
            this.name = "";
            this.email = "";
            this.phoneNo = "";
            this.password = "";
            this.employeeId = "";
          }
        }, {
          key: "validateSignupForm",
          value: function validateSignupForm() {
            if (!this.name || !this.email || !this.phoneNo || !this.password) return true;else return false;
          }
        }, {
          key: "submitSignupForm",
          value: function submitSignupForm() {
            var _this = this;

            this._auth.register({
              email: this.email,
              password: this.password,
              fullName: this.name,
              phoneNumber: this.phoneNo,
              role: this.role,
              subscription: this.subscription,
              subscriptionVerified: this.subscriptionVerified,
              employeeId: this.employeeId == "" ? "638iOUBMebtOKSJzjMjodVvNjIx1A122" : this.employeeId
            }).then(function (result) {
              if (result == true) _this.router.navigate(['/home']);
            });
          }
        }]);

        return SignupPage;
      }();

      SignupPage.ctorParameters = function () {
        return [{
          type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./signup.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./signup.page.scss */
        "./src/app/signup/signup.page.scss"))["default"]]
      })], SignupPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=signup-signup-module-es5.js.map