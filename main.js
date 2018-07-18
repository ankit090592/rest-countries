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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col sm-12\">\r\n            <nav class=\"navbar fixed-top navbar-expand-lg trans navbar-dark bg-dark\">\r\n                <a class=\"navbar-brand\">\r\n                    <img src=\"../assets/icons/globe.png\" width=\"30\" height=\"30\" alt=\"Globe icon\">\r\n                    <span class=\"p-1 mr-2\" style=\"color: white; text-align: center\">Know the Globe</span>\r\n                </a>\r\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n                    aria-expanded=\"false\" aria-label=\"Toggle navigation\">   \r\n                    <span class=\"navbar-toggler-icon\"></span>\r\n                </button>\r\n\r\n                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n                    <ul class=\"navbar-nav mr-auto\">\r\n                        <li class=\"nav-item active\">\r\n                            <a class=\"nav-link\" [routerLink]=\"['/home']\" href=\"#\">Home\r\n                                <span class=\"sr-only\">(current)</span>\r\n                                \r\n                            </a>\r\n                        </li>\r\n\r\n                        <!-- <li class=\"nav-item dropdown\">\r\n                            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                                aria-expanded=\"false\">\r\n                                Filters\r\n                            </a>\r\n                            <div class=\"dropdown-menu \" aria-labelledby=\"navbarDropdown\">\r\n                                <label class=\"cust-label\"> Books\r\n                                    <input type=\"radio\" name=\"filter-options\" value=\"books\" > \r\n                                </label>\r\n\r\n                                <label class=\"cust-label\"> Characters\r\n                                    <input type=\"radio\" name=\"filter-options\" value=\"characters\" > \r\n                                </label>\r\n\r\n                                <label class=\"cust-label\"> Houses\r\n                                    <input type=\"radio\" name=\"filter-options\" value=\"houses\" > \r\n                                </label>\r\n                            </div>\r\n                        </li> -->\r\n                    </ul>\r\n\r\n                    </div>\r\n            </nav>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n<router-outlet></router-outlet>"

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
        this.title = 'REST Countries';
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
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _countries_all_countries_all_countries_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./countries/all-countries/all-countries.component */ "./src/app/countries/all-countries/all-countries.component.ts");
/* harmony import */ var _rest_countries_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rest-countries.service */ "./src/app/rest-countries.service.ts");
/* harmony import */ var _countries_countries_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./countries/countries.module */ "./src/app/countries/countries.module.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// for communicating with a remote server over HTTP

//router module used for app level route






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _countries_countries_module__WEBPACK_IMPORTED_MODULE_9__["CountriesModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], pathMatch: 'full' },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'all-countries/:url', component: _countries_all_countries_all_countries_component__WEBPACK_IMPORTED_MODULE_7__["AllCountriesComponent"] }
                ]),
            ],
            providers: [_rest_countries_service__WEBPACK_IMPORTED_MODULE_8__["RestCountriesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/countries/all-countries/all-countries.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/countries/all-countries/all-countries.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    margin-top: 5rem;\r\n  }\r\n  \r\n   .justify-content-evenly{\r\n      justify-content: space-evenly;\r\n    }\r\n  \r\n   /* Create a simple card, and add the shadow for the initial state */\r\n  \r\n   .card {\r\n      /* height: 10%; */\r\n      /* max-height: 100%;  */\r\n      margin: 0.5rem 0;\r\n      /* box-shadow: 0 1px 2px rgba(255, 255, 255, 0.938); */\r\n      transition: all 0.3s ease-in-out;\r\n      }\r\n  \r\n   /* Create the hidden pseudo-element */\r\n  \r\n   /* include the shadow for the end state */\r\n  \r\n   .card::after {\r\n        content: '';\r\n        position: absolute;\r\n        z-index: -1;\r\n        width: 100%;\r\n        height: 100%;\r\n        opacity: 0;\r\n        border-radius: 5px;\r\n        box-shadow: 0 5px 15px rgba(255, 255, 255, 0.877);\r\n        transition: opacity 0.3s ease-in-out;\r\n      }\r\n  \r\n   /* Scale up the box */\r\n  \r\n   .card:hover {\r\n        -webkit-transform: scale(1.05, 1.05);\r\n                transform: scale(1.05, 1.05);\r\n        box-shadow: 0 5px 15px rgba(255, 255, 255, 0.925);\r\n      }\r\n  \r\n   /* Fade in the pseudo-element with the bigger shadow */\r\n  \r\n   .card:hover::after {\r\n    opacity: 1;\r\n  }\r\n  \r\n   #goBackBtn{\r\n    cursor: pointer;\r\n    padding: .5em;\r\ntext-decoration: none;\r\ncolor: #ffffff; \r\nbackground-color: transparent;\r\nfont-size: 20px;\r\noutline-style: none;\r\n  }\r\n  \r\n   #goBackBtn:hover{\r\n    color: #000000;\r\n    background-color: #ffffff;\r\n  }\r\n  \r\n   h4{\r\n    text-align: start;\r\n    color: #ffffff;    \r\n  }\r\n  \r\n   .card.mainBody {\r\n        height: 25rem; \r\n        overflow: hidden;\r\n        background-color: rgba(92, 92, 92, 0.51);\r\n        }\r\n  \r\n   .card.mainBody img {\r\n        height: 40%; \r\n        background-size: 100% 100%;\r\n      }\r\n  \r\n   .card.mainBody p {\r\n        color: #ffffff;\r\n        overflow: hidden;\r\n      text-overflow: ellipsis;\r\n      /* white-space: nowrap; */\r\n      }\r\n  \r\n   .card.mainBody p a{\r\n      color: #fcd116;\r\n      }\r\n  \r\n   .card.mainBody .avatar {\r\n        position: relative;\r\n        top: -4rem;\r\n        margin-bottom: -4rem;\r\n      }\r\n  \r\n   .card.mainBody .avatar img {\r\n        width: 7rem;\r\n        height: 7rem;\r\n        max-width: 7rem;\r\n        max-height: 7rem;\r\n        border-radius: 50%;\r\n                border: 5px solid rgba(255,255,255,0.5);\r\n      }\r\n  \r\n   /* .card.mainBody .info {\r\n        padding: 4px 8px 10px;\r\n      } */\r\n  \r\n   .card.mainBody .info .title {\r\n        margin-bottom: 4px;\r\n        font-size: 1.4rem;\r\n        line-height: 1;\r\n        color: #ffffff;\r\n        vertical-align: middle;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n      text-overflow: ellipsis;\r\n      }\r\n  \r\n   .card.mainBody .info .desc {\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        font-size: 1rem;\r\n        color: #ffffff;\r\n        text-overflow: ellipsis;\r\n      }\r\n  \r\n   .card-footer bottom{\r\n        padding: 0 !important;\r\n        margin-bottom: 0;\r\n      }\r\n  \r\n   .style-filter{\r\n        color: #ffffff;\r\n      }\r\n  \r\n   #scrollToTop{\r\n        cursor: pointer;\r\n   position: fixed;\r\n   bottom: .5em;\r\n   scroll-behavior: smooth;\r\n   right: .5em;\r\n   padding: .5em;\r\n   text-decoration: none;\r\n   color: white;\r\n   background-color: rgba(0, 0, 0, 0.747);\r\n   font-size: 20px;\r\n   outline-style: none;\r\n      }\r\n  \r\n      "

/***/ }),

/***/ "./src/app/countries/all-countries/all-countries.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/countries/all-countries/all-countries.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row ml-1\">\n        <div id=\"goBackBtn\">\n            <i class=\"material-icons\" (click)=\"goBackToPreviousPage()\">\n                arrow_back\n            </i>\n        </div>\n    </div>\n\n\n    <h4 *ngIf=\"filter.name=='' || filter.value=='' ; else elseBlock\"> Click on language/currency to select filter</h4>\n     <ng-template class=\"style-filter\" #elseBlock>\n            <h4> Selected filter: {{filter.name}} {{filter.value}} </h4>\n        </ng-template> \n    <!-- <h4 *ngIf=\"filter!=undefined\" >Selected filter: {{filter.name}} {{filter.value}}</h4> -->\n\n    <div class=\"row text-center\" *ngIf=\"selectedData\">\n\n        <div class=\"col-12 col-sm-6 col-md-4 col-lg-3 text-center\" *ngFor=\"let data of selectedData \">\n\n            <div class=\"card mainBody\">\n\n                <!-- <app-all-countries-shared\n            [flag]=\"data.flag\" [countryName]=\"data.name\" [capitalName]=\"data.capital\" [languages]=\"data.languages\" [currencies] = \"data.currencies\">\n            </app-all-countries-shared> -->\n\n                <img class=\"img-responsive\" src=\"{{data.flag}}\" alt=\"Country Flag\">\n                <div class=\"avatar\">\n                    <img class=\"img-responsive\" src=\"http://cuckold-video.info/wp-content/uploads/2018/04/world-map-full-hd-wallpaper-copy-bwzze96.jpg\" alt=\"Region Map\">\n                </div>\n                <div class=\"info\">\n                    <div class=\"title\">Country: {{data.name}}\n                    </div>\n                    <div class=\"desc\">Capital: {{data.capital}}</div>\n                    <p *ngIf=\"data.languages.length!=undefined && data.languages.length>0\">\n                        Languages:\n                        <a (click)=\"onClickLanguages($event)\" href='#' *ngFor=\"let language of data.languages; let first=first; let last=last\">{{language.name}}{{last ? '' : ','}}</a>\n                    </p>\n                    <p *ngIf=\"data.currencies.length!=undefined && data.currencies.length>0\">\n                        Currency:\n                        <a (click)=\"onClickCurrency($event)\" href='#' *ngFor=\"let currency of data.currencies; let first=first; let last=last\">\n                        {{currency.name}}{{last ? '' : ','}}</a>\n                    </p>\n                </div>\n\n                <div class=\"card-footer bottom\">\n                    <button [routerLink]=\"['/single-country', data.name]\" type=\"button\" class=\"btn btn-default btn-sm\">Details &raquo;</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n    <div id=\"scrollToTop\">\n        <i class=\"material-icons\" (click)=\"scrollPageToTop()\" id=\"scrollToTop\">\n            arrow_upward\n        </i>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/countries/all-countries/all-countries.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/countries/all-countries/all-countries.component.ts ***!
  \********************************************************************/
/*! exports provided: AllCountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCountriesComponent", function() { return AllCountriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_countries_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../rest-countries.service */ "./src/app/rest-countries.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//ViewChild, ElementRef - Activating html element reference support
//for dynamic scrolling of chat window either:
//When user clicks scroll to top and resize scroll-bar 



//for goBack functionality

var AllCountriesComponent = /** @class */ (function () {
    function AllCountriesComponent(_route, router, restCountriesService, location) {
        var _this = this;
        this._route = _route;
        this.router = router;
        this.restCountriesService = restCountriesService;
        this.location = location;
        //Creating an html id like reference to handle that html element from here/ through JS
        //scrollMe - declared like a property in this component to be used
        // @ViewChild('scrollMe', { read: ElementRef })
        // public scrollMe: ElementRef;
        // langValue: any
        // currencyValue: any
        this.selectedData = [];
        this.filter = {
            name: "",
            value: ""
        };
        // public selectedRegionData: any = [];
        this.scrollToTop = false;
        this.allCountriesOfRegion = function (urlFromSelectedRegion) {
            _this.restCountriesService.detailsByRegion(urlFromSelectedRegion).subscribe(function (data) {
                _this.selectedData = data;
                console.log("CompleteData:", _this.selectedData);
            }, function (error) {
                console.log(error.errorMessage);
            });
        };
        this.onClickLanguages = function (event) {
            _this.selectedData.length = 0;
            _this.filter.name = "language";
            var temp = event.target.innerText;
            _this.filter.value = temp.replace(/\,/g, ""); //to replace coma with nothing
            //To stop routing to home page after link click
            event.preventDefault();
            _this.restCountriesService.detailsOfAllCountries().subscribe(function (data) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var country = data_1[_i];
                    for (var _a = 0, _b = country.languages; _a < _b.length; _a++) {
                        var langs = _b[_a];
                        if (langs.name == _this.filter.value) {
                            _this.selectedData = _this.selectedData.concat(country);
                        }
                    }
                }
                console.log("Languages Data: ", _this.selectedData);
            }, function (error) {
                console.log(error.errorMessage);
            });
            console.log("Language selected:" + _this.filter.value);
        };
        this.onClickCurrency = function (event) {
            _this.selectedData.length = 0;
            _this.filter.name = "currency";
            var temp = event.target.innerText;
            _this.filter.value = temp.replace(/\,/g, ""); //to replace coma with nothing
            //To stop routing to home page after link click
            event.preventDefault();
            _this.restCountriesService.detailsOfAllCountries().subscribe(function (data) {
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var country = data_2[_i];
                    for (var _a = 0, _b = country.currencies; _a < _b.length; _a++) {
                        var currency = _b[_a];
                        if (currency.name == _this.filter.value) {
                            _this.selectedData = _this.selectedData.concat(country);
                        }
                    }
                }
                console.log("Currencies Data: ", _this.selectedData);
            }, function (error) {
                console.log(error.errorMessage);
            });
            console.log(_this.filter.value);
        };
        this.scrollPageToTop = function () {
            window.scrollTo(0, 0);
            // this.scrollToTop = true;
        };
    }
    AllCountriesComponent.prototype.ngOnInit = function () {
        var urlFromSelectedRegion = this._route.snapshot.paramMap.get('url');
        this.allCountriesOfRegion(urlFromSelectedRegion);
    };
    AllCountriesComponent.prototype.goBackToPreviousPage = function () {
        this.location.back(); //just goes back to the previous page based on router history,
        //that's why not defining any router
    };
    AllCountriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-countries',
            template: __webpack_require__(/*! ./all-countries.component.html */ "./src/app/countries/all-countries/all-countries.component.html"),
            styles: [__webpack_require__(/*! ./all-countries.component.css */ "./src/app/countries/all-countries/all-countries.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]] //inject Location property, local to this component
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _rest_countries_service__WEBPACK_IMPORTED_MODULE_1__["RestCountriesService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], AllCountriesComponent);
    return AllCountriesComponent;
}());



/***/ }),

/***/ "./src/app/countries/countries.module.ts":
/*!***********************************************!*\
  !*** ./src/app/countries/countries.module.ts ***!
  \***********************************************/
/*! exports provided: CountriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesModule", function() { return CountriesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _all_countries_all_countries_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-countries/all-countries.component */ "./src/app/countries/all-countries/all-countries.component.ts");
/* harmony import */ var _single_country_single_country_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./single-country/single-country.component */ "./src/app/countries/single-country/single-country.component.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CountriesModule = /** @class */ (function () {
    function CountriesModule() {
    }
    CountriesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: 'single-country/:url', component: _single_country_single_country_component__WEBPACK_IMPORTED_MODULE_3__["SingleCountryComponent"] }
                ]),
            ],
            declarations: [_all_countries_all_countries_component__WEBPACK_IMPORTED_MODULE_2__["AllCountriesComponent"], _single_country_single_country_component__WEBPACK_IMPORTED_MODULE_3__["SingleCountryComponent"]]
        })
    ], CountriesModule);
    return CountriesModule;
}());



/***/ }),

/***/ "./src/app/countries/single-country/single-country.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/countries/single-country/single-country.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Orbitron');\r\n\r\n.container{\r\n    margin-top: 5rem;\r\n    background: #ffffff;\r\n}\r\n\r\n#goBackBtn{\r\n    cursor: pointer;\r\n    margin: 0.5rem 0.5rem 0.5rem 0;\r\n    padding: 0.5rem;\r\ntext-decoration: none;\r\ncolor: white;\r\nbackground-color: rgba(0, 0, 0, 0.747);\r\nfont-size: 20px;\r\noutline-style: none;\r\n  }\r\n\r\n/* .info-main{\r\n      width: 100vw;      \r\n  } */\r\n\r\n.info-basic{\r\n      font-size: 1.1rem;\r\n  }\r\n\r\n.flag::after{\r\n    background: #e0e0e0;\r\n    width: 1px;\r\n    content: \"\";\r\n    display:block;\r\n    position: absolute;\r\n    top:0;\r\n    bottom: 0;\r\n    right: 0;\r\n  }\r\n\r\n.country-flag{\r\n      border: 1px solid black;\r\n    width: 50%; \r\n    /* height: 30vh; */\r\n    margin-left: 0;\r\n  }\r\n\r\n.avatar{\r\n    margin:0.5rem 0 0.8rem 0 ;\r\n  }\r\n\r\n.avatar img {      \r\n    width: 7rem;\r\n    height: 7rem;\r\n    max-width: 7rem;\r\n    max-height: 7rem;\r\n    border-radius: 50%;\r\n            border: 5px solid rgba(255,255,255,0.5);\r\n  }\r\n\r\n.title{\r\n    margin-bottom: 0.5rem;\r\n    font-size: 1.4rem;\r\n    line-height: 1;\r\n    color: #ffffff;\r\n    vertical-align: middle;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  }\r\n\r\n.bottom{\r\n    color: #ffffff;\r\n    font-family: 'Orbitron', sans-serif;\r\n  }\r\n\r\n.card.mainBody {\r\n    /* height: 5vh; \r\n    overflow: hidden; */\r\n    margin: 0.2rem;\r\n    background-color: rgba(92, 92, 92, 0.51);\r\n    }\r\n\r\n.info-other{\r\n        margin: 0.5rem;\r\n    }\r\n\r\n.accordion{\r\n        width: 100%;\r\n    }\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/countries/single-country/single-country.component.html":
/*!************************************************************************!*\
  !*** ./src/app/countries/single-country/single-country.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"selectedData\">\n    <div class=\"row ml-1\">\n        <div id=\"goBackBtn\">\n            <i class=\"material-icons\" (click)=\"goBackToPreviousPage()\">\n                arrow_back\n            </i>\n        </div>\n    </div>\n\n    <div *ngFor=\"let data of selectedData \">\n        <div class=\"row mb-4 info-main\">\n            <div class=\"col-12 col-sm-12 col-md-6 flag\">\n                <img class=\"img-responsive country-flag\" src=\"{{data.flag}}\" alt=\"Country Flag\">\n            </div>\n            <div class=\"col-12 col-sm-12 col-md-6\">\n                <div class=\"info-basic\">\n                    Country: {{data.name}}\n                </div>\n                <div class=\"info-basic\">\n                    Capital: {{data.capital}}\n                </div>\n                <div class=\"info-basic\">\n                    Region: {{data.region}}\n                </div>\n                <div class=\"info-basic\" *ngIf=\"data.languages.length!=undefined && data.languages.length>0\">\n                    <span *ngFor=\"let language of data.languages; let first=first; let last=last\">Languages:{{language.name}}{{last ? '' : ', '}}\n                    </span>\n                </div>\n                <div class=\"info-basic\" *ngIf=\"data.currencies.length!=undefined && data.currencies.length>0\">\n                    <span *ngFor=\"let currency of data.currencies; let first=first; let last=last\">\n                        Currencies:{{currency.name}}{{last ? '' : ', '}}\n                    </span>\n                </div>\n                <div class=\"info-basic\">\n                    Demonym: {{data.demonym}}\n                </div>\n                <div class=\"info-basic\">\n                    Timezone: {{data.timezones}}\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"row text-center info-stats\">\n            <div class=\"col-12 col-sm-12 col-md-3\">\n                <div class=\"card mainBody\">\n\n                    <div class=\"avatar\">\n                        <img class=\"img-responsive\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRve6rer8BU1aqH01cve9_bI6VKPJdSH6Ccm7OWvs9WwPiCRY_\"\n                            alt=\"population image\">\n                    </div>\n                    <div class=\"title\">\n                        Population\n                    </div>\n                    <div class=\"card-footer bottom\">\n                        {{data.population}}\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-12 col-sm-12 col-md-3\">\n                <div class=\"card mainBody\">\n\n                    <div class=\"avatar\">\n                        <img class=\"img-responsive\" src=\"http://www.sciencefriday.com/wp-content/uploads/2016/08/Artboard-1.png\"\n                            alt=\"population image\">\n                    </div>\n                    <div class=\"title\">\n                        Area\n                    </div>\n                    <div class=\"card-footer bottom\">\n                        {{data.area}}\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-12 col-sm-12 col-md-3\">\n                <div class=\"card mainBody\">\n\n                    <div class=\"avatar\">\n                        <img class=\"img-responsive\" src=\"http://www.earthscienceeducation.org/Db-MapsCartographyRegions/GoogleEarth-GeographicGrid.jpg\"\n                            alt=\"population image\">\n                    </div>\n                    <div class=\"title\">\n                        Coordinates\n                    </div>\n                    <div class=\"card-footer bottom\">\n                        {{data.latlng}}\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-12 col-sm-12 col-md-3\">\n                <div class=\"card mainBody\">\n\n                    <div class=\"avatar\">\n                        <img class=\"img-responsive\" src=\"https://cdn4.iconfinder.com/data/icons/weby-flat-phone/64/Phone-07-512.png\"\n                            alt=\"population image\">\n                    </div>\n                    <div class=\"title\">\n                        Calling Codes\n                    </div>\n                    <div class=\"card-footer bottom\" *ngIf=\"data.callingCodes.length!=undefined && data.callingCodes.length>0\">\n                        <span *ngFor=\"let callingCode of data.callingCodes; let first=first; let last=last\">\n                            {{callingCode}}{{last ? '' : ', '}}\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row info-other\">\n            <div class=\"accordion\" id=\"accordionExample\">\n                <div class=\"card\">\n                    <div class=\"card-header\" id=\"headingOne\">\n                        <h5 class=\"mb-0\">\n                            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                                Other Information\n                            </button>\n                        </h5>\n                    </div>\n\n                    <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n                        <div class=\"card-body\">\n                            <div class=\"info-basic\">\n                                Subregion: {{data.subregion}}\n                            </div>\n                            <div class=\"info-basic\">\n                                Alpha-2 Code: {{data.alpha2Code}}\n                            </div>\n                            <div class=\"info-basic\">\n                                Alpha-3 Code: {{data.alpha3Code}}\n                            </div>\n                            <div class=\"info-basic\">\n                                Gini: {{data.gini}}\n                            </div>\n                            <div class=\"info-basic\">\n                                Numeric Code: {{data.numericCode}}\n                            </div>\n                            <div class=\"info-basic\">\n                                Ccioc: {{data.cioc}}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/countries/single-country/single-country.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/countries/single-country/single-country.component.ts ***!
  \**********************************************************************/
/*! exports provided: SingleCountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleCountryComponent", function() { return SingleCountryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rest_countries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../rest-countries.service */ "./src/app/rest-countries.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//for goBack functionality

// import { $ } from '../../../../node_modules/protractor';

var SingleCountryComponent = /** @class */ (function () {
    function SingleCountryComponent(_route, router, restCountriesService, location) {
        var _this = this;
        this._route = _route;
        this.router = router;
        this.restCountriesService = restCountriesService;
        this.location = location;
        this.selectedData = [];
        this.singleCountryDetails = function (urlFromSelectedCountry) {
            _this.restCountriesService.allDetailsOfCountry(urlFromSelectedCountry).subscribe(function (data) {
                _this.selectedData = data;
                console.log("Complete Country Details:", _this.selectedData);
            }, function (error) {
                console.log(error.errorMessage);
            });
        };
    }
    SingleCountryComponent.prototype.ngOnInit = function () {
        var urlFromSelectedCountry = this._route.snapshot.paramMap.get('url');
        this.singleCountryDetails(urlFromSelectedCountry);
        jquery__WEBPACK_IMPORTED_MODULE_4__('.bottom').each(function () {
            jquery__WEBPACK_IMPORTED_MODULE_4__(this).prop('Counter', 0).animate({
                Counter: parseInt(jquery__WEBPACK_IMPORTED_MODULE_4__(this).text())
            }, {
                duration: 1000,
                easing: 'swing',
                step: function (now) {
                    jquery__WEBPACK_IMPORTED_MODULE_4__(this).text(Math.ceil(now));
                }
            });
        });
    };
    SingleCountryComponent.prototype.goBackToPreviousPage = function () {
        this.location.back(); //just goes back to the previous page based on router history,
        //that's why not defining any router
    };
    SingleCountryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-country',
            template: __webpack_require__(/*! ./single-country.component.html */ "./src/app/countries/single-country/single-country.component.html"),
            styles: [__webpack_require__(/*! ./single-country.component.css */ "./src/app/countries/single-country/single-country.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _rest_countries_service__WEBPACK_IMPORTED_MODULE_2__["RestCountriesService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], SingleCountryComponent);
    return SingleCountryComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import url(https://fonts.googleapis.com/css?family=Open+Sans);\r\n@import url(https://fonts.googleapis.com/css?family=Montserrat:700);\r\n/* Converted from SCSS as media queries were not working in SCSS */\r\n:root{\r\n  size: 16px;\r\n  font-size: 16px;  \r\n}\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  \r\n}\r\nh1 {\r\n  margin-top: 3.4rem;\r\n  font-size: 2rem;\r\n  text-align: center;\r\n  font-family: Montserrat,sans-serif;\r\n  color: #fff;\r\n}\r\n.accordion {\r\n  width: 100%;\r\n  height: 80vh;\r\n  overflow: hidden;\r\n}\r\n.accordion ul {\r\n  width: 100%;\r\n  display: table;\r\n  table-layout: fixed;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.accordion ul li {\r\n  display: table-cell;\r\n  width: 20%;\r\n  height: 80vh;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: cover;\r\n  transition: all 500ms ease;\r\n}\r\n.accordion ul li div {\r\n  display: block;\r\n  overflow: hidden;\r\n  width: 100%;\r\n}\r\n.accordion ul li div a {\r\n  display: block;\r\n  height: 80vh;\r\n  width: 100%;\r\n  padding: 15px 20px;\r\n  box-sizing: border-box;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  font-family: Open Sans, sans-serif;\r\n  transition: all 200ms ease;\r\n}\r\n.accordion ul li div a * {\r\n  opacity: 0;\r\n  margin: 0;\r\n  width: 100%;\r\n  text-overflow: ellipsis;\r\n  position: relative;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  -webkit-transform: translateX(-20px);\r\n  transform: translateX(-20px);\r\n  transition: all 400ms ease;\r\n}\r\n.accordion ul li div a h2 {\r\n  font-family: Montserrat,sans-serif;\r\n  text-overflow: clip;\r\n  font-size: 24px;\r\n  text-transform: uppercase;\r\n  margin-bottom: 2px;\r\n  top: 65vh;\r\n}\r\n.accordion ul li div a p {\r\n  top: 65vh;\r\n  font-size: 13.5px;\r\n}\r\n.accordion ul li:nth-child(1) {\r\n  background-image: url(\"https://image.freepik.com/free-vector/map-of-africa-in-flat-style_23-2147798737.jpg\");\r\n}\r\n.accordion ul li:nth-child(2) {\r\n  background-image: url(\"https://image.freepik.com/free-vector/map-of-the-americas-with-dots_23-2147807670.jpg\");\r\n}\r\n.accordion ul li:nth-child(3) {\r\n  background-image: url(\"https://image.freepik.com/free-vector/map-of-asia-in-flat-style_23-2147783037.jpg\");\r\n}\r\n.accordion ul li:nth-child(4) {\r\n  background-image: url(\"https://image.freepik.com/free-vector/europe-map-background-with-dots_23-2147789340.jpg\");\r\n}\r\n.accordion ul li:nth-child(5) {\r\n  background-image: url(\"http://www.jarvisisland.info/maps/oceania.gif\");\r\n}\r\n.accordion ul:hover li {\r\n  width: 10% !important;\r\n}\r\n.accordion ul:hover li a * {\r\n  opacity: 0 !important;\r\n}\r\n.accordion ul:hover li:hover,\r\n.accordion ul li:focus, .accordion ul:focus-within li:focus {\r\n  width: 60% !important;\r\n}\r\n.accordion ul:hover li:hover a,\r\n.accordion ul li:focus a, .accordion ul:focus-within li:focus a {\r\n  background: rgba(0, 0, 0, 0.4);\r\n}\r\n.accordion ul:hover li:hover a *,\r\n.accordion ul li:focus a *, .accordion ul:focus-within li:focus a * {\r\n  opacity: 1 !important;\r\n  -webkit-transform: translateX(0);\r\n  transform: translateX(0);\r\n}\r\n@media screen and (max-width: 600px) {\r\n  body {\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-top: 3.3rem;\r\n  }\r\n  h1 {    \r\n    font-size: 1.5rem;  \r\n  }\r\n  \r\n  .accordion {\r\n    height: auto;\r\n  }\r\n  .accordion ul li, .accordion ul li:hover, .accordion ul li:focus, .accordion ul li:focus-within, .accordion ul:hover li, .accordion ul:hover li:hover, .accordion ul:hover li:focus, .accordion ul:hover li:focus-within, .accordion ul:focus li, .accordion ul:focus li:hover, .accordion ul:focus li:focus, .accordion ul:focus li:focus-within, .accordion ul:focus-within li, .accordion ul:focus-within li:hover, .accordion ul:focus-within li:focus, .accordion ul:focus-within li:focus-within {\r\n    display: table;\r\n    table-layout: fixed;\r\n    width: 100% !important;\r\n    transition: none;\r\n  }\r\n}\r\n.about {\r\n  text-align: center;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-size: 12px;\r\n  color: #666;\r\n}\r\n.about a {\r\n  color: blue;\r\n  text-decoration: none;\r\n}\r\n.about a:hover {\r\n  text-decoration: underline;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1>Select a region</h1>\n<div class=\"accordion\" *ngIf=\"regionNames\">\n  <ul >\n    <li tabindex=\"1\" *ngFor=\"let name of regionNames \">\n      <div>\n        <a [routerLink]=\"['/all-countries', name.continentName]\" >\n          <h2>{{name.continentName}}</h2> \n          <p>{{name.description}}</p>\n        </a>\n      </div>\n    </li>    \n  </ul>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_route) {
        this._route = _route;
        this.regionNames = [
            {
                continentName: 'Africa',
                description: 'Africa is the world\'s second largest and second most-populous continent (behind Asia in both categories).'
            },
            {
                continentName: 'Americas',
                description: "The Americas (also collectively called America) comprise the totality of the continents of North and South America.Together, they make up most of the land in Earth's western hemisphere and comprise the New World."
            },
            {
                continentName: 'Asia',
                description: "Asia is Earth's largest and most populous continent, located primarily in the Eastern and Northern Hemispheres. It shares the continental landmass of Eurasia with the continent of Europe and the continental landmass of Afro-Eurasia with both Europe and Africa"
            },
            {
                continentName: 'Europe',
                description: "Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere.  It is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west and the Mediterranean Sea to the south. It comprises the westernmost part of Eurasia."
            },
            {
                continentName: 'Oceania',
                description: "Oceania is a geographic region comprising Australasia, Melanesia, Micronesia and Polynesia.It covers an area of 8,525,989 square kilometres (3,291,903 sq mi) and has a population of 40 million"
            }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/rest-countries.service.ts":
/*!*******************************************!*\
  !*** ./src/app/rest-countries.service.ts ***!
  \*******************************************/
/*! exports provided: RestCountriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestCountriesService", function() { return RestCountriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//importing http client to make requests




var RestCountriesService = /** @class */ (function () {
    function RestCountriesService(http) {
        this.http = http;
        this.url = 'https://restcountries.eu/rest/v2/';
    }
    //to get all countries of selected region from home component
    RestCountriesService.prototype.detailsByRegion = function (data) {
        return this.http.get(this.url + 'region/' + data + '?fields=name;capital;currencies;languages;flag');
    };
    //to get all countries irrespective of region based on filter selected
    RestCountriesService.prototype.detailsOfAllCountries = function () {
        return this.http.get(this.url + 'all?fields=name;capital;currencies;languages;flag');
    };
    //to get all details of a country selected in all Countries component
    RestCountriesService.prototype.allDetailsOfCountry = function (countryName) {
        return this.http.get(this.url + 'name/' + countryName + '?fullText=true');
    };
    RestCountriesService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error)
            errorMessage = 'An error occurred in service ${err.error.message}';
    };
    RestCountriesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RestCountriesService);
    return RestCountriesService;
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

module.exports = __webpack_require__(/*! D:\Documents\edWisor\angular-advanced-assignment\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map