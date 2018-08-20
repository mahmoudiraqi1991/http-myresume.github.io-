(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3 col-sm-5\">\n    <left-bar-comp></left-bar-comp>\n  </div>\n  <div class=\"col-md-9 col-sm-7 scrollConatiner\">\n    <main-side-comp class=\"main-content\"></main-side-comp>\n  </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.route */ "./src/app/app.route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_leftBar_left_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/leftBar/left-bar.component */ "./src/app/pages/leftBar/left-bar.component.ts");
/* harmony import */ var _pages_mainSide_main_side_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/mainSide/main-side.components */ "./src/app/pages/mainSide/main-side.components.ts");
/* harmony import */ var _pages_mainSide_welcomeMessage_welcome_message_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/mainSide/welcomeMessage/welcome-message.components */ "./src/app/pages/mainSide/welcomeMessage/welcome-message.components.ts");
/* harmony import */ var _pages_mainSide_About_about_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/mainSide/About/about.components */ "./src/app/pages/mainSide/About/about.components.ts");
/* harmony import */ var _pages_mainSide_Resume_resume_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/mainSide/Resume/resume.components */ "./src/app/pages/mainSide/Resume/resume.components.ts");
/* harmony import */ var _pages_mainSide_Works_works_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/mainSide/Works/works.components */ "./src/app/pages/mainSide/Works/works.components.ts");
/* harmony import */ var _pages_mainSide_Contact_contact_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/mainSide/Contact/contact.components */ "./src/app/pages/mainSide/Contact/contact.components.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _pages_leftBar_left_bar_component__WEBPACK_IMPORTED_MODULE_8__["LeftBarComponent"],
                _pages_mainSide_main_side_components__WEBPACK_IMPORTED_MODULE_9__["MainSideComponent"],
                _pages_mainSide_welcomeMessage_welcome_message_components__WEBPACK_IMPORTED_MODULE_10__["WelcomeMessageComp"],
                _pages_mainSide_About_about_components__WEBPACK_IMPORTED_MODULE_11__["AboutComponents"],
                _pages_mainSide_Resume_resume_components__WEBPACK_IMPORTED_MODULE_12__["ResumeComponents"],
                _pages_mainSide_Works_works_components__WEBPACK_IMPORTED_MODULE_13__["WorksComponents"],
                _pages_mainSide_Contact_contact_components__WEBPACK_IMPORTED_MODULE_14__["ContactComponents"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_route__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.route.ts":
/*!******************************!*\
  !*** ./src/app/app.route.ts ***!
  \******************************/
/*! exports provided: AppRoutes, routers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routers", function() { return routers; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_mainSide_welcomeMessage_welcome_message_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/mainSide/welcomeMessage/welcome-message.components */ "./src/app/pages/mainSide/welcomeMessage/welcome-message.components.ts");
/* harmony import */ var _pages_mainSide_About_about_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/mainSide/About/about.components */ "./src/app/pages/mainSide/About/about.components.ts");
/* harmony import */ var _pages_mainSide_Resume_resume_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/mainSide/Resume/resume.components */ "./src/app/pages/mainSide/Resume/resume.components.ts");
/* harmony import */ var _pages_mainSide_Works_works_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/mainSide/Works/works.components */ "./src/app/pages/mainSide/Works/works.components.ts");
/* harmony import */ var _pages_mainSide_Contact_contact_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/mainSide/Contact/contact.components */ "./src/app/pages/mainSide/Contact/contact.components.ts");






var AppRoutes = [{
        path: '',
        component: _pages_mainSide_welcomeMessage_welcome_message_components__WEBPACK_IMPORTED_MODULE_1__["WelcomeMessageComp"]
    }, {
        path: 'welcome',
        component: _pages_mainSide_welcomeMessage_welcome_message_components__WEBPACK_IMPORTED_MODULE_1__["WelcomeMessageComp"]
    }, {
        path: 'about',
        component: _pages_mainSide_About_about_components__WEBPACK_IMPORTED_MODULE_2__["AboutComponents"]
    }, {
        path: 'resume',
        component: _pages_mainSide_Resume_resume_components__WEBPACK_IMPORTED_MODULE_3__["ResumeComponents"]
    }, {
        path: 'works',
        component: _pages_mainSide_Works_works_components__WEBPACK_IMPORTED_MODULE_4__["WorksComponents"]
    }, {
        path: 'contact',
        component: _pages_mainSide_Contact_contact_components__WEBPACK_IMPORTED_MODULE_5__["ContactComponents"]
    }];
var routers = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(AppRoutes);


/***/ }),

/***/ "./src/app/pages/leftBar/left-bar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/leftBar/left-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: LeftBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftBarComponent", function() { return LeftBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeftBarComponent = /** @class */ (function () {
    function LeftBarComponent(translate) {
        this.translate = translate;
        translate.setDefaultLang('en');
    }
    LeftBarComponent.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    LeftBarComponent.prototype.ngOnInit = function () {
    };
    LeftBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'left-bar-comp',
            template: __webpack_require__(/*! ./left-bar.components.html */ "./src/app/pages/leftBar/left-bar.components.html"),
            styles: [__webpack_require__(/*! ./left-bar.components.css */ "./src/app/pages/leftBar/left-bar.components.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], LeftBarComponent);
    return LeftBarComponent;
}());



/***/ }),

/***/ "./src/app/pages/leftBar/left-bar.components.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/leftBar/left-bar.components.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/leftBar/left-bar.components.html":
/*!********************************************************!*\
  !*** ./src/app/pages/leftBar/left-bar.components.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\r\n<header class=\"header pull-left\">\r\n\r\n    <!-- Mobile menu -->\r\n    <div class=\"mobile-bar visible-sm visible-xs\">\r\n        <div class=\"hamburger-menu\">\r\n            <div class=\"bar\"></div>\r\n        </div>\r\n    </div>\r\n    <!-- Mobile menu end -->\r\n\r\n    <div class=\"LanguageSwitch\">\r\n        <label>{{ 'Language' | translate }} </label>\r\n        <select #langSelect (click)=\"switchLanguage(langSelect.value)\" class=\"select select2\">\r\n            <option value=\"en\">En</option>\r\n            <option value=\"ar\">Ar</option>\r\n        </select>\r\n    </div>\r\n\r\n    <div class=\"avatar\">\r\n        <!-- <img src=\"../../../assets/img/Pic2.png\" alt=\"Profile Picture\"> -->\r\n         <img src=\"http://placehold.it/165x165\" alt=\"Profile Pic\">\r\n    </div>\r\n\r\n    <div class=\"name\">\r\n        <h1>{{ 'Name' | translate }}</h1>\r\n        <span>{{ 'Title' | translate }}</span>\r\n    </div>\r\n\r\n    <!-- Social Icons -->\r\n    <div class=\"social-icons\">\r\n        <ul>\r\n            <li>\r\n                <a href=\"https://www.facebook.com/mahmoud.osary\">\r\n                    <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"https://twitter.com/OsaryIraqi\">\r\n                    <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"https://www.linkedin.com/in/mahmoud-iraqi-575b0399/\">\r\n                    <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"https://www.behance.net/MahmoudIraQi\">\r\n                    <i class=\"fa fa-behance\" aria-hidden=\"true\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a href=\"https://www.instagram.com/mahmoudosary/\">\r\n                    <i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <!-- Social Icons end -->\r\n\r\n    <!-- Navigation bar -->\r\n    <nav class=\"main-nav\">\r\n        <ul class=\"navigation\">\r\n            <li>\r\n                <a [routerLink]=\"['/welcome']\" routerLinkActive=\"active\">{{ 'Objective' | translate }}</a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/about']\" routerLinkActive=\"active\">{{ 'About' | translate }}</a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/resume']\" routerLinkActive=\"active\">{{ 'Resume' | translate }}</a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/works']\" routerLinkActive=\"active\">{{ 'Works' | translate }}</a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/contact']\" routerLinkActive=\"active\">{{ 'Conatct' | translate }}</a>\r\n            </li>\r\n        </ul>\r\n\r\n\r\n    </nav>\r\n    <!-- Navigation bar end -->\r\n\r\n</header>\r\n<!-- Header end -->"

/***/ }),

/***/ "./src/app/pages/mainSide/About/about.components.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/mainSide/About/about.components.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/mainSide/About/about.components.html":
/*!************************************************************!*\
  !*** ./src/app/pages/mainSide/About/about.components.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Section About -->\r\n<section id=\"about\" class=\"about\">\r\n\r\n    <div class=\"section-header\">\r\n        <h2>Basic Info</h2>\r\n    </div>\r\n\r\n    <!-- Intro -->\r\n    <div class=\"intro\">\r\n\r\n        <ul class=\"info\">\r\n            <li>\r\n                <span>\r\n                    <i class=\"fa fa-calendar\"></i> Address</span> July 6, 1991</li>\r\n            <li>\r\n                <span>\r\n                    <i class=\"fa fa-map-marker\"></i> Location</span> Shubra Misr, Cairo, Egypt</li>\r\n            <li>\r\n                <span>\r\n                    <i class=\"fa fa-envelope\"></i> Email</span> mahmoud.must@hotmail.com</li>\r\n            <li>\r\n                <span>\r\n                    <i class=\"fa fa-mobile\"></i> Phone </span> +2 012 734 900 33</li>\r\n        </ul>\r\n\r\n    </div>\r\n    <!-- Intro end -->\r\n\r\n    <div class=\"section-header\">\r\n        <h2>About Me</h2>\r\n    </div>\r\n\r\n    <!-- Intro -->\r\n    <div class=\"intro\">\r\n\r\n        <p>Hello, My name is Mahmoud IraQi.I graduated from MUST ( Misr University for Science and Technology ), IT collage,\r\n            CS department and Front-End Developer major at IT-Blocks Company.I started the work experience when i had tranning\r\n            as QA and UI&UX designer at Kuwait Net Company in Kuwait.Then, i had a trail as UI&UX developer and SEO at Scylla\r\n            Advertising until the company was closed.ِAnd i was assigned at Smart Clicks as UI&UX developer and SEO until\r\n            the company was closed.And i found the big chance to enter the graphic designer career with UI&UX developer ,\r\n            SEO , System Adminstration and technical support at 2Art Advertising Agency.This agency which increase my work\r\n            experience.When i see my experience stopped of increasing, i was searching of upgrade my position and title until\r\n            find IT-Blocks. </p>\r\n\r\n    </div>\r\n    <!-- Intro end -->\r\n\r\n</section>\r\n<!-- Section About end -->\r\n\r\n<!-- Section Fun Facts -->\r\n<section id=\"facts\" class=\"facts\">\r\n\r\n    <div class=\"section-header-light\">\r\n        <h2>Fun Facts</h2>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-3 col-sm-3 col-xs-6 fact-item\">\r\n            <em class=\"number\">5</em>\r\n            <em class=\"text\">Software Systems</em>\r\n        </div>\r\n\r\n        <div class=\"col-md-3 col-sm-3 col-xs-6 fact-item\">\r\n            <em class=\"number\">25</em>\r\n            <em class=\"text\">Website Completed</em>\r\n        </div>\r\n\r\n        <div class=\"col-md-3 col-sm-3 col-xs-6 fact-item\">\r\n            <em class=\"number\">20</em>\r\n            <em class=\"text\">Graphic Customers</em>\r\n        </div>\r\n\r\n        <div class=\"col-md-3 col-sm-3 col-xs-6 fact-item\">\r\n            <em class=\"number\">3</em>\r\n            <em class=\"text\">Diplomas</em>\r\n        </div>\r\n\r\n        \r\n\r\n    </div>\r\n\r\n</section>\r\n<!-- Section Fun Facts end -->\r\n\r\n<!-- Section About -->\r\n<section id=\"about\" class=\"about\">\r\n\r\n    <div class=\"section-header\">\r\n        <h2>Basic Skills</h2>\r\n    </div>\r\n\r\n    <!-- Skills -->\r\n    <div class=\"skills\">\r\n\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12 item\">\r\n                <div class=\"skill-info clearfix\">\r\n                    <h3 class=\"pull-left\">Able to work under stress</h3>\r\n                    <span class=\"pull-right\">98%</span>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"99\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:99%\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12 item\">\r\n                <div class=\"skill-info clearfix\">\r\n                    <h3 class=\"pull-left\">Able to work with team</h3>\r\n                    <span class=\"pull-right\">80%</span>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:80%\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12 item\">\r\n                <div class=\"skill-info clearfix\">\r\n                    <h3 class=\"pull-left\">Best Communication</h3>\r\n                    <span class=\"pull-right\">45%</span>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:45%\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12 item\">\r\n                <div class=\"skill-info clearfix\">\r\n                    <h3 class=\"pull-left\">Able to work in multi project in the same time</h3>\r\n                    <span class=\"pull-right\">60%</span>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:60%\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <!-- Skills end -->\r\n\r\n\r\n</section>\r\n<!-- Section About end -->"

/***/ }),

/***/ "./src/app/pages/mainSide/About/about.components.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/mainSide/About/about.components.ts ***!
  \**********************************************************/
/*! exports provided: AboutComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponents", function() { return AboutComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponents = /** @class */ (function () {
    function AboutComponents() {
    }
    AboutComponents.prototype.ngOnInit = function () {
    };
    AboutComponents = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about-comp',
            template: __webpack_require__(/*! ./about.components.html */ "./src/app/pages/mainSide/About/about.components.html"),
            styles: [__webpack_require__(/*! ./about.components.css */ "./src/app/pages/mainSide/About/about.components.css")]
        })
    ], AboutComponents);
    return AboutComponents;
}());



/***/ }),

/***/ "./src/app/pages/mainSide/Contact/contact.components.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/mainSide/Contact/contact.components.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/mainSide/Contact/contact.components.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/mainSide/Contact/contact.components.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Contact Me</h1>"

/***/ }),

/***/ "./src/app/pages/mainSide/Contact/contact.components.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/mainSide/Contact/contact.components.ts ***!
  \**************************************************************/
/*! exports provided: ContactComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponents", function() { return ContactComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactComponents = /** @class */ (function () {
    function ContactComponents() {
    }
    ContactComponents.prototype.ngOnInit = function () {
    };
    ContactComponents = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'Contact-comp',
            template: __webpack_require__(/*! ./contact.components.html */ "./src/app/pages/mainSide/Contact/contact.components.html"),
            styles: [__webpack_require__(/*! ./contact.components.css */ "./src/app/pages/mainSide/Contact/contact.components.css")]
        })
    ], ContactComponents);
    return ContactComponents;
}());



/***/ }),

/***/ "./src/app/pages/mainSide/Resume/resume.components.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/mainSide/Resume/resume.components.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/mainSide/Resume/resume.components.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/mainSide/Resume/resume.components.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Section Resume -->\r\n<section id=\"resume\" class=\"resume\">\r\n\r\n    <div class=\"section-header\">\r\n        <h2>Experience</h2>\r\n        <a href=\"../../../../assets/file/Resume_Mahmoud low.pdf\" target=\"_blank\" class=\"resume-download\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Download\">\r\n            <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\r\n        </a>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-xs-12\">\r\n\r\n            <ul class=\"timeline\">\r\n                <li>\r\n                    <div class=\"timeline-badge\">\r\n                        <a>\r\n                            <i class=\"fa fa-circle\" id=\"\"></i>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"timeline-panel\">\r\n                        <div class=\"timeline-heading\">\r\n                            <h4>IT-Blocks</h4>\r\n                        </div>\r\n                        <div class=\"timeline-body\">\r\n                            <p>joined at IT-Blocks in August 2017, and from this time, my experience upgraded 100% to the top and knew what is the meaning of front-end developer and knew angular4, typescript, ajax and ionic. all of this which away of my current experience in graphic designer and UI&UX developer</p>\r\n                        </div>\r\n                        <div class=\"timeline-footer\">\r\n                            <p class=\"text-right\"><span>from</span> August 2017 <span>to</span> present</p>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n\r\n                <li class=\"timeline-inverted\">\r\n                    <div class=\"timeline-badge\">\r\n                        <a>\r\n                            <i class=\"fa fa-circle invert\" id=\"\"></i>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"timeline-panel\">\r\n                        <div class=\"timeline-heading\">\r\n                            <h4>2Art Advertising Agency</h4>\r\n                        </div>\r\n                        <div class=\"timeline-body\">\r\n                            <p>when i entered 2Art ,i filled my energy to learn more new subjects.before 2Art, my experience was in SEO \"Search Engine Optimization\" and UI&UX developer. In 2Art,i learned all things about graphic designer and printing plus my experience in SEO and UI&UX developer and this thing which help me to upgrade myself in some majors</p>\r\n                        </div>\r\n                        <div class=\"timeline-footer\">\r\n                            <p class=\"text-right\"><span>from</span> August 2015 <span>to</span> July 2017</p>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n\r\n                <li>\r\n                    <div class=\"timeline-badge\">\r\n                        <a>\r\n                            <i class=\"fa fa-circle\" id=\"\"></i>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"timeline-panel\">\r\n                        <div class=\"timeline-heading\">\r\n                            <h4>Smart Clicks</h4>\r\n                        </div>\r\n                        <div class=\"timeline-body\">\r\n                            <p>Smart clicks was the very important station of my career. In this station, i knew the PPC \"Pay Per Click\" and google adwards</p>\r\n                        </div>\r\n                        <div class=\"timeline-footer\">\r\n                            <p class=\"text-right\"><span>from</span> February 2015 <span>to</span> June 2015</p>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n\r\n                <li class=\"timeline-inverted\">\r\n                    <div class=\"timeline-badge\">\r\n                        <a>\r\n                            <i class=\"fa fa-circle invert\" id=\"\"></i>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"timeline-panel\">\r\n                        <div class=\"timeline-heading\">\r\n                            <h4>Scylla Advertising</h4>\r\n                        </div>\r\n                        <div class=\"timeline-body\">\r\n                            <p>This is the first station of this major. i knew what is the meaning of SEO and how do it ?\r\n                                and learned all thing about social media and how help me to increase my rank and how increase my traffic to rank top.\r\n                                plus upgraded my experience at HTML and CSS.\r\n                            </p>\r\n                        </div>\r\n                        <div class=\"timeline-footer\">\r\n                            <p class=\"text-right\"><span>from</span> July 2014 <span>to</span> January 2015</p>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n\r\n                <li>\r\n                    <div class=\"timeline-badge\">\r\n                        <a>\r\n                            <i class=\"fa fa-circle\" id=\"\"></i>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"timeline-panel\">\r\n                        <div class=\"timeline-heading\">\r\n                            <h4>KuwaitNet</h4>\r\n                        </div>\r\n                        <div class=\"timeline-body\">\r\n                            <p>This company is one of the biggest software house in Kuwait. And by my good luck i had the chance of training at it. i started as Qualilty man by compare between live demo and web design. And upgraded my position to UI&UX designer. And in last, i had training as UI&UX developer</p>\r\n                        </div>\r\n                        <div class=\"timeline-footer\">\r\n                            <p class=\"text-right\"><span>from</span> March 2013 <span>to</span> July 2013</p>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n                <li class=\"clearfix no-float\"></li>\r\n            </ul>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"section-header\">\r\n        <h2>Education</h2>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n\r\n            <ul class=\"timeline\">\r\n                <li>\r\n                    <div class=\"timeline-badge\">\r\n                        <a>\r\n                            <i class=\"fa fa-circle\" id=\"\"></i>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"timeline-panel\">\r\n                        <div class=\"timeline-heading\">\r\n                            <h4>Russian Culture Center</h4>\r\n                        </div>\r\n                        <div class=\"timeline-body\">\r\n                            <p>i had web development diploma, learned ASP.net, C# and SQL</p>\r\n                        </div>\r\n                        <div class=\"timeline-footer\">\r\n                            <p class=\"text-right\"><span>from</span> Nov 2017 <span>to</span> May 2018</p>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n\r\n                <li class=\"timeline-inverted\">\r\n                    <div class=\"timeline-badge\">\r\n                        <a>\r\n                            <i class=\"fa fa-circle invert\" id=\"\"></i>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"timeline-panel\">\r\n                        <div class=\"timeline-heading\">\r\n                            <h4>Russian Culture Center</h4>\r\n                        </div>\r\n                        <div class=\"timeline-body\">\r\n                            <p>i had web designer diploma, learned Photoshop, Illustrator, Muse, HTMl, CSS and JQuery</p>\r\n                        </div>\r\n                        <div class=\"timeline-footer\">\r\n                            <p class=\"text-right\"><span>from</span> August 2013 <span>to</span> March 2014</p>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n\r\n                <li>\r\n                    <div class=\"timeline-badge\">\r\n                        <a>\r\n                            <i class=\"fa fa-circle\" id=\"\"></i>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"timeline-panel\">\r\n                        <div class=\"timeline-heading\">\r\n                            <h4>Misr University for Science and Technology</h4>\r\n                        </div>\r\n                        <div class=\"timeline-body\">\r\n                            <p>had bachelor of Information Technology with C+ grade.</p>\r\n                        </div>\r\n                        <div class=\"timeline-footer\">\r\n                            <p class=\"text-right\"><span>from</span> September 2008 <span>to</span> August 2012</p>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n\r\n                <li class=\"timeline-inverted\">\r\n                    <div class=\"timeline-badge\">\r\n                        <a>\r\n                            <i class=\"fa fa-circle invert\" id=\"\"></i>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"timeline-panel\">\r\n                        <div class=\"timeline-heading\">\r\n                            <h4>Shubra el Qumaya School</h4>\r\n                        </div>\r\n                        <div class=\"timeline-body\">\r\n                            <p>My High school\r\n\r\n                            </p>\r\n                        </div>\r\n                        <div class=\"timeline-footer\">\r\n                            <p class=\"text-right\"><span>to</span> July 2008</p>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n                <li class=\"clearfix no-float\"></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"section-header\">\r\n        <h2>Software Skills</h2>\r\n    </div>\r\n\r\n    <!-- Skills -->\r\n    <div class=\"skills\">\r\n\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12 item\">\r\n                <div class=\"skill-info clearfix\">\r\n                    <h3 class=\"pull-left\">Photoshop</h3>\r\n                    <span class=\"pull-right\">98%</span>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"99\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:99%\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12 item\">\r\n                <div class=\"skill-info clearfix\">\r\n                    <h3 class=\"pull-left\">Illustrator</h3>\r\n                    <span class=\"pull-right\">90%</span>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:90%\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12 item\">\r\n                <div class=\"skill-info clearfix\">\r\n                    <h3 class=\"pull-left\">HTML</h3>\r\n                    <span class=\"pull-right\">95%</span>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:95%\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12 item\">\r\n                <div class=\"skill-info clearfix\">\r\n                    <h3 class=\"pull-left\">CSS</h3>\r\n                    <span class=\"pull-right\">95%</span>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:95%\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12 item\">\r\n                <div class=\"skill-info clearfix\">\r\n                    <h3 class=\"pull-left\">JQuery</h3>\r\n                    <span class=\"pull-right\">80%</span>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:80%\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12 item\">\r\n                <div class=\"skill-info clearfix\">\r\n                    <h3 class=\"pull-left\">Javascript</h3>\r\n                    <span class=\"pull-right\">70%</span>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:70%\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12 item\">\r\n                <div class=\"skill-info clearfix\">\r\n                    <h3 class=\"pull-left\">Bootstrap</h3>\r\n                    <span class=\"pull-right\">95%</span>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:95%\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12 item\">\r\n                <div class=\"skill-info clearfix\">\r\n                    <h3 class=\"pull-left\">Angular 4</h3>\r\n                    <span class=\"pull-right\">65%</span>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:65%\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12 item\">\r\n                <div class=\"skill-info clearfix\">\r\n                    <h3 class=\"pull-left\">Typescript</h3>\r\n                    <span class=\"pull-right\">30%</span>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:30%\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12 item\">\r\n                <div class=\"skill-info clearfix\">\r\n                    <h3 class=\"pull-left\">Ionic</h3>\r\n                    <span class=\"pull-right\">75%</span>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:75%\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12 item\">\r\n                <div class=\"skill-info clearfix\">\r\n                    <h3 class=\"pull-left\">ASP.net</h3>\r\n                    <span class=\"pull-right\">75%</span>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:75%\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12 item\">\r\n                <div class=\"skill-info clearfix\">\r\n                    <h3 class=\"pull-left\">SQL</h3>\r\n                    <span class=\"pull-right\">15%</span>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:15%\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12 item\">\r\n                <div class=\"skill-info clearfix\">\r\n                    <h3 class=\"pull-left\">Umbraco</h3>\r\n                    <span class=\"pull-right\">15%</span>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:15%\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12 item\">\r\n                <div class=\"skill-info clearfix\">\r\n                    <h3 class=\"pull-left\">Sharepoint</h3>\r\n                    <span class=\"pull-right\">45%</span>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:45%\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12 item\">\r\n                <div class=\"skill-info clearfix\">\r\n                    <h3 class=\"pull-left\">Office</h3>\r\n                    <span class=\"pull-right\">100%</span>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:100%\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12 item\">\r\n                <div class=\"skill-info clearfix\">\r\n                    <h3 class=\"pull-left\">AfterEffect</h3>\r\n                    <span class=\"pull-right\">60%</span>\r\n                </div>\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:60%\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <!-- Skills end -->\r\n\r\n</section>\r\n<!-- Section Resume end -->"

/***/ }),

/***/ "./src/app/pages/mainSide/Resume/resume.components.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/mainSide/Resume/resume.components.ts ***!
  \************************************************************/
/*! exports provided: ResumeComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponents", function() { return ResumeComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ResumeComponents = /** @class */ (function () {
    function ResumeComponents() {
    }
    ResumeComponents.prototype.ngOnInit = function () {
    };
    ResumeComponents = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'resume-comp',
            template: __webpack_require__(/*! ./resume.components.html */ "./src/app/pages/mainSide/Resume/resume.components.html"),
            styles: [__webpack_require__(/*! ./resume.components.css */ "./src/app/pages/mainSide/Resume/resume.components.css")]
        })
    ], ResumeComponents);
    return ResumeComponents;
}());



/***/ }),

/***/ "./src/app/pages/mainSide/Works/works.components.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/mainSide/Works/works.components.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/mainSide/Works/works.components.html":
/*!************************************************************!*\
  !*** ./src/app/pages/mainSide/Works/works.components.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>My Works</h1>"

/***/ }),

/***/ "./src/app/pages/mainSide/Works/works.components.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/mainSide/Works/works.components.ts ***!
  \**********************************************************/
/*! exports provided: WorksComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksComponents", function() { return WorksComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WorksComponents = /** @class */ (function () {
    function WorksComponents() {
    }
    WorksComponents.prototype.ngOnInit = function () {
    };
    WorksComponents = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'works-comp',
            template: __webpack_require__(/*! ./works.components.html */ "./src/app/pages/mainSide/Works/works.components.html"),
            styles: [__webpack_require__(/*! ./works.components.css */ "./src/app/pages/mainSide/Works/works.components.css")]
        })
    ], WorksComponents);
    return WorksComponents;
}());



/***/ }),

/***/ "./src/app/pages/mainSide/main-side.components.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/mainSide/main-side.components.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/mainSide/main-side.components.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/mainSide/main-side.components.ts ***!
  \********************************************************/
/*! exports provided: MainSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSideComponent", function() { return MainSideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainSideComponent = /** @class */ (function () {
    function MainSideComponent() {
    }
    MainSideComponent.prototype.ngOnInit = function () {
    };
    MainSideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main-side-comp',
            template: __webpack_require__(/*! ./main-side.components.html */ "./src/app/pages/mainSide/main-side.components.html")
        })
    ], MainSideComponent);
    return MainSideComponent;
}());



/***/ }),

/***/ "./src/app/pages/mainSide/welcomeMessage/welcome-message.components.css":
/*!******************************************************************************!*\
  !*** ./src/app/pages/mainSide/welcomeMessage/welcome-message.components.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/mainSide/welcomeMessage/welcome-message.components.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/mainSide/welcomeMessage/welcome-message.components.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Section Welcome -->\r\n<section id=\"welcome\" class=\"welcome\">\r\n    <div class=\"quote text-center\">\r\n        <h2>Innovative, creative and a proven team player, I possess a Tech Degree in Front End Development and have 6 years building developing and managing websites, applications and programs for various companies. I seek to secure the position of Team Leader</h2>\r\n    </div>\r\n    <div class=\"overlay\"></div>\r\n</section>\r\n<!-- Section Welcome end -->"

/***/ }),

/***/ "./src/app/pages/mainSide/welcomeMessage/welcome-message.components.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/mainSide/welcomeMessage/welcome-message.components.ts ***!
  \*****************************************************************************/
/*! exports provided: WelcomeMessageComp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeMessageComp", function() { return WelcomeMessageComp; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WelcomeMessageComp = /** @class */ (function () {
    function WelcomeMessageComp() {
    }
    WelcomeMessageComp.prototype.ngOnInit = function () {
    };
    WelcomeMessageComp = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'welcome-message-comp',
            template: __webpack_require__(/*! ./welcome-message.components.html */ "./src/app/pages/mainSide/welcomeMessage/welcome-message.components.html"),
            styles: [__webpack_require__(/*! ./welcome-message.components.css */ "./src/app/pages/mainSide/welcomeMessage/welcome-message.components.css")]
        })
    ], WelcomeMessageComp);
    return WelcomeMessageComp;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Iraqi\MyResume\my-resume-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map