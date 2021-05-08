(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button class=\"backbtn\" routerLink=\"/welcome\" routerDirection=\"back\">\n        <img src=\"../../assets/back.svg\" />\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"ion-padding container\">\n    <h1>Login</h1>\n\n    <div class=\"form-container\">\n      <ion-item>\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input [(ngModel)]=\"email\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Password</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n      </ion-item>\n\n      <ion-button [disabled]=\"validateSigninForm()\" expand=\"block\" class=\"main-button\" (click)=\"submitSigninForm()\">\n        <span *ngIf=\"!isLoading\">Log in</span>\n        <span *ngIf=\"isLoading\">Loading...</span>\n      </ion-button>\n\n      <div class=\"sign-up\">\n        Don't have an account? <ion-button color=\"dark\" fill=\"clear\" routerLink=\"/signup\" routerDirection=\"forward\">Sign up</ion-button>\n      </div>\n\n      <div class=\"sign-up\">\n        <ion-button color=\"dark\" fill=\"clear\" routerLink=\"/home\" routerDirection=\"forward\">Go To Home</ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/login/login-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/login/login.module.ts":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/login/login.page.scss":
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --border-width: 0 !important;\n}\n\n.header-md::after {\n  background: none !important;\n}\n\n.container h1 {\n  margin-top: 0;\n}\n\n.backbtn {\n  margin-left: 20px;\n}\n\n.form-container {\n  margin-top: 48px;\n}\n\n.form-container ion-item {\n  --padding-start: 0;\n  --border-color: #DADADA;\n}\n\n.form-container ion-item ion-label {\n  color: #A6A6A6;\n}\n\n.form-container ion-item ion-icon {\n  margin-top: auto;\n  color: #c6cbd4;\n}\n\n.form-container ion-button {\n  margin-top: 48px;\n}\n\n.sign-up {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.sign-up ion-button {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksNEJBQUE7QUFBSjs7QUFJQTtFQUNJLDJCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxTQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIHdpbGwgcmVtb3ZlIGlPUyBIZWFkZXIgTGluZVxuaW9uLXRvb2xiYXIge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG59XG5cbi8vIFJlbW92aW5nIEFuZHJvaWQgSGVhZGVyIExpbmVcbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIgaDEge1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbi5iYWNrYnRuIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA0OHB4O1xufVxuXG4uZm9ybS1jb250YWluZXIgaW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLWJvcmRlci1jb2xvcjogI0RBREFEQTtcbn1cblxuLmZvcm0tY29udGFpbmVyIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gICAgY29sb3I6ICNBNkE2QTY7XG59XG5cbi5mb3JtLWNvbnRhaW5lciBpb24taXRlbSBpb24taWNvbiB7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBjb2xvcjogI2M2Y2JkNDtcbn1cblxuLmZvcm0tY29udGFpbmVyIGlvbi1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDQ4cHg7XG59XG5cbi5zaWduLXVwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zaWduLXVwIGlvbi1idXR0b24ge1xuICAgIG1hcmdpbjogMDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/login/login.page.ts":
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
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

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(_auth, router) {
          _classCallCheck(this, LoginPage);

          this._auth = _auth;
          this.router = router;
          this.isLoading = false;
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.initializeSigninModel();
          }
        }, {
          key: "initializeSigninModel",
          value: function initializeSigninModel() {
            this.email = "";
            this.password = "";
          }
        }, {
          key: "validateSigninForm",
          value: function validateSigninForm() {
            if (!this.email || !this.password) return true;else return false;
          }
        }, {
          key: "submitSigninForm",
          value: function submitSigninForm() {
            var _this = this;

            this.isLoading = true;

            this._auth.login(this.email, this.password).then(function (result) {
              if (result == true) _this.router.navigate(['/home']);
            });

            if (!this._auth.isLoading) this.isLoading = false;
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map