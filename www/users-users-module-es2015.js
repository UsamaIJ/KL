(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"box-shadow: brown;\">\n  \n  <ion-toolbar>\n    <ion-buttons>\n      <ion-back-button ></ion-back-button>\n    </ion-buttons>\n    <ion-title>Users</ion-title>\n    <!-- style=\"background-color: brown\" -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div style=\"background-color: lightgray; height: 2px;\"></div>\n  <ion-card style=\"margin-inline: 0px; margin-top: 0px; background-color: white;\">\n    <ion-list *ngIf=\"users?.length > 0\">\n      <ion-item lines=\"full\" *ngFor=\"let user of users\">\n        {{user.fullName}}\n        <ion-toggle style=\"color: green;\" slot=\"end\" [disabled] = \"user.subscription\" [checked]=\"user.subscription\" (ionChange)=\"toggleSubscription($event,user.userId)\"></ion-toggle>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/users/users-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/users/users-routing.module.ts ***!
  \***********************************************/
/*! exports provided: UsersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageRoutingModule", function() { return UsersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.page */ "./src/app/users/users.page.ts");




const routes = [
    {
        path: '',
        component: _users_page__WEBPACK_IMPORTED_MODULE_3__["UsersPage"]
    }
];
let UsersPageRoutingModule = class UsersPageRoutingModule {
};
UsersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UsersPageRoutingModule);



/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageModule", function() { return UsersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/users/users-routing.module.ts");
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users.page */ "./src/app/users/users.page.ts");







let UsersPageModule = class UsersPageModule {
};
UsersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _users_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsersPageRoutingModule"]
        ],
        declarations: [_users_page__WEBPACK_IMPORTED_MODULE_6__["UsersPage"]]
    })
], UsersPageModule);



/***/ }),

/***/ "./src/app/users/users.page.scss":
/*!***************************************!*\
  !*** ./src/app/users/users.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toggle {\n  --background: gray;\n  --background-checked: green;\n  --handle-background: #FFFFFF;\n  --handle-background-checked: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUVBLDRCQUFBO0VBQ0Esa0NBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b2dnbGUge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBncmF5O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IGdyZWVuO1xyXG4gIFxyXG4gICAgLS1oYW5kbGUtYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogd2hpdGU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/users/users.page.ts":
/*!*************************************!*\
  !*** ./src/app/users/users.page.ts ***!
  \*************************************/
/*! exports provided: UsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPage", function() { return UsersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_users_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users/users.service */ "./src/app/services/users/users.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let UsersPage = class UsersPage {
    constructor(userService, alertController) {
        this.userService = userService;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.retrieveAllUsers();
    }
    retrieveAllUsers() {
        this.userSubscription = this.userService.getAllUsers().subscribe(data => {
            this.users = data;
            console.log("All Users", this.users);
        });
    }
    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }
    toggleSubscription(event, userId) {
        console.log("Toggle Event", event);
        this.presentAlertConfirm(userId);
    }
    presentAlertConfirm(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'Are you Sure you want to enable subscription for this user?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            yield this.userService.updateUserSubscription(userId);
                            this.retrieveAllUsers();
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
};
UsersPage.ctorParameters = () => [
    { type: _services_users_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
UsersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./users.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./users.page.scss */ "./src/app/users/users.page.scss")).default]
    })
], UsersPage);



/***/ })

}]);
//# sourceMappingURL=users-users-module-es2015.js.map