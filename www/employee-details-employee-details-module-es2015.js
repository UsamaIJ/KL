(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-details-employee-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-details/employee-details.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-details/employee-details.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"box-shadow: brown;\">\n\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{employeeDetails?.fullName}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div style=\"background-color: lightgray; height: 2px;\"></div>\n  <ion-card style=\"margin-inline: 0px; margin-top: 0px; background-color: white;\">\n    <ion-list *ngIf=\"users?.length > 0\">\n      <ion-item lines=\"full\" *ngFor=\"let user of users\">\n        {{user.fullName}}\n        <ion-toggle style=\"color: green;\" slot=\"end\" [disabled]=\"user.subscription\" [checked]=\"user.subscription\"\n          (ionChange)=\"toggleSubscription($event,user.userId)\"></ion-toggle>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/employee-details/employee-details-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/employee-details/employee-details-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: EmployeeDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsPageRoutingModule", function() { return EmployeeDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _employee_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-details.page */ "./src/app/employee-details/employee-details.page.ts");




const routes = [
    {
        path: '',
        component: _employee_details_page__WEBPACK_IMPORTED_MODULE_3__["EmployeeDetailsPage"]
    }
];
let EmployeeDetailsPageRoutingModule = class EmployeeDetailsPageRoutingModule {
};
EmployeeDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EmployeeDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/employee-details/employee-details.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/employee-details/employee-details.module.ts ***!
  \*************************************************************/
/*! exports provided: EmployeeDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsPageModule", function() { return EmployeeDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _employee_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-details-routing.module */ "./src/app/employee-details/employee-details-routing.module.ts");
/* harmony import */ var _employee_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee-details.page */ "./src/app/employee-details/employee-details.page.ts");







let EmployeeDetailsPageModule = class EmployeeDetailsPageModule {
};
EmployeeDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _employee_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmployeeDetailsPageRoutingModule"]
        ],
        declarations: [_employee_details_page__WEBPACK_IMPORTED_MODULE_6__["EmployeeDetailsPage"]]
    })
], EmployeeDetailsPageModule);



/***/ }),

/***/ "./src/app/employee-details/employee-details.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/employee-details/employee-details.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLWRldGFpbHMvZW1wbG95ZWUtZGV0YWlscy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/employee-details/employee-details.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/employee-details/employee-details.page.ts ***!
  \***********************************************************/
/*! exports provided: EmployeeDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsPage", function() { return EmployeeDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_employees_employees_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/employees/employees.service */ "./src/app/services/employees/employees.service.ts");
/* harmony import */ var _services_users_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/users/users.service */ "./src/app/services/users/users.service.ts");





let EmployeeDetailsPage = class EmployeeDetailsPage {
    constructor(route, empService, userService) {
        this.route = route;
        this.empService = empService;
        this.userService = userService;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.params.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log("Parameter", params['id']);
                if (params['id']) {
                    (yield this.empService.getEmployeeById(params['id'])).subscribe((employee) => {
                        this.employeeDetails = employee;
                    });
                    console.log(this.employeeDetails);
                    this.usersSubscription = this.empService.getUsersByEmployeeId(params['id']).subscribe(data => {
                        this.users = data;
                        console.log("All USers", this.users);
                    });
                }
            }));
        });
    }
    ngOnDestroy() {
        this.usersSubscription.unsubscribe();
    }
};
EmployeeDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_employees_employees_service__WEBPACK_IMPORTED_MODULE_3__["EmployeesService"] },
    { type: _services_users_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] }
];
EmployeeDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./employee-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-details/employee-details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./employee-details.page.scss */ "./src/app/employee-details/employee-details.page.scss")).default]
    })
], EmployeeDetailsPage);



/***/ })

}]);
//# sourceMappingURL=employee-details-employee-details-module-es2015.js.map