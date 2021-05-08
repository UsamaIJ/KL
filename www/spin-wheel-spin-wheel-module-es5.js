(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["spin-wheel-spin-wheel-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/spin-wheel/spin-wheel.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/spin-wheel/spin-wheel.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSpinWheelSpinWheelPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-buttons>\n    <ion-back-button></ion-back-button>\n  </ion-buttons>\n  <ion-toolbar>\n    <ion-title style=\"font-size: x-large;\">Spin To Win</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>Spin Wheel</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content no-padding>\n  <!-- <span>\n    <p>\n      Try your luck to get discount coupon\n      1 spin per email\n      No cheating\n    </p>\n  </span> -->\n  <ion-row style=\"margin-top:10%;margin-left:9%;\">\n    <ion-col col-12 text-center>\n      <div id=\"wheel\">\n        <canvas #myCanvas width=\"auto\" height=\"300\"></canvas>\n      </div>\n    </ion-col>\n    <!-- <ion-col offset-1 col-10> -->\n      <!-- <button #spin class=\"stopButton\" (click)=\"onStartClick()\">Start</button> -->\n  <!-- </ion-col> -->\n\n    <div class=\"form-container\">\n      <ion-item>\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input [(ngModel)]=\"email\"  color=\"dark\" fill=\"clear\"></ion-input>\n      </ion-item>\n      <!-- <ion-item>\n        <ion-label position=\"floating\">Password</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"password\"  color=\"dark\" fill=\"clear\"></ion-input>\n      </ion-item> -->\n\n      <ion-button [disabled]=\"validateEmail()\" expand=\"block\" class=\"main-button\" (click)=\"onStartClick()\">\n        <span *ngIf=\"!isLoading\">TRY YOUR LUCK</span>\n        <!-- <span *ngIf=\"isLoading\">Loading...</span> -->\n      </ion-button>\n\n      <ion-button [disabled]=\"validateStopButton()\" expand=\"block\" class=\"main-button\" (click)=\"onStopClick()\">\n        <span *ngIf=\"!isLoading\">STOP</span>\n      </ion-button>\n\n      <!-- <div class=\"sign-up\">\n        Don't have an account? <ion-button color=\"dark\" fill=\"clear\" routerLink=\"/signup\" routerDirection=\"forward\">Sign up</ion-button>\n      </div>\n\n      <div class=\"sign-up\">\n        <ion-button color=\"dark\" fill=\"clear\" routerLink=\"/home\" routerDirection=\"forward\">Go To Home</ion-button>\n      </div> -->\n    </div>\n\n\n  </ion-row>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/spin-wheel/spin-wheel-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/spin-wheel/spin-wheel-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: SpinWheelPageRoutingModule */

    /***/
    function srcAppSpinWheelSpinWheelRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpinWheelPageRoutingModule", function () {
        return SpinWheelPageRoutingModule;
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


      var _spin_wheel_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./spin-wheel.page */
      "./src/app/spin-wheel/spin-wheel.page.ts");

      var routes = [{
        path: '',
        component: _spin_wheel_page__WEBPACK_IMPORTED_MODULE_3__["SpinWheelPage"]
      }];

      var SpinWheelPageRoutingModule = function SpinWheelPageRoutingModule() {
        _classCallCheck(this, SpinWheelPageRoutingModule);
      };

      SpinWheelPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SpinWheelPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/spin-wheel/spin-wheel.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/spin-wheel/spin-wheel.module.ts ***!
      \*************************************************/

    /*! exports provided: SpinWheelPageModule */

    /***/
    function srcAppSpinWheelSpinWheelModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpinWheelPageModule", function () {
        return SpinWheelPageModule;
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


      var _spin_wheel_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./spin-wheel-routing.module */
      "./src/app/spin-wheel/spin-wheel-routing.module.ts");
      /* harmony import */


      var _spin_wheel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./spin-wheel.page */
      "./src/app/spin-wheel/spin-wheel.page.ts");

      var SpinWheelPageModule = function SpinWheelPageModule() {
        _classCallCheck(this, SpinWheelPageModule);
      };

      SpinWheelPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _spin_wheel_routing_module__WEBPACK_IMPORTED_MODULE_5__["SpinWheelPageRoutingModule"]],
        declarations: [_spin_wheel_page__WEBPACK_IMPORTED_MODULE_6__["SpinWheelPage"]]
      })], SpinWheelPageModule);
      /***/
    },

    /***/
    "./src/app/spin-wheel/spin-wheel.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/spin-wheel/spin-wheel.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSpinWheelSpinWheelPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bg-color {\n  --ion-background-color: #189A7A !important ;\n}\n\n.form-container {\n  margin-top: 5%;\n  margin-left: 10%;\n}\n\n.form-container ion-item {\n  --padding-start: 0;\n  --border-color: #DADADA;\n}\n\n.form-container ion-item ion-label {\n  color: #A6A6A6;\n}\n\n.form-container ion-item ion-icon {\n  margin-top: auto;\n  color: #c6cbd4;\n}\n\n.form-container ion-button {\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbi13aGVlbC9zcGluLXdoZWVsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJDQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc3Bpbi13aGVlbC9zcGluLXdoZWVsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1jb2xvciB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMTg5QTdBICFpbXBvcnRhbnRcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIGlvbi1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjREFEQURBO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjQTZBNkE2O1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIGNvbG9yOiAjYzZjYmQ0O1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIgaW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/spin-wheel/spin-wheel.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/spin-wheel/spin-wheel.page.ts ***!
      \***********************************************/

    /*! exports provided: SpinWheelPage */

    /***/
    function srcAppSpinWheelSpinWheelPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpinWheelPage", function () {
        return SpinWheelPage;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var SpinWheelPage = /*#__PURE__*/function () {
        function SpinWheelPage(navCtrl, toast, router) {
          _classCallCheck(this, SpinWheelPage);

          this.navCtrl = navCtrl;
          this.toast = toast;
          this.router = router;
          this.stopButton = false;
          this.localStorage = [];
          this.subscribed = false;
          this.loggedIn = false;
          this.enableSpin = true;
          this.color = ['#E65100', '#FFB74D', '#FB8C00', '#E65100', '#FFE0B2', '#E65100', "#FFE0B2", "#E65100"];
          this.label = ['80% OFF', '90% OFF', 'Free T-Shirt', 'Not Lucky', '10% OFF', 'Free Iphone', '20% Off', 'Free Laptop'];
          this.slices = this.color.length;
          this.sliceDeg = 360 / this.slices;
          this.slowDownRand = 0;
          this.isStopped = false;
          this.lock = false;

          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            this.localStorage = window.localStorage.getItem('user');
            this.localStorage = JSON.parse(this.localStorage);
            console.log("spin wheel user", this.localStorage);

            if (this.localStorage) {
              this.subscribed = this.localStorage.subscription == true && this.localStorage.subscriptionVerified == true ? true : false;
              this.loggedIn = true;
              alert(this.loggedIn);
            } else {
              this.loggedIn = false;
            }

            return false;
          };

          this.speed = 0;
          this.deg = this.rand(0, 360);
          var canvas = document.createElement('canvas');
          this.width = canvas.width; // size

          this.center = this.width / 2; // center
        }

        _createClass(SpinWheelPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.localStorage = window.localStorage.getItem('user');
                      this.localStorage = JSON.parse(this.localStorage);
                      console.log("spin wheel user", this.localStorage);

                      if (this.localStorage) {
                        this.subscribed = this.localStorage.subscription == true && this.localStorage.subscriptionVerified == true ? true : false;
                        this.loggedIn = true;
                      } else {
                        this.loggedIn = false;
                      }

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // alert("here")
            // this.localStorage = window.localStorage.getItem('user');
            // this.localStorage = JSON.parse(this.localStorage);
            // console.log("spin wheel user", this.localStorage);
            // if(this.localStorage) {
            // this.subscribed = this.localStorage.subscription == true && this.localStorage.subscriptionVerified == true ? true : false;
            // this.loggedIn =  true;
            // }
            // else {
            //   this.loggedIn = false
            //    }
            this.ctx = this.myCanvas.nativeElement.getContext('2d');
            this.drawImg(); // this.anim();
          }
        }, {
          key: "rand",
          value: function rand(min, max) {
            return Math.random() * (max - min) + min;
          }
        }, {
          key: "deg2rad",
          value: function deg2rad(deg) {
            return deg * Math.PI / 180;
          }
        }, {
          key: "drawSlice",
          value: function drawSlice(deg, color) {
            this.ctx.beginPath();
            this.ctx.fillStyle = color;
            this.ctx.moveTo(this.center, this.center);
            this.ctx.arc(this.center, this.center, this.width / 2, this.deg2rad(deg), this.deg2rad(deg + this.sliceDeg));
            this.ctx.lineTo(this.center, this.center);
            this.ctx.fill();
          }
        }, {
          key: "drawText",
          value: function drawText(deg, text) {
            this.ctx.save();
            this.ctx.translate(this.center, this.center);
            this.ctx.rotate(this.deg2rad(deg));
            this.ctx.textAlign = "right";
            this.ctx.fillStyle = "#fff";
            this.ctx.font = '20px sans-serif';
            this.ctx.fillText(text, 130, 10);
            this.ctx.restore();
          }
        }, {
          key: "drawImg",
          value: function drawImg() {
            this.ctx.clearRect(0, 0, this.width, this.width);

            for (var i = 0; i < this.slices; i++) {
              this.drawSlice(this.deg, this.color[i]);
              this.drawText(this.deg + this.sliceDeg / 2, this.label[i]);
              this.deg += this.sliceDeg;
            }
          }
        }, {
          key: "anim",
          value: function anim() {
            this.deg += this.speed;
            this.deg %= 360; // Increment speed

            if (!this.isStopped && this.speed < 3) {
              this.speed = this.speed + 1 * 0.1;
            } // Decrement Speed


            if (this.isStopped) {
              if (!this.lock) {
                this.lock = true;
                this.slowDownRand = this.rand(0.994, 0.998);
              }

              this.speed = this.speed > 0.2 ? this.speed *= this.slowDownRand : 0;
            } // Stopped!


            if (this.lock && !this.speed) {
              var ai = Math.floor((360 - this.deg - 90) % 360 / this.sliceDeg); // deg 2 Array Index

              ai = (this.slices + ai) % this.slices; // Fix negative index

              return alert("You got:\n" + this.label[ai]); // Get Array Item from end Degree
            }

            this.drawImg();
            window.requestAnimationFrame(this.anim.bind(this));
          }
        }, {
          key: "onStopClick",
          value: function onStopClick() {
            this.isStopped = true;
            this.stopButton = false;
          }
        }, {
          key: "onStartClick",
          value: function onStartClick() {
            console.log("this.subscribed", this.subscribed);
            console.log("this.loggedIn", this.loggedIn);

            if (this.subscribed == true && this.loggedIn == true) {
              this.enableSpin = false;
              this.stopButton = true;
              this.anim();
            } else if (this.loggedIn == true && this.subscribed == false) {
              this.subscribeToast("Please Subscribe to purchase the item", "warning");
            } else if (this.loggedIn == false) {
              this.loginToast("Please login to view the item", "warning");
            }
          }
        }, {
          key: "subscribeToast",
          value: function subscribeToast(message, color) {
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
          key: "loginToast",
          value: function loginToast(message, color) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toast.create({
                        message: message,
                        color: color,
                        duration: 7000,
                        buttons: [{
                          text: 'Login',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');

                            _this.router.navigate(['/login']);
                          }
                        }]
                      });

                    case 2:
                      toast = _context3.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "validateEmail",
          value: function validateEmail() {
            if (!this.email && this.enableSpin == true) return true;else return false;
          }
        }, {
          key: "validateStopButton",
          value: function validateStopButton() {
            if (this.stopButton != true) return true;else return false;
          }
        }]);

        return SpinWheelPage;
      }();

      SpinWheelPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      SpinWheelPage.propDecorators = {
        myCanvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['myCanvas']
        }],
        spin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['spin']
        }]
      };
      SpinWheelPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-spin-wheel',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./spin-wheel.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/spin-wheel/spin-wheel.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./spin-wheel.page.scss */
        "./src/app/spin-wheel/spin-wheel.page.scss"))["default"]]
      })], SpinWheelPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=spin-wheel-spin-wheel-module-es5.js.map