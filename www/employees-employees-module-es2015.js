(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employees-employees-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"box-shadow: brown;\">\n  \n  <ion-toolbar>\n    <ion-buttons>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Employees</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"background-color: lightgray; height: 2px;\"></div>\n  <ion-card style=\"margin-inline: 0px; margin-top: 0px; background-color: white;\">\n    <ion-list *ngIf=\"employees?.length > 0\">\n      <ion-item lines=\"full\" *ngFor=\"let employee of employees\" (click) = \"goToEmployeeDetails(employee.userId)\">\n        {{employee.fullName}}\n        <ion-icon ios=\"ios-arrow-dropright\" md=\"md-arrow-dropright\"></ion-icon>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/employees/employees-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/employees/employees-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EmployeesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesPageRoutingModule", function() { return EmployeesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _employees_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employees.page */ "./src/app/employees/employees.page.ts");




const routes = [
    {
        path: '',
        component: _employees_page__WEBPACK_IMPORTED_MODULE_3__["EmployeesPage"]
    }
];
let EmployeesPageRoutingModule = class EmployeesPageRoutingModule {
};
EmployeesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EmployeesPageRoutingModule);



/***/ }),

/***/ "./src/app/employees/employees.module.ts":
/*!***********************************************!*\
  !*** ./src/app/employees/employees.module.ts ***!
  \***********************************************/
/*! exports provided: EmployeesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesPageModule", function() { return EmployeesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _employees_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employees-routing.module */ "./src/app/employees/employees-routing.module.ts");
/* harmony import */ var _employees_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employees.page */ "./src/app/employees/employees.page.ts");







let EmployeesPageModule = class EmployeesPageModule {
};
EmployeesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _employees_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmployeesPageRoutingModule"]
        ],
        declarations: [_employees_page__WEBPACK_IMPORTED_MODULE_6__["EmployeesPage"]]
    })
], EmployeesPageModule);



/***/ }),

/***/ "./src/app/employees/employees.page.scss":
/*!***********************************************!*\
  !*** ./src/app/employees/employees.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#f5f5f5a6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzL2VtcGxveWVlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWVzL2VtcGxveWVlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2Y1ZjVmNWE2O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/employees/employees.page.ts":
/*!*********************************************!*\
  !*** ./src/app/employees/employees.page.ts ***!
  \*********************************************/
/*! exports provided: EmployeesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesPage", function() { return EmployeesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
/* harmony import */ var _services_employees_employees_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/employees/employees.service */ "./src/app/services/employees/employees.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let EmployeesPage = class EmployeesPage {
    constructor(empService, db, router) {
        this.empService = empService;
        this.db = db;
        this.router = router;
    }
    ngOnInit() {
        this.retrieveAllEmployees();
    }
    retrieveAllEmployees() {
        this.employeeSubscription = this.empService.getAllEmployees().subscribe(data => {
            this.employees = data;
            console.log("All Users", this.employees);
        });
    }
    goToEmployeeDetails(employeeId) {
        console.log("Employee ID", employeeId);
        console.log(`/employee-details/${employeeId}`);
        this.router.navigate([`/employee-details/${employeeId}`]);
    }
    ngOnDestroy() {
        this.employeeSubscription.unsubscribe();
    }
};
EmployeesPage.ctorParameters = () => [
    { type: _services_employees_employees_service__WEBPACK_IMPORTED_MODULE_3__["EmployeesService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
EmployeesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employees',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./employees.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./employees.page.scss */ "./src/app/employees/employees.page.scss")).default]
    })
], EmployeesPage);



/***/ })

}]);
//# sourceMappingURL=employees-employees-module-es2015.js.map