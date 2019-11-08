(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"border: 1rem solid black\">\r\n\t<div style=\"display: flex; justify-content: space-between;\">\r\n\t\t<ul>\r\n\t\t\t<li><a [routerLink]=\"['/']\" [routerLinkActive]=\"['active-link']\" [routerLinkActiveOptions]=\"{exact:true}\">Home</a></li>\r\n\t\t\t<li><a [routerLink]=\"['/employees']\" [routerLinkActive]=\"['active-link']\">Employee List</a></li>\r\n\t\t</ul>\r\n\t\t<ul>\r\n\t\t\t<li><a (click)='showModalExampleA()' style=\"cursor: pointer\">Modal: Default</a></li>\r\n\t\t\t<li><a (click)='showModalExampleB()' style=\"cursor: pointer\">Modal: Static</a></li>\r\n\t\t\t<li><a (click)='showModalExampleC()' style=\"cursor: pointer\">Modal: Full Page</a></li>\r\n\t\t</ul>\r\n\t\t<app-time></app-time>\r\n\t</div>\r\n\t<router-outlet></router-outlet>\r\n\t<app-weather></app-weather>\r\n\t<app-modal> \r\n\t\t<div style=\"display: flex; justify-content: space-between\">\r\n\t\t\t<span style=\"font-weight: bold; text-align: center\">Static Div; Independent of Component</span>\r\n\t\t\t<button class=\"modal-close\">Close Modal</button>\r\n\t\t</div>\r\n\t</app-modal>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employee/employee-detail/employee-detail.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employee/employee-detail/employee-detail.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"border: 1rem solid #ed00ff\">\r\n\t<button (click)=\"onBack()\">Back</button>\r\n\t<h1>Employee Details: {{id}}</h1>\r\n\t{{test()}}\r\n\t<div *ngIf=\"employee\">\r\n\t\t<div>Name: {{employee.name}}</div>\r\n\t\t<div>User: {{employee.username}}</div>\r\n\t\t<div>Email: {{employee.email}}</div>\r\n\t\t<div>Street: {{employee.address.street}}</div>\r\n\t\t<div>City: {{employee.address.city}}</div>\r\n\t\t<div>Phone: {{employee.phone | convertToSpaces: '-'}}</div>\r\n\t\t<div>Company: {{employee.company.name}}</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employee/employee-list/employee-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employee/employee-list/employee-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"border: 1rem solid #0094ff\">\r\n\t<h1>Employee List: {{filteredEmployees.length}}</h1>\r\n\t{{test()}}\r\n\t<p>This component demonstrates fetching data from an external webhost.</p>\r\n\t<p>Table is tracked by the ID, observe Elements tab of chrome DevTools.</p>\r\n\r\n\t<div *ngIf=\"employees && employees.length; else noContent\" style=\"display:flex;\">\r\n\t\t<button (click)=\"toggleEmployees()\">{{showEmployees ? 'Hide' : 'Show'}} Employees</button>\r\n\t\t<button *ngIf=\"showEmployees\" (click)=\"refreshEmployees()\">Refresh</button>\r\n\t\t<button *ngIf=\"showEmployees\" (click)=\"shuffleEmployees()\">Shuffle</button>\r\n\t</div>\r\n\t<div *ngIf=\"showEmployees\" style=\"margin-top: 0.5rem;\">\r\n\t\t<input [(ngModel)]=\"listFilter\" type=\"text\" placeholder=\"Name Filter\" />\r\n\t\t<h4 *ngIf=\"listFilter\">Name Filtered by: {{listFilter}}</h4>\r\n\t\t<table>\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>ID</th>\r\n\t\t\t\t\t<th>Name</th>\r\n\t\t\t\t\t<th>User</th>\r\n\t\t\t\t\t<th>Email</th>\r\n\t\t\t\t\t<th>Address</th>\r\n\t\t\t\t\t<th>City</th>\r\n\t\t\t\t\t<th>Phone</th>\r\n\t\t\t\t\t<th>Company</th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t<!--TrackBy improves performace by telling Angular what it needs to redraw when the list data is refreshed.-->\r\n\t\t\t\t<tr *ngFor=\"let employee of filteredEmployees; trackBy: trackById\" [routerLink]=\"['/employees', employee.id]\">\r\n\t\t\t\t\t<td>{{employee.id}}</td>\r\n\t\t\t\t\t<td>{{employee.name}}</td>\r\n\t\t\t\t\t<td>{{employee.username}}</td>\r\n\t\t\t\t\t<td>{{employee.email}}</td>\r\n\t\t\t\t\t<td>{{employee.address.street}}</td>\r\n\t\t\t\t\t<td>{{employee.address.city}}</td>\r\n\t\t\t\t\t<td>{{employee.phone | convertToSpaces: '-'}}</td>\r\n\t\t\t\t\t<td>{{employee.company.name}}</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t</div>\r\n\t<h6 *ngIf=\"employees\" style=\"text-align: right; margin: 0.25rem;\">Last Updated: {{ lastUpdated | date:'HH:mm:ss' }}</h6>\r\n\t<ng-template #noContent>\r\n\t\t<h4>Requesting Employee Data..</h4>\r\n\t</ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/welcome/welcome.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/welcome/welcome.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"border: 1rem solid #ff6a00\">\r\n\t<p>Welcome to a really basic angular application O_O</p>\r\n\t<p *ngIf=\"id\"><u>A number was provided as input from the parent</u>: <strong>{{id}}</strong></p>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/modal/modal.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/modal/modal.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"modal\" class=\"modal\" style=\"border: 1rem solid #fffb00\" (click)=\"closeModal($event);\">\r\n\t{{test()}}\r\n\t<div class=\"modal-dialog\">\r\n\t\t<div class=\"modal-content\" [class.modal-full]=\"isFullPage\" style=\"background-color: white\">\r\n\t\t\t<ng-content></ng-content> <!--Static Content; Close Button, Header, etc.-->\r\n\t\t\t<div id=\"modal-content\"></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/time/time.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/time/time.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"border: 1rem solid #8679d3\">\r\n\t{{test()}}\r\n\t<b [ngStyle]=\"styles\">{{ date | date:'HH:mm:ss' }}</b>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/weather/weather.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/weather/weather.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"border: 1rem solid #00ff90\">\r\n\t<h1>Weather Forecasts</h1>\r\n\t{{test()}}\r\n\t<p>This component demonstrates fetching data from the local webhost. (API delayed by 3-6 seconds, Client polls every 10 seconds.)</p>\r\n\r\n\t<table *ngIf=\"forecasts; else noContent\">\r\n\t\t<thead>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>Date</th>\r\n\t\t\t\t<th>Temp. (C)</th>\r\n\t\t\t\t<th>Temp. (F)</th>\r\n\t\t\t\t<th>Summary</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody>\r\n\t\t\t<tr *ngFor=\"let forecast of forecasts\">\r\n\t\t\t\t<td>{{ forecast.dateFormatted }}</td>\r\n\t\t\t\t<td>{{ forecast.temperatureC }}</td>\r\n\t\t\t\t<td>{{ forecast.temperatureF }}</td>\r\n\t\t\t\t<td>{{ forecast.summary }}</td>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>\r\n\t<h6 *ngIf=\"forecasts\" style=\"text-align: right; margin: 0.25rem;\">Last Updated: {{ lastUpdated | date:'HH:mm:ss' }}</h6>\r\n\t<ng-template #noContent>\r\n\t\t<h4>Requesting Weather Data..</h4>\r\n\t</ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    { path: '**', redirectTo: '', pathMatch: 'full' } //Custom 404 page here.
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    display: flex; \r\n    list-style-type: none;\r\n    -webkit-padding-start: 1em;\r\n            padding-inline-start: 1em;\r\n}\r\n\r\nli>a {\r\n    color: black;\r\n    text-decoration: none;\r\n    margin-right: 1rem;\r\n}\r\n\r\nli>a.active-link {\r\n\tfont-weight: bolder;\r\n\tcolor: orange;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDBCQUF5QjtZQUF6Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixhQUFhO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDFlbTtcclxufVxyXG5cclxubGk+YSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbmxpPmEuYWN0aXZlLWxpbmsge1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcblx0Y29sb3I6IG9yYW5nZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_modal_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/modal/_services */ "./src/app/shared/modal/_services/index.ts");
/* harmony import */ var _home_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/welcome/welcome.component */ "./src/app/home/welcome/welcome.component.ts");




let AppComponent = class AppComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.title = 'ANG-APP';
    }
    showModalExampleA() {
        this.modalService.show(_home_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"], undefined, undefined, { id: 5 });
    }
    showModalExampleB() {
        this.modalService.show(_home_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"], true, undefined, { id: 1 });
    }
    showModalExampleC() {
        this.modalService.show(_home_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"], true, true, { id: 3 });
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush //This applies to children as well. Prevents default change detection; it is inefficient to update EVERY component when one thing changes.
        ,
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_modal_services__WEBPACK_IMPORTED_MODULE_2__["ModalService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _employee_employee_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee/employee.module */ "./src/app/employee/employee.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _home_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/welcome/welcome.component */ "./src/app/home/welcome/welcome.component.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomeModule"],
            _employee_employee_module__WEBPACK_IMPORTED_MODULE_7__["EmployeeModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        ],
        entryComponents: [
            _home_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"] //Dynamically loaded components
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/employee/_services/employee.service.ts":
/*!********************************************************!*\
  !*** ./src/app/employee/_services/employee.service.ts ***!
  \********************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let EmployeeService = class EmployeeService {
    constructor(http) {
        this.http = http;
        this.employeeList_Saved = [];
        this.employeeList_Show = false;
        this.apiUrl = 'https://jsonplaceholder.typicode.com/users';
    }
    getEmployees() {
        return this.http.get(this.apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('Employee Data:', data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getEmployee(id) {
        return this.http.get(`${this.apiUrl}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log(`Employee ${id} Data:`, data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent)
            errorMessage = `Error: ${err.error.message}.`;
        else
            errorMessage = `Status Code: ${err.status}, Error: ${err.message}.`;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], EmployeeService);



/***/ }),

/***/ "./src/app/employee/_services/index.ts":
/*!*********************************************!*\
  !*** ./src/app/employee/_services/index.ts ***!
  \*********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee.service */ "./src/app/employee/_services/employee.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return _employee_service__WEBPACK_IMPORTED_MODULE_0__["EmployeeService"]; });




/***/ }),

/***/ "./src/app/employee/employee-detail/_guards/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/employee/employee-detail/_guards/index.ts ***!
  \***********************************************************/
/*! exports provided: InvalidIDCanActivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _invalid_id_can_activate_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invalid-id.can-activate.guard */ "./src/app/employee/employee-detail/_guards/invalid-id.can-activate.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvalidIDCanActivateGuard", function() { return _invalid_id_can_activate_guard__WEBPACK_IMPORTED_MODULE_0__["InvalidIDCanActivateGuard"]; });




/***/ }),

/***/ "./src/app/employee/employee-detail/_guards/invalid-id.can-activate.guard.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/employee/employee-detail/_guards/invalid-id.can-activate.guard.ts ***!
  \***********************************************************************************/
/*! exports provided: InvalidIDCanActivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidIDCanActivateGuard", function() { return InvalidIDCanActivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let InvalidIDCanActivateGuard = class InvalidIDCanActivateGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        let id = +next.url[1].path;
        if (isNaN(id) || id < 1) {
            alert("Invalid Employee ID");
            this.router.navigate(['/employees']);
            return false;
        }
        return true;
    }
};
InvalidIDCanActivateGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], InvalidIDCanActivateGuard);



/***/ }),

/***/ "./src/app/employee/employee-detail/employee-detail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/employee/employee-detail/employee-detail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLWRldGFpbC9lbXBsb3llZS1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employee/employee-detail/employee-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/employee/employee-detail/employee-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: EmployeeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailComponent", function() { return EmployeeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/employee/_services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let EmployeeDetailComponent = class EmployeeDetailComponent {
    constructor(cdr, route, router, employeeService) {
        this.cdr = cdr;
        this.route = route;
        this.router = router;
        this.employeeService = employeeService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"](); //Acts as a container for multiple subscriptions by using the Add function.
        this.cdr.detach();
    }
    test() {
        console.log("Was checked. E D");
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        this.id = +this.route.snapshot.paramMap.get('id'); //'+' shortcut to convert to numeric from string
        this.subscription.add(this.employeeService.getEmployee(this.id).subscribe(employee => {
            this.employee = employee;
            this.check();
        }, error => console.log(error)));
    }
    ngOnDestroy() {
        if (!this.subscription.closed) //CYA; Always unsubscribe on destroy event to prevent memory leaks.
            this.subscription.unsubscribe();
    }
    onBack() {
        this.router.navigate(['/employees']);
    }
};
EmployeeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        //selector: 'app-employee-detail', //Used in routing; doesn't need a tag selector.
        template: __webpack_require__(/*! raw-loader!./employee-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/employee/employee-detail/employee-detail.component.html"),
        styles: [__webpack_require__(/*! ./employee-detail.component.css */ "./src/app/employee/employee-detail/employee-detail.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"]])
], EmployeeDetailComponent);



/***/ }),

/***/ "./src/app/employee/employee-list/employee-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/employee/employee-list/employee-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n\tborder-collapse: collapse;\r\n}\r\n\r\nthead {\r\n\tcolor: #337AB7;\r\n}\r\n\r\nth,\r\ntd {\r\n\tpadding: 0.25rem;\r\n\tborder-left: 1px solid;\r\n\tborder-bottom: 1px solid;\r\n}\r\n\r\ntbody tr {\r\n\tcursor: pointer;\r\n}\r\n\r\ntbody tr:hover {\r\n\t\tbackground-color: lightblue;\r\n\t}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7O0NBRUMsZ0JBQWdCO0NBQ2hCLHNCQUFzQjtDQUN0Qix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVDO0VBQ0MsMkJBQTJCO0NBQzVCIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxudGhlYWQge1xyXG5cdGNvbG9yOiAjMzM3QUI3O1xyXG59XHJcblxyXG50aCxcclxudGQge1xyXG5cdHBhZGRpbmc6IDAuMjVyZW07XHJcblx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZDtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbn1cclxuXHJcbnRib2R5IHRyIHtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblx0dGJvZHkgdHI6aG92ZXIge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG5cdH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/employee/employee-list/employee-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/employee/employee-list/employee-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/employee/_services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let EmployeeListComponent = class EmployeeListComponent {
    constructor(cdr, employeeService) {
        this.cdr = cdr;
        this.employeeService = employeeService;
        this.filteredEmployees = [];
        this.employees = [];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"](); //Acts as a container for multiple subscriptions by using the Add function.
        this.refreshData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"](); //Acts as an observable that can be manually triggered.
        this.cdr.detach();
    }
    get listFilter() {
        return this._listFilter; //Avoid manipulating the data in the getter, formatting/etc. should be done with pipes.
    }
    set listFilter(value) {
        this._listFilter = value;
        this.filteredEmployees = this._listFilter ? this.performFilter(this.listFilter) : this.employees;
    }
    test() {
        console.log("Was checked. E L");
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        this.showEmployees = this.employeeService.employeeList_Show; //Allow the setting to persist even after navigation by storing it in the service.
        this.filteredEmployees = this.employees = this.employeeService.employeeList_Saved; //Temporary until replaced by the initial call to API.
        this.lastUpdated = this.employeeService.employeeList_LastUpdate; //Shows that the data is outdated.
        this.check();
        this.subscription.add(this.refreshData.pipe(//Refresh triggered by the Subject observable.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), //Get data initially
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.employeeService.getEmployees())).subscribe(employees => {
            this.filteredEmployees = this.employees = employees; //Shuffle data to show that the data is fresh.
            this.lastUpdated = new Date();
            this.check();
        }, error => console.log(error)));
    }
    ngOnDestroy() {
        this.employeeService.employeeList_Show = this.showEmployees; //Store state for later.
        this.employeeService.employeeList_Saved = this.employees;
        this.employeeService.employeeList_LastUpdate = this.lastUpdated;
        if (!this.subscription.closed) //CYA; Always unsubscribe on destroy event to prevent memory leaks.
            this.subscription.unsubscribe();
    }
    trackById(index, employee) {
        if (!employee)
            return null;
        console.log(employee);
        return employee.id;
    }
    performFilter(filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.employees.filter((employee) => employee.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    toggleEmployees() {
        this.showEmployees = !this.showEmployees;
        this.check();
    }
    refreshEmployees() {
        this.refreshData.next(); //Trigger observable.
    }
    shuffleEmployees() {
        this.filteredEmployees = this.shuffle(this.filteredEmployees);
        this.check();
    }
    shuffle(employees) {
        for (let x = employees.length - 1; x > 0; x--) {
            const y = Math.floor(Math.random() * (x + 1));
            [employees[x], employees[y]] = [employees[y], employees[x]];
        }
        return employees;
    }
};
EmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        //selector: 'app-employees', //Used in routing; doesn't need a tag selector.
        template: __webpack_require__(/*! raw-loader!./employee-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/employee/employee-list/employee-list.component.html"),
        styles: [__webpack_require__(/*! ./employee-list.component.css */ "./src/app/employee/employee-list/employee-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]])
], EmployeeListComponent);



/***/ }),

/***/ "./src/app/employee/employee-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/employee/employee-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: EmployeeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function() { return EmployeeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/employee/employee-list/employee-list.component.ts");
/* harmony import */ var _employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee-detail/employee-detail.component */ "./src/app/employee/employee-detail/employee-detail.component.ts");
/* harmony import */ var _employee_detail_guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-detail/_guards */ "./src/app/employee/employee-detail/_guards/index.ts");






const routes = [
    { path: 'employees', component: _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeListComponent"] },
    {
        path: 'employees/:id',
        canActivate: [_employee_detail_guards__WEBPACK_IMPORTED_MODULE_5__["InvalidIDCanActivateGuard"]],
        component: _employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeDetailComponent"]
    }
];
let EmployeeRoutingModule = class EmployeeRoutingModule {
};
EmployeeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EmployeeRoutingModule);



/***/ }),

/***/ "./src/app/employee/employee.module.ts":
/*!*********************************************!*\
  !*** ./src/app/employee/employee.module.ts ***!
  \*********************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _employee_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee-routing.module */ "./src/app/employee/employee-routing.module.ts");
/* harmony import */ var _employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-detail/employee-detail.component */ "./src/app/employee/employee-detail/employee-detail.component.ts");
/* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/employee/employee-list/employee-list.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








let EmployeeModule = class EmployeeModule {
};
EmployeeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeListComponent"],
            _employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeDetailComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _employee_routing_module__WEBPACK_IMPORTED_MODULE_4__["EmployeeRoutingModule"]
        ]
    })
], EmployeeModule);



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/home/welcome/welcome.component.ts");




const routes = [
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/home/welcome/welcome.component.ts");





let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/home/welcome/welcome.component.css":
/*!****************************************************!*\
  !*** ./src/app/home/welcome/welcome.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/home/welcome/welcome.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/welcome/welcome.component.ts ***!
  \***************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WelcomeComponent = class WelcomeComponent {
    constructor() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WelcomeComponent.prototype, "id", void 0);
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        //selector: 'app-welcome', //Used in routing; doesn't need a tag selector.
        template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/welcome/welcome.component.html"),
        styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/home/welcome/welcome.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WelcomeComponent);



/***/ }),

/***/ "./src/app/shared/_pipes/convert-to-spaces.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/_pipes/convert-to-spaces.pipe.ts ***!
  \*********************************************************/
/*! exports provided: ConvertToSpaces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertToSpaces", function() { return ConvertToSpaces; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConvertToSpaces = class ConvertToSpaces {
    transform(value, character) {
        return value.replace(character, ' ');
    }
};
ConvertToSpaces = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'convertToSpaces'
    })
], ConvertToSpaces);



/***/ }),

/***/ "./src/app/shared/_pipes/index.ts":
/*!****************************************!*\
  !*** ./src/app/shared/_pipes/index.ts ***!
  \****************************************/
/*! exports provided: ConvertToSpaces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _convert_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convert-to-spaces.pipe */ "./src/app/shared/_pipes/convert-to-spaces.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConvertToSpaces", function() { return _convert_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_0__["ConvertToSpaces"]; });




/***/ }),

/***/ "./src/app/shared/_services/dom.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/_services/dom.service.ts ***!
  \*************************************************/
/*! exports provided: DOMService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMService", function() { return DOMService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DOMService = class DOMService {
    constructor(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    appendComponentTo(parentId, child, childConfig) {
        const childComponentRef = this.componentFactoryResolver.resolveComponentFactory(child).create(this.injector); //Component Reference from Component
        Object.assign(childComponentRef.instance, childConfig);
        this.appRef.attachView(childComponentRef.hostView);
        const childDomElem = childComponentRef.hostView.rootNodes[0];
        document.getElementById(parentId).appendChild(childDomElem);
        return childComponentRef;
    }
    removeComponent(componentRef) {
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
    }
};
DOMService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], DOMService);



/***/ }),

/***/ "./src/app/shared/_services/index.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/_services/index.ts ***!
  \*******************************************/
/*! exports provided: DOMService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.service */ "./src/app/shared/_services/dom.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOMService", function() { return _dom_service__WEBPACK_IMPORTED_MODULE_0__["DOMService"]; });




/***/ }),

/***/ "./src/app/shared/modal/_services/index.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/modal/_services/index.ts ***!
  \*************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.service */ "./src/app/shared/modal/_services/modal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return _modal_service__WEBPACK_IMPORTED_MODULE_0__["ModalService"]; });




/***/ }),

/***/ "./src/app/shared/modal/_services/modal.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/modal/_services/modal.service.ts ***!
  \*********************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services */ "./src/app/shared/_services/index.ts");



let ModalService = class ModalService {
    constructor(domService) {
        this.domService = domService;
        this.modal_added = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true); //Async; Doesn't need to wait
        this.modal_removing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false); //Sync; Let the subscriber act first
        this.modalContentElementId = 'modal-content';
    }
    show(component, isStatic, isFullPage, config) {
        this.modalComponentRef = this.domService.appendComponentTo(this.modalContentElementId, component, config);
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        this.modal_added.emit({
            isStatic: isStatic,
            isFullPage: isFullPage
        });
    }
    hide() {
        this.modal_removing.emit();
        this.domService.removeComponent(this.modalComponentRef);
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ModalService.prototype, "modal_added", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ModalService.prototype, "modal_removing", void 0);
ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["DOMService"]])
], ModalService);



/***/ }),

/***/ "./src/app/shared/modal/modal.component.css":
/*!**************************************************!*\
  !*** ./src/app/shared/modal/modal.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n\tposition: fixed;\r\n\tdisplay: none;\r\n\tbackground-color: rgba(0, 0, 0, 0.32);\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tbottom: 0;\r\n\tright: 0;\r\n\tz-index: 9999;\r\n}\r\n\r\n.modal-dialog {\r\n\tpointer-events: none;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.modal-content {\r\n\tpointer-events: auto;\r\n\toverflow: auto;\r\n\tmax-width: 100%;\r\n\tmax-height: 100%;\r\n}\r\n\r\n.modal-full {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxlQUFlO0NBQ2YsYUFBYTtDQUNiLHFDQUFxQztDQUNyQyxNQUFNO0NBQ04sT0FBTztDQUNQLFNBQVM7Q0FDVCxRQUFRO0NBQ1IsYUFBYTtBQUNkOztBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbCB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMyKTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHRib3R0b206IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0ei1pbmRleDogOTk5OTtcclxufVxyXG5cclxuLm1vZGFsLWRpYWxvZyB7XHJcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcblx0cG9pbnRlci1ldmVudHM6IGF1dG87XHJcblx0b3ZlcmZsb3c6IGF1dG87XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdG1heC1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tb2RhbC1mdWxsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/modal/modal.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/modal/modal.component.ts ***!
  \*************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services */ "./src/app/shared/modal/_services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let ModalComponent = class ModalComponent {
    constructor(cdr, modalService, elementRef) {
        this.cdr = cdr;
        this.modalService = modalService;
        this.elementRef = elementRef;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.cdr.detach();
    }
    test() {
        console.log("Was checked. M");
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        this.subscription.add(this.modalService.modal_added.subscribe((config) => {
            this.isStatic = config.isStatic || false;
            this.isFullPage = config.isFullPage || false;
            this.check();
            this.show();
        }));
        this.subscription.add(this.modalService.modal_removing.subscribe(() => this.hide()));
    }
    ngAfterViewInit() {
        this.elementRef.nativeElement.querySelector('.modal-close').addEventListener('click', this.closeModal.bind(this));
    }
    ngOnDestroy() {
        if (!this.subscription.closed)
            this.subscription.unsubscribe();
    }
    closeModal(event) {
        if (event.target !== event.currentTarget || (event.target.classList.contains('modal') && this.isStatic))
            return;
        this.modalService.hide();
    }
    show() {
        let nativeElement = this.elementRef.nativeElement.querySelector('.modal');
        //Animations to FadeIn?
        nativeElement.style.display = 'block';
    }
    hide() {
        let nativeElement = this.elementRef.nativeElement.querySelector('.modal');
        //Animations to FadeOut?
        nativeElement.style.display = 'none';
    }
};
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: __webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/modal/modal.component.html"),
        styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/shared/modal/modal.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services__WEBPACK_IMPORTED_MODULE_2__["ModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ModalComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_pipes */ "./src/app/shared/_pipes/index.ts");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weather/weather.component */ "./src/app/shared/weather/weather.component.ts");
/* harmony import */ var _time_time_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./time/time.component */ "./src/app/shared/time/time.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/shared/modal/modal.component.ts");








let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _pipes__WEBPACK_IMPORTED_MODULE_4__["ConvertToSpaces"],
            _weather_weather_component__WEBPACK_IMPORTED_MODULE_5__["WeatherComponent"],
            _time_time_component__WEBPACK_IMPORTED_MODULE_6__["TimeComponent"],
            _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        exports: [
            _pipes__WEBPACK_IMPORTED_MODULE_4__["ConvertToSpaces"],
            _weather_weather_component__WEBPACK_IMPORTED_MODULE_5__["WeatherComponent"],
            _time_time_component__WEBPACK_IMPORTED_MODULE_6__["TimeComponent"],
            _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/time/time.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/time/time.component.ts ***!
  \***********************************************/
/*! exports provided: TimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeComponent", function() { return TimeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TimeComponent = class TimeComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.styles = {
            color: '#000' //Default Color Value
        };
        this.cdr.detach();
    }
    test() {
        console.log("Was checked. T");
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        this.date = new Date();
        setInterval(() => {
            this.date = new Date();
            this.styles.color = `#${this.intToRGB(this.hashCode(this.date.toString()))}`;
            this.check();
        }, 1000);
    }
    hashCode(str) {
        var hash = 0;
        for (var i = 0; i < str.length; i++)
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        return hash;
    }
    intToRGB(i) {
        var c = (i & 0x00FFFFFF).toString(16).toUpperCase();
        return "00000".substring(0, 6 - c.length) + c;
    }
};
TimeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-time',
        template: __webpack_require__(/*! raw-loader!./time.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/time/time.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], TimeComponent);



/***/ }),

/***/ "./src/app/shared/weather/_services/index.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/weather/_services/index.ts ***!
  \***************************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.service */ "./src/app/shared/weather/_services/weather.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return _weather_service__WEBPACK_IMPORTED_MODULE_0__["WeatherService"]; });




/***/ }),

/***/ "./src/app/shared/weather/_services/weather.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/weather/_services/weather.service.ts ***!
  \*************************************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let WeatherService = class WeatherService {
    constructor(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.apiUrl = 'api/SampleData/WeatherForecasts';
    }
    getWeather() {
        return this.http.get(this.baseUrl + this.apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('Weather Data:', data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent)
            errorMessage = `Error: ${err.error.message}.`;
        else
            errorMessage = `Status Code: ${err.status}, Error: ${err.message}.`;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
WeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BASE_URL')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String])
], WeatherService);



/***/ }),

/***/ "./src/app/shared/weather/weather.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/weather/weather.component.ts ***!
  \*****************************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services */ "./src/app/shared/weather/_services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let WeatherComponent = class WeatherComponent {
    constructor(cdr, weatherService) {
        this.cdr = cdr;
        this.weatherService = weatherService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.cdr.detach();
    }
    test() {
        console.log("Was checked. W");
    }
    check() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(10000).pipe(//Refresh triggered by the interval observable.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0), //Get data initially
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.weatherService.getWeather())).subscribe(forecasts => {
            this.forecasts = forecasts;
            this.lastUpdated = new Date();
            this.check();
        }, error => console.log(error)));
    }
    ngOnDestroy() {
        if (!this.subscription.closed) //CYA; Always unsubscribe on destroy event to prevent memory leaks.
            this.subscription.unsubscribe();
    }
};
WeatherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather',
        template: __webpack_require__(/*! raw-loader!./weather.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/weather/weather.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]])
], WeatherComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone-error */ "./node_modules/zone.js/dist/zone-error.js");
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
 // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Cait.Sidener\Desktop\raid\AngularProject\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map