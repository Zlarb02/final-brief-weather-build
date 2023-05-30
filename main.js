"use strict";
(self["webpackChunkfinal_brief_weather"] = self["webpackChunkfinal_brief_weather"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/day/1'
}, {
  path: '**',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./core/not-found/not-found-routing.module */ 8836)).then(m => m.NotFoundRoutingModule)
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _page_page_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/page.module */ 5115);
/* harmony import */ var _core_interceptors_api_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/interceptors/api.interceptor */ 836);
/* harmony import */ var _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/interceptors/error.interceptor */ 422);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/not-found/not-found.module */ 7288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
    useClass: _core_interceptors_api_interceptor__WEBPACK_IMPORTED_MODULE_3__.ApiInterceptor,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
    useClass: _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_4__.ErrorInterceptor,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _page_page_module__WEBPACK_IMPORTED_MODULE_2__.PageModule, _core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_5__.NotFoundModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _page_page_module__WEBPACK_IMPORTED_MODULE_2__.PageModule, _core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_5__.NotFoundModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 836:
/*!******************************************************!*\
  !*** ./src/app/core/interceptors/api.interceptor.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiInterceptor": () => (/* binding */ ApiInterceptor)
/* harmony export */ });
/* harmony import */ var _environments_environments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environments */ 1774);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ApiInterceptor {
  constructor() {}
  intercept(request, next) {
    let modifiedRequest = request;
    if (request.url.includes('search_location_api_endpoint')) {
      modifiedRequest = request.clone({
        url: `${_environments_environments__WEBPACK_IMPORTED_MODULE_0__.environment.search_location_api_endpoint}${request.url.replace('search_location_api_endpoint', '')}`
      });
    } else if (request.url.includes('current_location_api_endpoint')) {
      modifiedRequest = request.clone({
        url: `${_environments_environments__WEBPACK_IMPORTED_MODULE_0__.environment.current_location_api_endpoint}${request.url.replace('current_location_api_endpoint', '')}`
      });
    } else if (request.url.includes('weather_api_endpoint')) {
      modifiedRequest = request.clone({
        url: `${_environments_environments__WEBPACK_IMPORTED_MODULE_0__.environment.weather_api_endpoint}${request.url.replace('weather_api_endpoint', '')}`
      });
    }
    return next.handle(modifiedRequest);
  }
}
ApiInterceptor.ɵfac = function ApiInterceptor_Factory(t) {
  return new (t || ApiInterceptor)();
};
ApiInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ApiInterceptor,
  factory: ApiInterceptor.ɵfac
});

/***/ }),

/***/ 422:
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/error.interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class ErrorInterceptor {
  constructor() {}
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(error => {
      if (error.status !== 200) {
        let message = `Une erreur est survenue lors de la requête HTTP. Erreur satus : ${error.status}`;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error(message));
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(error);
      }
    }));
  }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
  return new (t || ErrorInterceptor)();
};
ErrorInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ErrorInterceptor,
  factory: ErrorInterceptor.ɵfac
});

/***/ }),

/***/ 8836:
/*!************************************************************!*\
  !*** ./src/app/core/not-found/not-found-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundRoutingModule": () => (/* binding */ NotFoundRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _page_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/not-found/not-found.component */ 3669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '**',
  component: _page_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent
}];
class NotFoundRoutingModule {}
NotFoundRoutingModule.ɵfac = function NotFoundRoutingModule_Factory(t) {
  return new (t || NotFoundRoutingModule)();
};
NotFoundRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: NotFoundRoutingModule
});
NotFoundRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NotFoundRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7288:
/*!****************************************************!*\
  !*** ./src/app/core/not-found/not-found.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundModule": () => (/* binding */ NotFoundModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found-routing.module */ 8836);
/* harmony import */ var _page_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page/not-found/not-found.component */ 3669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class NotFoundModule {}
NotFoundModule.ɵfac = function NotFoundModule_Factory(t) {
  return new (t || NotFoundModule)();
};
NotFoundModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: NotFoundModule
});
NotFoundModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotFoundRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NotFoundModule, {
    declarations: [_page_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotFoundRoutingModule]
  });
})();

/***/ }),

/***/ 3669:
/*!**********************************************************************!*\
  !*** ./src/app/core/not-found/page/not-found/not-found.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class NotFoundComponent {}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
  return new (t || NotFoundComponent)();
};
NotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NotFoundComponent,
  selectors: [["app-not-found"]],
  decls: 14,
  vars: 0,
  consts: [[1, "flex-container"], [1, "text-center"], ["id", "digit1", 1, "fade-in"], ["id", "digit2", 1, "fade-in"], ["id", "digit3", 1, "fade-in"], [1, "fadeIn"], ["routerLink", "/homepage"], ["type", "button", "name", "button"]],
  template: function NotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1")(3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "PAGE NOT FOUND");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6)(12, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Return To Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["*[_ngcontent-%COMP%] {\n  font-family: Google sans, Arial;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  color: white;\n  animation: _ngcontent-%COMP%_colorSlide 15s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;\n}\n.flex-container[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.flex-container[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .flex-container[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 10px;\n  cursor: default;\n}\n.flex-container[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .fade-in[_ngcontent-%COMP%], .flex-container[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 2s ease infinite;\n}\n.flex-container[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 8em;\n  transition: font-size 200ms ease-in-out;\n  border-bottom: 1px dashed white;\n}\n.flex-container[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span#digit1[_ngcontent-%COMP%] {\n  animation-delay: 200ms;\n}\n.flex-container[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span#digit2[_ngcontent-%COMP%] {\n  animation-delay: 300ms;\n}\n.flex-container[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span#digit3[_ngcontent-%COMP%] {\n  animation-delay: 400ms;\n}\n.flex-container[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  background: transparent;\n  outline: none;\n  padding: 10px 20px;\n  font-size: 1.1rem;\n  font-weight: bold;\n  color: white;\n  text-transform: uppercase;\n  transition: background-color 200ms ease-in;\n  margin: 20px 0;\n}\n.flex-container[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #555;\n  cursor: pointer;\n}\n\n@keyframes _ngcontent-%COMP%_colorSlide {\n  0% {\n    background-color: #152a68;\n  }\n  25% {\n    background-color: royalblue;\n  }\n  50% {\n    background-color: seagreen;\n  }\n  75% {\n    background-color: tomato;\n  }\n  100% {\n    background-color: #152a68;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9ub3QtZm91bmQvcGFnZS9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUFDSjs7QUFFRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNFQUFBO0FBQ0o7QUFDSTtFQUNFLGtCQUFBO0FBQ047QUFBTTs7RUFFRSxZQUFBO0VBQ0EsZUFBQTtBQUVSO0FBQVE7O0VBQ0Usa0NBQUE7QUFHVjtBQUNNO0VBQ0UsY0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0JBQUE7QUFDUjtBQUNRO0VBQWMsc0JBQUE7QUFFdEI7QUFEUTtFQUFjLHNCQUFBO0FBSXRCO0FBSFE7RUFBYyxzQkFBQTtBQU10QjtBQUhNO0VBQ0UsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBQUE7QUFLUjtBQUhRO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUtWOztBQUNFO0VBQ0U7SUFBSyx5QkFBQTtFQUdQO0VBRkU7SUFBTSwyQkFBQTtFQUtSO0VBSkU7SUFBTSwwQkFBQTtFQU9SO0VBTkU7SUFBTSx3QkFBQTtFQVNSO0VBUkU7SUFBTyx5QkFBQTtFQVdUO0FBQ0Y7QUFURTtFQUNFO0lBQ0UsVUFBQTtFQVdKO0VBVEU7SUFDRSxVQUFBO0VBV0o7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIGZvbnQtZmFtaWx5OiBHb29nbGUgc2FucywgQXJpYWw7XG4gIH1cbiAgXG4gIGh0bWwsIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAuZmxleC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYW5pbWF0aW9uOiBjb2xvclNsaWRlIDE1cyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKSBpbmZpbml0ZTtcbiAgXG4gICAgLnRleHQtY2VudGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGgxLFxuICAgICAgaDMge1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgXG4gICAgICAgIC5mYWRlLWluIHtcbiAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiAycyBlYXNlIGluZmluaXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDhlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDIwMG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHdoaXRlO1xuICBcbiAgICAgICAgc3BhbiNkaWdpdDEgeyBhbmltYXRpb24tZGVsYXk6IDIwMG1zOyB9XG4gICAgICAgIHNwYW4jZGlnaXQyIHsgYW5pbWF0aW9uLWRlbGF5OiAzMDBtczsgfVxuICAgICAgICBzcGFuI2RpZ2l0MyB7IGFuaW1hdGlvbi1kZWxheTogNDAwbXM7IH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGVhc2UtaW47XG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICBcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgY29sb3I6ICM1NTU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGNvbG9yU2xpZGUge1xuICAgIDAlIHsgYmFja2dyb3VuZC1jb2xvcjogIzE1MmE2ODsgfVxuICAgIDI1JSB7IGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTsgfVxuICAgIDUwJSB7IGJhY2tncm91bmQtY29sb3I6IHNlYWdyZWVuOyB9XG4gICAgNzUlIHsgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvOyB9XG4gICAgMTAwJSB7IGJhY2tncm91bmQtY29sb3I6ICMxNTJhNjg7IH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIGZyb20ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9O1xuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5769:
/*!****************************************************************!*\
  !*** ./src/app/core/search/search-bar/search-bar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchBarComponent": () => (/* binding */ SearchBarComponent)
/* harmony export */ });
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! toastr */ 6545);
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_chosen_location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/chosen-location.service */ 2756);
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/search.service */ 4112);
/* harmony import */ var src_app_services_location_img_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/location-img.service */ 8524);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);







function SearchBarComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 6);
  }
  if (rf & 2) {
    const photo_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-image", "url(" + photo_r2.urls.regular + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", i_r3 === ctx_r1.currentIndex);
  }
}
class SearchBarComponent {
  constructor(chosenLocationService, searchService, locationImgService) {
    this.chosenLocationService = chosenLocationService;
    this.searchService = searchService;
    this.locationImgService = locationImgService;
    this.currentIndex = 0;
    this.placeholderText = "Chercher Lieu (Ville, Pays, ...)";
  }
  ngOnInit() {
    this.startSlideshow();
    this.searchService.getPlace().subscribe(osmObj => {
      if (osmObj) this.locationFound = osmObj;
      if (this.locationFound) {
        this.imgSearch = this.locationFound.display_name.split(',');
        if (this.imgSearch[0] !== this.imgSearch[this.imgSearch.length - 1]) this.locationImgService.getImgFromLoc(`${this.imgSearch[0]}, ${this.imgSearch[this.imgSearch.length]}`).subscribe({
          next: response => {
            this.photos = response.results;
          }
        });else this.locationImgService.getImgFromLoc(`${this.imgSearch[0]}`).subscribe({
          next: response => {
            this.photos = response.results;
          }
        });
      }
    });
  }
  onSubmit() {
    this.getPlaceName(this.locationInput);
  }
  getPlaceName(place) {
    this.chosenLocationService.getLatAndLonFromSearch(place).subscribe({
      next: osmObj => {
        this.locationFound = osmObj[0];
        if (this.locationFound) {
          this.imgSearch = this.locationFound.display_name.split(',');
          if (this.imgSearch[0] !== this.imgSearch[this.imgSearch.length - 1]) this.locationImgService.getImgFromLoc(`${this.imgSearch[0]}, ${this.imgSearch[this.imgSearch.length]}`).subscribe({
            next: response => {
              this.photos = response.results;
            }
          });else this.locationImgService.getImgFromLoc(`${this.imgSearch[0]}`).subscribe({
            next: response => {
              this.photos = response.results;
            }
          });
        } else {
          this.locationImgService.getImgFromLoc(`backroom`).subscribe({
            next: response => {
              this.photos = response.results;
            }
          });
          toastr__WEBPACK_IMPORTED_MODULE_0___default().error('Aucun lieu trouvé', 'Recherche', {
            closeButton: true,
            progressBar: false,
            timeOut: 3000,
            extendedTimeOut: 7000,
            tapToDismiss: false,
            toastClass: 'toast place-not-found'
          });
        }
        this.searchService.setPlace(this.locationFound);
      }
    });
  }
  startSlideshow() {
    setInterval(() => {
      if (this.photos) this.currentIndex = (this.currentIndex + 1) % this.photos.length;
    }, 5000);
  }
  removePlaceholder() {
    this.placeholderText = "";
  }
  restorePlaceholder() {
    this.placeholderText = "Chercher Lieu (Ville, Pays, ...)";
  }
}
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) {
  return new (t || SearchBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_chosen_location_service__WEBPACK_IMPORTED_MODULE_1__.ChosenLocationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_location_img_service__WEBPACK_IMPORTED_MODULE_3__.LocationImgService));
};
SearchBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: SearchBarComponent,
  selectors: [["app-search-bar"]],
  decls: 6,
  vars: 3,
  consts: [[1, "search"], [3, "submit"], ["form", "ngForm"], ["type", "text", "name", "city", 3, "placeholder", "ngModel", "focus", "blur", "ngModelChange"], [1, "slideshow"], ["class", "slide", 3, "active", "background-image", 4, "ngFor", "ngForOf"], [1, "slide"]],
  template: function SearchBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "form", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function SearchBarComponent_Template_form_submit_1_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("focus", function SearchBarComponent_Template_input_focus_3_listener() {
        return ctx.removePlaceholder();
      })("blur", function SearchBarComponent_Template_input_blur_3_listener() {
        return ctx.restorePlaceholder();
      })("ngModelChange", function SearchBarComponent_Template_input_ngModelChange_3_listener($event) {
        return ctx.locationInput = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SearchBarComponent_div_5_Template, 1, 4, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx.placeholderText)("ngModel", ctx.locationInput);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.photos);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm],
  styles: [".slideshow[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  overflow: hidden;\n}\n\n.slide[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n\n.slide.active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n@keyframes _ngcontent-%COMP%_slideAnimation {\n  0% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.search[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: relative;\n  margin-left: 2vh;\n  margin-bottom: 5vh;\n  top: 1vh;\n  text-align: center;\n}\n\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: var(--blue2);\n  outline: none;\n  border: none;\n  border-radius: 6px;\n  padding: 1em;\n  color: whitesmoke;\n  width: 250px;\n  font-size: 0.8em;\n  text-align: center;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  color: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9zZWFyY2gvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtBQUFKOztBQUdBO0VBQ0k7SUFDSSxVQUFBO0VBQU47RUFFRTtJQUNJLFVBQUE7RUFBTjtFQUVFO0lBQ0ksVUFBQTtFQUFOO0VBRUU7SUFDSSxVQUFBO0VBQU47QUFDRjtBQUlBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUtBO0VBQ0ksOEJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLQTtFQUNJLGlCQUFBO0FBRkoiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zbGlkZXNob3cge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zbGlkZSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcbn1cblxuLnNsaWRlLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuQGtleWZyYW1lcyBzbGlkZUFuaW1hdGlvbiB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAyMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICA4MCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG59XG5cblxuLnNlYXJjaHtcbiAgICB6LWluZGV4OiAyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogMnZoO1xuICAgIG1hcmdpbi1ib3R0b206IDV2aDtcbiAgICB0b3A6IDF2aDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWFyY2ggaW5wdXR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZTIpO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4778:
/*!**********************************************!*\
  !*** ./src/app/core/search/search.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchModule": () => (/* binding */ SearchModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-bar/search-bar.component */ 5769);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




class SearchModule {}
SearchModule.ɵfac = function SearchModule_Factory(t) {
  return new (t || SearchModule)();
};
SearchModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SearchModule
});
SearchModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SearchModule, {
    declarations: [_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_0__.SearchBarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule],
    exports: [_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_0__.SearchBarComponent]
  });
})();

/***/ }),

/***/ 1774:
/*!**********************************************!*\
  !*** ./src/app/environments/environments.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  search_location_api_endpoint: "https://nominatim.openstreetmap.org/search",
  current_location_api_endpoint: "https://nominatim.openstreetmap.org/reverse",
  weather_api_endpoint: "https://api.open-meteo.com/v1/forecast"
};

/***/ }),

/***/ 5417:
/*!*****************************************************!*\
  !*** ./src/app/page/app-page/app-page.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppPageComponent": () => (/* binding */ AppPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_current_location_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/current-location.service */ 5079);
/* harmony import */ var src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/weather.service */ 1834);
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/search.service */ 4112);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_short_forecast_current_day_current_day_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/short-forecast/current-day/current-day.component */ 8137);
/* harmony import */ var _components_short_forecast_selected_day_selected_day_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/short-forecast/selected-day/selected-day.component */ 6222);
/* harmony import */ var _components_short_forecast_hourly_forecast_hourly_forecast_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/short-forecast/hourly-forecast/hourly-forecast.component */ 2341);
/* harmony import */ var _components_long_forecast_seven_days_seven_days_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/long-forecast/seven-days/seven-days.component */ 6185);
/* harmony import */ var _core_search_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/search/search-bar/search-bar.component */ 5769);










function AppPageComponent_app_current_day_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-current-day", 1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("currentLocation", ctx_r0.currentLocation)("chosenLocation", ctx_r0.chosenLocation)("weather", ctx_r0.weather);
  }
}
function AppPageComponent_app_selected_day_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-selected-day", 1);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("currentLocation", ctx_r1.currentLocation)("chosenLocation", ctx_r1.chosenLocation)("weather", ctx_r1.weather);
  }
}
class AppPageComponent {
  constructor(currentLocationService, weatherService, searchService) {
    this.currentLocationService = currentLocationService;
    this.weatherService = weatherService;
    this.searchService = searchService;
    this.date = new Date();
    this.currentHour = Number(this.date.getHours().toString().padStart(2, '0'));
    const url = window.location.pathname;
    const segments = url.split('/');
    if (segments.length === 4) {
      this.hourIndex = Number(segments[segments.length - 1]);
      this.dayIndex = Number(segments[segments.length - 2]) - 1;
    } else if (segments.length === 3) {
      this.dayIndex = Number(segments[segments.length - 1]) - 1;
      this.hourIndex = Number(this.currentHour);
    }
  }
  ngOnInit() {
    this.currentLocationService.getCurrentLocationFromBrowser().subscribe(location => {
      this.currentLocation = location;
    });
  }
}
AppPageComponent.ɵfac = function AppPageComponent_Factory(t) {
  return new (t || AppPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_current_location_service__WEBPACK_IMPORTED_MODULE_0__.CurrentLocationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_1__.WeatherService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchService));
};
AppPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: AppPageComponent,
  selectors: [["app-page"]],
  decls: 6,
  vars: 8,
  consts: [[3, "currentLocation", "chosenLocation", "weather", 4, "ngIf"], [3, "currentLocation", "chosenLocation", "weather"]],
  template: function AppPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-search-bar");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "[cityName]=\"cityName\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AppPageComponent_app_current_day_2_Template, 1, 3, "app-current-day", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, AppPageComponent_app_selected_day_3_Template, 1, 3, "app-selected-day", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "app-hourly-forecast", 1)(5, "app-seven-days", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.dayIndex === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.dayIndex !== 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("currentLocation", ctx.currentLocation)("chosenLocation", ctx.chosenLocation)("weather", ctx.weather);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("currentLocation", ctx.currentLocation)("chosenLocation", ctx.chosenLocation)("weather", ctx.weather);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _components_short_forecast_current_day_current_day_component__WEBPACK_IMPORTED_MODULE_3__.CurrentDayComponent, _components_short_forecast_selected_day_selected_day_component__WEBPACK_IMPORTED_MODULE_4__.SelectedDayComponent, _components_short_forecast_hourly_forecast_hourly_forecast_component__WEBPACK_IMPORTED_MODULE_5__.HourlyForecastComponent, _components_long_forecast_seven_days_seven_days_component__WEBPACK_IMPORTED_MODULE_6__.SevenDaysComponent, _core_search_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_7__.SearchBarComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3825:
/*!********************************************************************************!*\
  !*** ./src/app/page/app-page/components/long-forecast/long-forecast.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LongForecastModule": () => (/* binding */ LongForecastModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _seven_days_seven_days_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seven-days/seven-days.component */ 6185);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




class LongForecastModule {}
LongForecastModule.ɵfac = function LongForecastModule_Factory(t) {
  return new (t || LongForecastModule)();
};
LongForecastModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: LongForecastModule
});
LongForecastModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LongForecastModule, {
    declarations: [_seven_days_seven_days_component__WEBPACK_IMPORTED_MODULE_0__.SevenDaysComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_seven_days_seven_days_component__WEBPACK_IMPORTED_MODULE_0__.SevenDaysComponent]
  });
})();

/***/ }),

/***/ 6185:
/*!*******************************************************************************************!*\
  !*** ./src/app/page/app-page/components/long-forecast/seven-days/seven-days.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SevenDaysComponent": () => (/* binding */ SevenDaysComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/weather.service */ 1834);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/search.service */ 4112);
/* harmony import */ var src_app_services_sibling_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sibling.service */ 6253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);






const _c0 = function (a1) {
  return ["/day", a1];
};
function SevenDaysComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 8)(5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br")(8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "br")(11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "br")(14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const date_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, i_r3 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.formatDate(date_r2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "assets/weather_img/", ctx_r1.sevenWeatherIcons[i_r3], "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.sevenWeatherDescriptions[i_r3], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r1.sevenWeatherTempMin[i_r3], "\u00B0C - ", ctx_r1.sevenWeatherTempMax[i_r3], "\u00B0C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" Ressenti ", ctx_r1.sevenWeatherApparentTempMin[i_r3], "\u00B0C - ", ctx_r1.sevenWeatherApparentTempMax[i_r3], "\u00B0C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Pluie: ", ctx_r1.sevenWeatherPrecipitationProbabilityMean[i_r3], " % ");
  }
}
function SevenDaysComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SevenDaysComponent_div_4_div_1_Template, 16, 11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.dailyForecast.time);
  }
}
class SevenDaysComponent {
  constructor(weatherService, router, searchService, siblingService) {
    this.weatherService = weatherService;
    this.router = router;
    this.searchService = searchService;
    this.siblingService = siblingService;
  }
  ngOnInit() {
    this.searchService.getPlace().subscribe(osmObj => {
      this.chosenPlace = osmObj;
      this.getDailyForecast();
    });
  }
  ngOnChanges(changes) {
    if (changes['currentLocation'] && changes['currentLocation'].currentValue) {
      this.getDailyForecast();
    }
  }
  getDailyForecast() {
    if (this.chosenPlace) this.weatherService.getWeatherForecast(this.chosenPlace.lat, this.chosenPlace.lon).subscribe(weather => {
      this.dates = weather.daily.time;
      this.sevenWeatherTempMin = weather.daily.temperature_2m_min;
      this.sevenWeatherTempMax = weather.daily.temperature_2m_max;
      this.sevenWeatherApparentTempMin = weather.daily.apparent_temperature_min;
      this.sevenWeatherApparentTempMax = weather.daily.apparent_temperature_max;
      this.sevenWeatherPrecipitationProbabilityMean = weather.daily.precipitation_probability_mean;
      this.sevenWeatherDescriptions = weather.daily.weathercode.map(code => this.weatherService.getWeatherDescription(code));
      this.sevenWeatherIcons = weather.daily.weathercode.map(code => this.weatherService.getWeatherIcon(code));
      this.winddirection_10m = weather.daily.winddirection_10m_dominant;
      this.windspeed_10m = weather.daily.windspeed_10m_max;
      return this.dailyForecast = weather.daily;
    });else if (this.currentLocation) this.weatherService.getWeatherForecast(this.currentLocation.lat, this.currentLocation.lon).subscribe(weather => {
      this.dates = weather.daily.time;
      this.sevenWeatherTempMin = weather.daily.temperature_2m_min;
      this.sevenWeatherTempMax = weather.daily.temperature_2m_max;
      this.sevenWeatherApparentTempMin = weather.daily.apparent_temperature_min;
      this.sevenWeatherApparentTempMax = weather.daily.apparent_temperature_max;
      this.sevenWeatherPrecipitationProbabilityMean = weather.daily.precipitation_probability_mean;
      this.sevenWeatherDescriptions = weather.daily.weathercode.map(code => this.weatherService.getWeatherDescription(code));
      this.sevenWeatherIcons = weather.daily.weathercode.map(code => this.weatherService.getWeatherIcon(code));
      this.winddirection_10m = weather.daily.winddirection_10m_dominant;
      this.windspeed_10m = weather.daily.windspeed_10m_max;
      return this.dailyForecast = weather.daily;
    });
  }
  formatDate(date) {
    const weekdays = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    const dateObj = new Date(date);
    const dayOfWeek = weekdays[dateObj.getDay()];
    const dayOfMonth = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    return `${dayOfWeek} ${dayOfMonth} ${month}`;
  }
}
SevenDaysComponent.ɵfac = function SevenDaysComponent_Factory(t) {
  return new (t || SevenDaysComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_0__.WeatherService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_search_service__WEBPACK_IMPORTED_MODULE_1__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_sibling_service__WEBPACK_IMPORTED_MODULE_2__.SiblingService));
};
SevenDaysComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SevenDaysComponent,
  selectors: [["app-seven-days"]],
  inputs: {
    currentLocation: "currentLocation",
    chosenLocation: "chosenLocation",
    weather: "weather",
    dailyForecast: "dailyForecast",
    dates: "dates",
    sevenWeather: "sevenWeather",
    sevenWeatherDescriptions: "sevenWeatherDescriptions",
    sevenWeatherIcons: "sevenWeatherIcons",
    sevenWeatherTempMin: "sevenWeatherTempMin",
    sevenWeatherTempMax: "sevenWeatherTempMax",
    sevenWeatherApparentTempMin: "sevenWeatherApparentTempMin",
    sevenWeatherApparentTempMax: "sevenWeatherApparentTempMax",
    sevenWeatherPrecipitationProbabilityMean: "sevenWeatherPrecipitationProbabilityMean"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
  decls: 5,
  vars: 1,
  consts: [[1, "container", "daily-container"], [1, "card-container", "daily-card-container"], ["class", "row", 4, "ngIf"], [1, "row"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "col"], [1, "card", "daily-card", 3, "routerLink"], [1, "card-body", "daily-card-body"], ["alt", "Weather Icon", 3, "src"]],
  template: function SevenDaysComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Pr\u00E9visions par jours : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SevenDaysComponent_div_4_Template, 2, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dailyForecast);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
  styles: [".daily-container[_ngcontent-%COMP%] {\n  margin-top: 2vh;\n  width: 95vw;\n  background-color: var(--blue2);\n  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;\n  padding-bottom: 2.5vmin;\n  overflow: hidden;\n  border-radius: 6px;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: scroll;\n  border-radius: 5px;\n  border: solid 3px var(--shadow-dark);\n  margin: 10px;\n  padding: 10px;\n}\n\n.row[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: var(--shadow-light);\n  width: 10vw;\n  font-size: smaller;\n}\n\n.daily-card-container[_ngcontent-%COMP%] {\n  overflow-x: scroll;\n}\n\n.daily-card[_ngcontent-%COMP%] {\n  min-width: 210px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 2vh;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZS9hcHAtcGFnZS9jb21wb25lbnRzL2xvbmctZm9yZWNhc3Qvc2V2ZW4tZGF5cy9zZXZlbi1kYXlzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFESjs7QUFHQTtFQUNJLGNBQUE7QUFBSjs7QUFHQTtFQUNJLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZGFpbHktY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDJ2aDsgICAgXG4gICAgd2lkdGg6IDk1dnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZTIpO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xOCkgMHB4IDJweCA0cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIuNXZtaW47XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0tc2hhZG93LWRhcmspO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLnJvdyB7XG4gICAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGFkb3ctbGlnaHQpO1xuICAgIHdpZHRoOiAxMHZ3O1xuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxuLmRhaWx5LWNhcmQtY29udGFpbmVye1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cbi5kYWlseS1jYXJke1xuICAgIG1pbi13aWR0aDogMjEwcHg7XG59XG5cbmxhYmVse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAydmg7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8137:
/*!**********************************************************************************************!*\
  !*** ./src/app/page/app-page/components/short-forecast/current-day/current-day.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentDayComponent": () => (/* binding */ CurrentDayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/weather.service */ 1834);
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/search.service */ 4112);
/* harmony import */ var src_app_services_sibling_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sibling.service */ 6253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);





function CurrentDayComponent_div_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r1.currentLocation.address.city, ", ", ctx_r1.currentLocation.address.country, " ");
  }
}
function CurrentDayComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r2.chosenPlace.display_name, " ");
  }
}
function CurrentDayComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r3.formatDate(ctx_r3.dates[ctx_r3.dayIndex]), " ", ctx_r3.currentHourForecast.hour, "");
  }
}
function CurrentDayComponent_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r4.currentHourForecast.temperature, "\u00B0C");
  }
}
function CurrentDayComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ressentie ", ctx_r5.currentHourForecast.apparentTemperature, "\u00B0C");
  }
}
function CurrentDayComponent_div_0_div_9_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 22);
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "../../../../../../assets/weather_img/", ctx_r9.currentHourForecast.icon, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function CurrentDayComponent_div_0_div_9_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 22);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "../../../../../../assets/weather_img/", ctx_r10.currentHourForecast.iconNight, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function CurrentDayComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CurrentDayComponent_div_0_div_9_img_2_Template, 1, 1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CurrentDayComponent_div_0_div_9_img_3_Template, 1, 1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.currentHourForecast.icon && ctx_r6.currentHourForecast.isDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.currentHourForecast.icon && !ctx_r6.currentHourForecast.isDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.currentHourForecast.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.currentHourForecast.precipitationProbability, " % de chance de pluie ");
  }
}
function CurrentDayComponent_div_0_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" :\u00A0\u00A0", ctx_r7.currentHourForecast.humidity, " ");
  }
}
const _c0 = function (a0) {
  return {
    "transform": a0
  };
};
function CurrentDayComponent_div_0_div_34_i_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 33);
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, "rotate(" + ctx_r11.currentHourForecast.windDirection + "deg)"));
  }
}
function CurrentDayComponent_div_0_div_34_i_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 34);
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, "rotate(" + ctx_r12.currentHourForecast.windDirection + "deg)"));
  }
}
function CurrentDayComponent_div_0_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Vent :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " :\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "br", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " :\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CurrentDayComponent_div_0_div_34_i_11_Template, 1, 3, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, CurrentDayComponent_div_0_div_34_i_12_Template, 1, 3, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "br", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r8.currentHourForecast.windSpeed, " km/h ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.currentHourForecast.windSpeed > 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.currentHourForecast.windSpeed < 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r8.getWindDirection(ctx_r8.currentHourForecast.windDirection), " ");
  }
}
function CurrentDayComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CurrentDayComponent_div_0_span_4_Template, 2, 2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CurrentDayComponent_div_0_div_5_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CurrentDayComponent_div_0_div_6_Template, 2, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CurrentDayComponent_div_0_div_7_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CurrentDayComponent_div_0_div_8_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, CurrentDayComponent_div_0_div_9_Template, 6, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9)(11, "div", 1)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Temp min :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 11)(20, "div", 12)(21, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Temp max :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 10)(27, "div", 11)(28, "div", 12)(29, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Humidit\u00E9 :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, CurrentDayComponent_div_0_div_32_Template, 3, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, CurrentDayComponent_div_0_div_34_Template, 16, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.currentLocation && !ctx_r0.chosenPlace);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.chosenPlace);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.currentHourForecast);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.currentHourForecast);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.currentHourForecast);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.currentHourForecast);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.sevenWeatherTempMin[ctx_r0.dayIndex], "\u00B0C");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.sevenWeatherTempMax[ctx_r0.dayIndex], "\u00B0C");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.currentHourForecast);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.currentHourForecast);
  }
}
class CurrentDayComponent {
  constructor(weatherService, searchService, siblingService) {
    this.weatherService = weatherService;
    this.searchService = searchService;
    this.siblingService = siblingService;
    this.date = new Date();
    this.currentHour = Number(this.date.getHours().toString().padStart(2, '0'));
    this.setIndexs();
  }
  setIndexs() {
    const url = window.location.pathname;
    const segments = url.split('/');
    if (segments.length === 4) {
      this.hourIndex = Number(segments[segments.length - 1]);
      this.dayIndex = Number(segments[segments.length - 2]) - 1;
    } else if (segments.length === 3) {
      this.dayIndex = Number(segments[segments.length - 1]) - 1;
      this.hourIndex = this.currentHour;
    }
  }
  ngOnInit() {
    this.searchService.getPlace().subscribe(osmObj => {
      this.chosenPlace = osmObj;
      this.getDailyForecast();
      this.getHourlyForecast(this.dayIndex);
    });
    this.siblingService.getRefreshObservable().subscribe(() => {
      this.setIndexs();
      this.getHourlyForecast(this.dayIndex);
    });
  }
  ngOnChanges(changes) {
    if (changes['currentLocation'] && changes['currentLocation'].currentValue) {
      this.getDailyForecast();
      this.getHourlyForecast(this.dayIndex);
    }
  }
  formatDate(date) {
    const weekdays = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    const dateObj = new Date(date);
    const dayOfWeek = weekdays[dateObj.getDay()];
    const dayOfMonth = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    return `${dayOfWeek} ${dayOfMonth} ${month}`;
  }
  getDailyForecast() {
    if (this.chosenPlace) this.weatherService.getWeatherForecast(this.chosenPlace.lat, this.chosenPlace.lon).subscribe(weather => {
      this.dates = weather.daily.time;
      this.sevenWeatherTempMin = weather.daily.temperature_2m_min;
      this.sevenWeatherTempMax = weather.daily.temperature_2m_max;
      this.sevenWeatherApparentTempMin = weather.daily.apparent_temperature_min;
      this.sevenWeatherApparentTempMax = weather.daily.apparent_temperature_max;
      this.sevenWeatherPrecipitationProbabilityMean = weather.daily.precipitation_probability_mean;
      this.sevenWeatherDescriptions = weather.daily.weathercode.map(code => this.weatherService.getWeatherDescription(code));
      this.sevenWeatherIcons = weather.daily.weathercode.map(code => this.weatherService.getWeatherIcon(code));
      this.winddirection_10m = weather.daily.winddirection_10m_dominant;
      this.windspeed_10m = weather.daily.windspeed_10m_max;
      return this.dailyForecast = weather.daily;
    });else if (this.currentLocation) this.weatherService.getWeatherForecast(this.currentLocation.lat, this.currentLocation.lon).subscribe(weather => {
      this.dates = weather.daily.time;
      this.sevenWeatherTempMin = weather.daily.temperature_2m_min;
      this.sevenWeatherTempMax = weather.daily.temperature_2m_max;
      this.sevenWeatherApparentTempMin = weather.daily.apparent_temperature_min;
      this.sevenWeatherApparentTempMax = weather.daily.apparent_temperature_max;
      this.sevenWeatherPrecipitationProbabilityMean = weather.daily.precipitation_probability_mean;
      this.sevenWeatherDescriptions = weather.daily.weathercode.map(code => this.weatherService.getWeatherDescription(code));
      this.sevenWeatherIcons = weather.daily.weathercode.map(code => this.weatherService.getWeatherIcon(code));
      this.winddirection_10m = weather.daily.winddirection_10m_dominant;
      this.windspeed_10m = weather.daily.windspeed_10m_max;
      return this.dailyForecast = weather.daily;
    });
  }
  getHourlyForecast(dayIndex) {
    const startIndex = dayIndex * 24;
    const endIndex = startIndex + 24;
    if (this.chosenPlace) this.weatherService.getWeatherForecast(this.chosenPlace.lat, this.chosenPlace.lon).subscribe(weather => {
      this.hourlyForecast = weather.hourly;
      this.hours = weather.hourly.time.slice(startIndex, endIndex).map(date => date.split('T')[1]);
      this.hourlyWeatherTemp = weather.hourly.temperature_2m.slice(startIndex, endIndex);
      this.hourlyWeatherApparentTemp = weather.hourly.apparent_temperature.slice(startIndex, endIndex);
      this.hourlyWeatherPrecipitationProbability = weather.hourly.precipitation_probability.slice(startIndex, endIndex);
      this.hourlyWeatherHumidity = weather.hourly.relativehumidity_2m.slice(startIndex, endIndex);
      this.hourlyWeatherDescriptions = weather.hourly.weathercode.slice(startIndex, endIndex).map(code => this.weatherService.getWeatherDescription(code));
      this.hourlyWeatherIsDay = this.hourlyForecast.is_day.slice(startIndex, endIndex);
      this.hourlyWeatherIcons = this.hourlyForecast.weathercode.slice(startIndex, endIndex).map(code => this.weatherService.getWeatherIcon(code));
      this.hourlyWeatherIconsNight = this.hourlyForecast.weathercode.slice(startIndex, endIndex).map(code => this.weatherService.getWeatherIconNight(code));
      this.winddirection_10m = weather.hourly.winddirection_10m.slice(startIndex, endIndex);
      this.windspeed_10m = weather.hourly.windspeed_10m.slice(startIndex, endIndex);
      this.currentHourForecast = this.getCurrentHourForecast();
      this.currentHourForecast = this.getSelectedHourForecast(this.hourIndex);
    });else if (this.currentLocation) this.weatherService.getWeatherForecast(this.currentLocation.lat, this.currentLocation.lon).subscribe(weather => {
      this.hourlyForecast = weather.hourly;
      this.hours = weather.hourly.time.slice(startIndex, endIndex).map(date => date.split('T')[1]);
      this.hourlyWeatherTemp = weather.hourly.temperature_2m.slice(startIndex, endIndex);
      this.hourlyWeatherApparentTemp = weather.hourly.apparent_temperature.slice(startIndex, endIndex);
      this.hourlyWeatherPrecipitationProbability = weather.hourly.precipitation_probability.slice(startIndex, endIndex);
      this.hourlyWeatherHumidity = weather.hourly.relativehumidity_2m.slice(startIndex, endIndex);
      this.hourlyWeatherDescriptions = weather.hourly.weathercode.slice(startIndex, endIndex).map(code => this.weatherService.getWeatherDescription(code));
      this.hourlyWeatherIsDay = this.hourlyForecast.is_day.slice(startIndex, endIndex);
      this.hourlyWeatherIcons = this.hourlyForecast.weathercode.slice(startIndex, endIndex).map(code => this.weatherService.getWeatherIcon(code));
      this.hourlyWeatherIconsNight = this.hourlyForecast.weathercode.slice(startIndex, endIndex).map(code => this.weatherService.getWeatherIconNight(code));
      this.winddirection_10m = weather.hourly.winddirection_10m.slice(startIndex, endIndex);
      this.windspeed_10m = weather.hourly.windspeed_10m.slice(startIndex, endIndex);
      this.currentHourForecast = this.getCurrentHourForecast();
      this.currentHourForecast = this.getSelectedHourForecast(this.hourIndex);
    });
  }
  getCurrentHourForecast() {
    let currentHourIndex = -1;
    if (this.currentLocation) currentHourIndex = this.hours.findIndex(hour => hour === `${this.currentHour}:00`);
    if (currentHourIndex !== -1) {
      const currentHourForecast = {
        hour: this.hours[currentHourIndex],
        temperature: this.hourlyWeatherTemp[currentHourIndex],
        apparentTemperature: this.hourlyWeatherApparentTemp[currentHourIndex],
        precipitationProbability: this.hourlyWeatherPrecipitationProbability[currentHourIndex],
        humidity: this.hourlyWeatherHumidity[currentHourIndex],
        description: this.hourlyWeatherDescriptions[currentHourIndex],
        isDay: this.hourlyWeatherIsDay[currentHourIndex],
        icon: this.hourlyWeatherIcons[currentHourIndex],
        iconNight: this.hourlyWeatherIconsNight[currentHourIndex],
        windDirection: this.winddirection_10m[currentHourIndex],
        windSpeed: this.windspeed_10m[currentHourIndex]
      };
      return currentHourForecast;
    } else {
      return null;
    }
  }
  getSelectedHourForecast(i) {
    const currentHourForecast = {
      hour: this.hours[i],
      temperature: this.hourlyWeatherTemp[i],
      apparentTemperature: this.hourlyWeatherApparentTemp[i],
      precipitationProbability: this.hourlyWeatherPrecipitationProbability[i],
      humidity: this.hourlyWeatherHumidity[i],
      description: this.hourlyWeatherDescriptions[i],
      isDay: this.hourlyWeatherIsDay[i],
      icon: this.hourlyWeatherIcons[i],
      iconNight: this.hourlyWeatherIconsNight[i],
      windDirection: this.winddirection_10m[i],
      windSpeed: this.windspeed_10m[i]
    };
    return currentHourForecast;
  }
  getWindDirection(degrees) {
    if (degrees >= 348.75 || degrees < 11.25) {
      return 'Nord';
    } else if (degrees >= 11.25 && degrees < 33.75) {
      return 'Nord-Nord-Est';
    } else if (degrees >= 33.75 && degrees < 56.25) {
      return 'Nord-Est';
    } else if (degrees >= 56.25 && degrees < 78.75) {
      return 'Est-Nord-Est';
    } else if (degrees >= 78.75 && degrees < 101.25) {
      return 'Est';
    } else if (degrees >= 101.25 && degrees < 123.75) {
      return 'Est-Sud-Est';
    } else if (degrees >= 123.75 && degrees < 146.25) {
      return 'Sud-Est';
    } else if (degrees >= 146.25 && degrees < 168.75) {
      return 'Sud-Sud-Est';
    } else if (degrees >= 168.75 && degrees < 191.25) {
      return 'Sud';
    } else if (degrees >= 191.25 && degrees < 213.75) {
      return 'Sud-Sud-Ouest';
    } else if (degrees >= 213.75 && degrees < 236.25) {
      return 'Sud-Ouest';
    } else if (degrees >= 236.25 && degrees < 258.75) {
      return 'Ouest-Sud-Ouest';
    } else if (degrees >= 258.75 && degrees < 281.25) {
      return 'Ouest';
    } else if (degrees >= 281.25 && degrees < 303.75) {
      return 'Ouest-Nord-Ouest';
    } else if (degrees >= 303.75 && degrees < 326.25) {
      return 'Nord-Ouest';
    } else {
      return 'Nord-Nord-Ouest';
    }
  }
}
CurrentDayComponent.ɵfac = function CurrentDayComponent_Factory(t) {
  return new (t || CurrentDayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_0__.WeatherService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_search_service__WEBPACK_IMPORTED_MODULE_1__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_sibling_service__WEBPACK_IMPORTED_MODULE_2__.SiblingService));
};
CurrentDayComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CurrentDayComponent,
  selectors: [["app-current-day"]],
  inputs: {
    currentLocation: "currentLocation",
    chosenLocation: "chosenLocation",
    weather: "weather",
    dailyForecast: "dailyForecast",
    dates: "dates",
    sevenWeather: "sevenWeather",
    sevenWeatherDescriptions: "sevenWeatherDescriptions",
    sevenWeatherIcons: "sevenWeatherIcons",
    sevenWeatherTempMin: "sevenWeatherTempMin",
    sevenWeatherTempMax: "sevenWeatherTempMax",
    sevenWeatherApparentTempMin: "sevenWeatherApparentTempMin",
    sevenWeatherApparentTempMax: "sevenWeatherApparentTempMax",
    sevenWeatherPrecipitationProbabilityMean: "sevenWeatherPrecipitationProbabilityMean",
    winddirection_10m: "winddirection_10m",
    windspeed_10m: "windspeed_10m"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
  decls: 1,
  vars: 1,
  consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "upper-data"], ["src", "../assets/alain.png", "alt", "background image", 1, "bg-img"], [1, "meteo-data"], ["ng", "", "class", "location", 4, "ngIf"], [4, "ngIf"], ["class", "temp", 4, "ngIf"], ["style", "text-align: center;", 4, "ngIf"], [1, "lower-data"], [1, "row"], [1, "col"], [1, "info-block"], [1, "info-label"], [1, "info-value"], [2, "height", "0.6vmax"], ["class", "info-value", 4, "ngIf"], ["class", "info-block-2", 4, "ngIf"], ["ng", "", 1, "location"], [1, "temp"], [2, "text-align", "center"], ["alt", "Weather Icon", 3, "src", 4, "ngIf"], ["alt", "Weather Icon", 3, "src"], [1, "fa-solid", "fa-droplet"], [1, "info-block-2"], [1, "info-label", "vent"], [1, "fa-solid", "fa-wind"], [1, "break-line"], [1, "info-direction"], [1, "fa-regular", "fa-compass"], ["class", "fa-solid fa-angles-down", 3, "ngStyle", 4, "ngIf"], ["class", "fa-solid fa-circle-down", 3, "ngStyle", 4, "ngIf"], [1, "break-line-2"], [1, "fa-solid", "fa-angles-down", 3, "ngStyle"], [1, "fa-solid", "fa-circle-down", 3, "ngStyle"]],
  template: function CurrentDayComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CurrentDayComponent_div_0_Template, 35, 10, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dailyForecast);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle],
  styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 2vh;\n  height: auto;\n  min-height: auto;\n  width: 75vw;\n  background-color: var(--blue2);\n  border-radius: 6px;\n  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;\n}\n\n.upper-data[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  width: 100%;\n  height: auto;\n  border-radius: 6px;\n}\n\n.lower-data[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: scroll;\n  padding: 2vw;\n  width: 100%;\n  height: auto;\n  display: flex;\n}\n\n.bg-img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -26vmax;\n  left: -50vmax;\n  width: 140vmax;\n  filter: brightness(0.6);\n}\n\n.meteo-data[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: large;\n}\n\n.location[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.2em;\n}\n\n.temp[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.6em;\n  font-weight: 900;\n}\n\n.info-label[_ngcontent-%COMP%] {\n  color: beige;\n  font-weight: 300;\n}\n\n.more-infos-label[_ngcontent-%COMP%] {\n  color: beige;\n}\n\n.more-infos-container[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: var(--blue2);\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.infos-block[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  flex-direction: row;\n}\n\n.infos-block-label[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.infos-block-label[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2em;\n}\n\n.infos-block-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  font-size: 0.8em;\n  display: flex;\n}\n\n.info-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.info-direction[_ngcontent-%COMP%], .info-block-2[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%], .vent[_ngcontent-%COMP%] {\n  padding-left: 10vw;\n  text-align: left;\n}\n\n.vent[_ngcontent-%COMP%] {\n  padding-left: 15vw;\n}\n\n.fa-solid[_ngcontent-%COMP%], .fa-regular[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.row[_ngcontent-%COMP%] {\n  align-items: center;\n  text-align: center;\n}\n\n.break-line[_ngcontent-%COMP%], .break-line-2[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 777px) {\n  .bg-img[_ngcontent-%COMP%] {\n    left: -70vmax;\n    width: 150vmax;\n  }\n  .break-line-2[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (max-width: 530px) {\n  .break-line[_ngcontent-%COMP%] {\n    display: block;\n  }\n  h3[_ngcontent-%COMP%] {\n    font-size: 5vw;\n  }\n  .meteo-data[_ngcontent-%COMP%] {\n    font-size: 5vw;\n  }\n  .location[_ngcontent-%COMP%] {\n    font-size: 4vw;\n  }\n  .temp[_ngcontent-%COMP%] {\n    font-size: 5vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZS9hcHAtcGFnZS9jb21wb25lbnRzL3Nob3J0LWZvcmVjYXN0L2N1cnJlbnQtZGF5L2N1cnJlbnQtZGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUFDSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7QUFBSjs7QUFHQTtFQUNJLE9BQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0FBQUo7O0FBR0E7RUFDSTtJQUNJLGFBQUE7SUFDQSxjQUFBO0VBQU47RUFFRTtJQUNJLGNBQUE7RUFBTjtBQUNGO0FBRUE7RUFDSTtJQUNJLGNBQUE7RUFBTjtFQUdFO0lBQ0ksY0FBQTtFQUROO0VBR0U7SUFDSSxjQUFBO0VBRE47RUFHRTtJQUNJLGNBQUE7RUFETjtFQUdFO0lBQ0ksY0FBQTtFQUROO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDJ2aDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogYXV0bztcbiAgICB3aWR0aDogNzV2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlMik7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xOCkgMHB4IDJweCA0cHg7XG59XG5cblxuLnVwcGVyLWRhdGF7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5sb3dlci1kYXRhe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIHBhZGRpbmc6IDJ2dztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmJnLWltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTI2dm1heDtcbiAgICBsZWZ0OiAtNTB2bWF4O1xuICAgIHdpZHRoOiAxNDB2bWF4O1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjYpO1xufSAgXG5cbi5tZXRlby1kYXRhe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZm9udC1zaXplOmxhcmdlO1xufVxuXG4ubG9jYXRpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4udGVtcHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjZlbTtcbiAgICBmb250LXdlaWdodDogOTAwO1xufVxuXG4uaW5mby1sYWJlbHtcbiAgICBjb2xvcjpiZWlnZTtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4ubW9yZS1pbmZvcy1sYWJlbHtcbiAgICBjb2xvcjogYmVpZ2U7XG59XG5cbi5tb3JlLWluZm9zLWNvbnRhaW5lcntcbiAgICBmbGV4OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUyKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uaW5mb3MtYmxvY2t7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5pbmZvcy1ibG9jay1sYWJlbHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5mb3MtYmxvY2stbGFiZWwgaW1nIHtcbiAgICB3aWR0aDogMmVtO1xufVxuXG4uaW5mb3MtYmxvY2stbGFiZWwgc3BhbiB7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pbmZvLXZhbHVle1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5pbmZvLWRpcmVjdGlvbiwgLmluZm8tYmxvY2stMiAuaW5mby12YWx1ZSwgLnZlbnR7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xuICAgIHRleHQtYWxpZ246bGVmdDtcbn1cblxuLnZlbnR7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXZ3O1xufVxuXG4uZmEtc29saWQsIC5mYS1yZWd1bGFye1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnJvd3tcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJyZWFrLWxpbmUsIC5icmVhay1saW5lLTJ7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc3N3B4KSB7XG4gICAgLmJnLWltZyB7XG4gICAgICAgIGxlZnQ6IC03MHZtYXg7XG4gICAgICAgIHdpZHRoOiAxNTB2bWF4O1xuICAgIH1cbiAgICAuYnJlYWstbGluZS0ye1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTMwcHgpIHtcbiAgICAuYnJlYWstbGluZXtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgaDN7XG4gICAgICAgIGZvbnQtc2l6ZTogNXZ3O1xuICAgIH1cbiAgICAubWV0ZW8tZGF0YXtcbiAgICAgICAgZm9udC1zaXplOiA1dnc7XG4gICAgfVxuICAgIC5sb2NhdGlvbntcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XG4gICAgfVxuICAgIC50ZW1we1xuICAgICAgICBmb250LXNpemU6IDV2dztcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 2341:
/*!******************************************************************************************************!*\
  !*** ./src/app/page/app-page/components/short-forecast/hourly-forecast/hourly-forecast.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HourlyForecastComponent": () => (/* binding */ HourlyForecastComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/weather.service */ 1834);
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/search.service */ 4112);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_sibling_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sibling.service */ 6253);






const _c0 = ["cardContainer"];
function HourlyForecastComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 7);
  }
}
function HourlyForecastComponent_div_8_div_1_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 14);
  }
  if (rf & 2) {
    const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "assets/weather_img/", ctx_r7.hourlyWeatherIcons[i_r6], "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function HourlyForecastComponent_div_8_div_1_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 14);
  }
  if (rf & 2) {
    const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "assets/weather_img/", ctx_r8.hourlyWeatherIconsNight[i_r6], "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
const _c1 = function (a0, a1, a2) {
  return {
    "current-hour-card": a0,
    "selected-hour-card": a1,
    "ten-hour-card": a2
  };
};
function HourlyForecastComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HourlyForecastComponent_div_8_div_1_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const i_r6 = restoredCtx.index;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.navigateToHour(i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, HourlyForecastComponent_div_8_div_1_img_5_Template, 1, 1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, HourlyForecastComponent_div_8_div_1_img_6_Template, 1, 1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const hour_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](5, _c1, ctx_r4.isCurrentHour(hour_r5), ctx_r4.isSelectedHour(hour_r5), i_r6 === 10));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", hour_r5, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.hourlyWeatherIsDay[i_r6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r4.hourlyWeatherIsDay[i_r6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r4.hourlyWeatherTemp[i_r6], " \u00B0C ");
  }
}
function HourlyForecastComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HourlyForecastComponent_div_8_div_1_Template, 9, 9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.hours);
  }
}
class HourlyForecastComponent {
  constructor(weatherService, searchService, router, route, location, siblingService) {
    this.weatherService = weatherService;
    this.searchService = searchService;
    this.router = router;
    this.route = route;
    this.location = location;
    this.siblingService = siblingService;
    this.date = new Date();
    this.currentHour = Number(this.date.getHours().toString().padStart(2, '0'));
    const url = window.location.pathname;
    const segments = url.split('/');
    if (segments.length === 4) {
      this.hourIndex = Number(segments[segments.length - 1]);
      this.dayIndex = Number(segments[segments.length - 2]) - 1;
    } else if (segments.length === 3) {
      this.dayIndex = Number(segments[segments.length - 1]) - 1;
      this.hourIndex = this.currentHour;
    }
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getHourlyForecast(this.dayIndex);
    });
    this.searchService.getPlace().subscribe(osmObj => {
      this.chosenPlace = osmObj;
      this.getHourlyForecast(this.dayIndex);
    });
  }
  ngOnChanges(changes) {
    if (changes['currentLocation'] && changes['currentLocation'].currentValue) {
      this.getHourlyForecast(this.dayIndex);
    }
    if (changes['hourIndex'] && changes['hourIndex'].currentValue) {
      this.getHourlyForecast(this.dayIndex);
    }
  }
  scrollToCurrentHour() {
    if (this.cardContainer && this.cardContainer.nativeElement) {
      const currentHourCard = this.cardContainer.nativeElement.querySelector('.current-hour-card');
      if (currentHourCard) {
        currentHourCard.scrollIntoView({
          behavior: 'smooth',
          inline: 'start'
        });
      }
    }
  }
  scrollToSelectedHour() {
    if (this.cardContainer && this.cardContainer.nativeElement) {
      const selectedHourCard = this.cardContainer.nativeElement.querySelector('.selected-hour-card');
      if (selectedHourCard) {
        selectedHourCard.scrollIntoView({
          behavior: 'smooth',
          inline: 'start'
        });
      }
    }
  }
  scrollTo10() {
    if (this.cardContainer && this.cardContainer.nativeElement) {
      const tenHourCard = this.cardContainer.nativeElement.querySelector('.ten-hour-card');
      if (tenHourCard) {
        tenHourCard.scrollIntoView({
          behavior: 'smooth',
          inline: 'start'
        });
      }
    }
  }
  isCurrentHour(hour) {
    let currentHourToCompare = `${this.currentHour}:00`;
    if (hour === `${currentHourToCompare}`) {
      return true;
    } else return false;
  }
  isSelectedHour(hour) {
    if (Number(hour.split(':')[0]) == this.hourIndex) {
      return true;
    } else {
      return false;
    }
  }
  getHourlyForecast(dayIndex) {
    const startIndex = dayIndex * 24;
    const endIndex = startIndex + 24;
    if (this.chosenPlace) this.weatherService.getWeatherForecast(this.chosenPlace.lat, this.chosenPlace.lon).subscribe(weather => {
      this.hourlyForecast = weather.hourly;
      this.hours = this.hourlyForecast.time.slice(startIndex, endIndex).map(date => date.split('T')[1]);
      this.hourlyWeatherTemp = this.hourlyForecast.temperature_2m.slice(startIndex, endIndex);
      this.hourlyWeatherApparentTemp = this.hourlyForecast.apparent_temperature.slice(startIndex, endIndex);
      this.hourlyWeatherPrecipitationProbability = this.hourlyForecast.precipitation_probability.slice(startIndex, endIndex);
      this.hourlyWeatherHumidity = this.hourlyForecast.relativehumidity_2m.slice(startIndex, endIndex);
      this.hourlyWeatherDescriptions = this.hourlyForecast.weathercode.slice(startIndex, endIndex).map(code => this.weatherService.getWeatherDescription(code));
      this.hourlyWeatherIsDay = this.hourlyForecast.is_day.slice(startIndex, endIndex);
      this.hourlyWeatherIcons = this.hourlyForecast.weathercode.slice(startIndex, endIndex).map(code => this.weatherService.getWeatherIcon(code));
      this.hourlyWeatherIconsNight = this.hourlyForecast.weathercode.slice(startIndex, endIndex).map(code => this.weatherService.getWeatherIconNight(code));
      if (dayIndex === 0) setTimeout(() => {
        this.scrollToCurrentHour();
        if (this.hourIndex !== this.currentHour) this.scrollToSelectedHour();
      }, 10);
      if (dayIndex !== 0) setTimeout(() => {
        this.scrollTo10();
        if (this.hourIndex !== 10) this.scrollToSelectedHour();
      }, 10);
      this.selectedHourForecast = this.getSelectedHourForecast(this.hourIndex);
    });else if (this.currentLocation) this.weatherService.getWeatherForecast(this.currentLocation.lat, this.currentLocation.lon).subscribe(weather => {
      this.hourlyForecast = weather.hourly;
      this.hours = weather.hourly.time.slice(startIndex, endIndex).map(date => date.split('T')[1]);
      this.hourlyWeatherTemp = weather.hourly.temperature_2m.slice(startIndex, endIndex);
      this.hourlyWeatherApparentTemp = weather.hourly.apparent_temperature.slice(startIndex, endIndex);
      this.hourlyWeatherPrecipitationProbability = weather.hourly.precipitation_probability.slice(startIndex, endIndex);
      this.hourlyWeatherHumidity = weather.hourly.relativehumidity_2m.slice(startIndex, endIndex);
      this.hourlyWeatherDescriptions = weather.hourly.weathercode.slice(startIndex, endIndex).map(code => this.weatherService.getWeatherDescription(code));
      this.hourlyWeatherIsDay = this.hourlyForecast.is_day.slice(startIndex, endIndex);
      this.hourlyWeatherIcons = this.hourlyForecast.weathercode.slice(startIndex, endIndex).map(code => this.weatherService.getWeatherIcon(code));
      this.hourlyWeatherIconsNight = this.hourlyForecast.weathercode.slice(startIndex, endIndex).map(code => this.weatherService.getWeatherIconNight(code));
      if (dayIndex === 0) setTimeout(() => {
        this.scrollToCurrentHour();
        if (this.hourIndex !== this.currentHour) this.scrollToSelectedHour();
      }, 10);
      if (dayIndex !== 0) setTimeout(() => {
        this.scrollTo10();
        if (this.hourIndex !== 10) this.scrollToSelectedHour();
      }, 10);
      this.selectedHourForecast = this.getSelectedHourForecast(this.hourIndex);
    });
  }
  getSelectedHourForecast(i) {
    const currentHourForecast = {
      hour: this.hours[i],
      temperature: this.hourlyWeatherTemp[i],
      apparentTemperature: this.hourlyWeatherApparentTemp[i],
      precipitationProbability: this.hourlyWeatherPrecipitationProbability[i],
      humidity: this.hourlyWeatherHumidity[i],
      description: this.hourlyWeatherDescriptions[i],
      icon: this.hourlyWeatherIcons[i]
    };
    return currentHourForecast;
  }
  navigateToHour(i, callCount = 0) {
    const currentUrl = this.router.url;
    const segments = currentUrl.split('/');
    if (segments[1] === 'homepage') {
      segments[1] = 'day';
      segments.splice(2, 0, '1');
    }
    if (segments.length === 4) {
      segments[3] = i.toString();
    } else {
      segments.push(i.toString());
    }
    const newUrl = segments.join('/');
    this.siblingService.refreshSibling();
    this.router.navigateByUrl(newUrl).then(() => {
      if (callCount < 1) {
        this.navigateToHour(i, callCount + 1);
      }
    });
  }
}
HourlyForecastComponent.ɵfac = function HourlyForecastComponent_Factory(t) {
  return new (t || HourlyForecastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_0__.WeatherService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_search_service__WEBPACK_IMPORTED_MODULE_1__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_sibling_service__WEBPACK_IMPORTED_MODULE_2__.SiblingService));
};
HourlyForecastComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HourlyForecastComponent,
  selectors: [["app-hourly-forecast"]],
  viewQuery: function HourlyForecastComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cardContainer = _t.first);
    }
  },
  inputs: {
    currentLocation: "currentLocation",
    chosenLocation: "chosenLocation",
    weather: "weather",
    dayIndex: "dayIndex",
    hourIndex: "hourIndex"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
  decls: 9,
  vars: 2,
  consts: [[1, "container", "hourly-container"], [1, "chart-container"], [1, "chart"], ["class", "bar", 4, "ngFor", "ngForOf"], [1, "card-container"], ["cardContainer", ""], ["class", "row", 4, "ngIf"], [1, "bar"], [1, "row"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "col"], [1, "card", "hourly-card", 3, "ngClass", "click"], [1, "card-body", "hourly-card-body"], ["alt", "Weather Icon", 3, "src", 4, "ngIf"], ["alt", "Weather Icon", 3, "src"]],
  template: function HourlyForecastComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Pr\u00E9visions par heures : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1)(4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, HourlyForecastComponent_div_5_Template, 1, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, HourlyForecastComponent_div_8_Template, 2, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.hourlyWeatherTemp);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hourlyForecast);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
  styles: [".hourly-container[_ngcontent-%COMP%] {\n  margin-top: 2vh;\n  width: 95vw;\n  background-color: var(--blue2);\n  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;\n  padding-bottom: 0.5vmin;\n  border-radius: 6px;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: scroll;\n  border-radius: 5px;\n  border: solid 3px var(--shadow-dark);\n  margin: 2vmin;\n  padding: 2vmin;\n}\n\n.row[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: var(--shadow-light);\n  font-size: smaller;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-top: 2vh;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZS9hcHAtcGFnZS9jb21wb25lbnRzL3Nob3J0LWZvcmVjYXN0L2hvdXJseS1mb3JlY2FzdC9ob3VybHktZm9yZWNhc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsMkNBQUE7RUFDQSx1QkFBQTtFQUVBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFESjs7QUFHQTtFQUNJLGNBQUE7QUFBSjs7QUFHQTtFQUNJLHFDQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIlxuLmhvdXJseS1jb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogMnZoO1xuICAgIHdpZHRoOiA5NXZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUyKTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTgpIDBweCAycHggNHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjV2bWluO1xuXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1zaGFkb3ctZGFyayk7XG4gICAgbWFyZ2luOiAydm1pbjtcbiAgICBwYWRkaW5nOiAydm1pblxufVxuLnJvdyB7XG4gICAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGFkb3ctbGlnaHQpO1xuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxubGFiZWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAydmg7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6222:
/*!************************************************************************************************!*\
  !*** ./src/app/page/app-page/components/short-forecast/selected-day/selected-day.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectedDayComponent": () => (/* binding */ SelectedDayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/weather.service */ 1834);
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/search.service */ 4112);
/* harmony import */ var src_app_services_sibling_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sibling.service */ 6253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);





function SelectedDayComponent_div_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r1.currentLocation.address.city, ", ", ctx_r1.currentLocation.address.country, " ");
  }
}
function SelectedDayComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r2.displayNameChosenPlace, " ");
  }
}
function SelectedDayComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r3.formatDate(ctx_r3.dates[ctx_r3.dayIndex]), " ", ctx_r3.selectedHourForecast.hour, " ");
  }
}
function SelectedDayComponent_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r4.selectedHourForecast.temperature, "\u00B0C");
  }
}
function SelectedDayComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ressentie ", ctx_r5.selectedHourForecast.apparentTemperature, "\u00B0C");
  }
}
function SelectedDayComponent_div_0_div_9_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 22);
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "../../../../../../assets/weather_img/", ctx_r9.selectedHourForecast.icon, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function SelectedDayComponent_div_0_div_9_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 22);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "../../../../../../assets/weather_img/", ctx_r10.selectedHourForecast.iconNight, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function SelectedDayComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SelectedDayComponent_div_0_div_9_img_2_Template, 1, 1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SelectedDayComponent_div_0_div_9_img_3_Template, 1, 1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.selectedHourForecast.icon && ctx_r6.selectedHourForecast.isDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.selectedHourForecast.icon && !ctx_r6.selectedHourForecast.isDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.selectedHourForecast.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.selectedHourForecast.precipitationProbability, " % de chance de pluie ");
  }
}
function SelectedDayComponent_div_0_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" :\u00A0\u00A0", ctx_r7.selectedHourForecast.humidity, " ");
  }
}
const _c0 = function (a0) {
  return {
    "transform": a0
  };
};
function SelectedDayComponent_div_0_div_34_i_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 33);
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, "rotate(" + ctx_r11.selectedHourForecast.windDirection + "deg)"));
  }
}
function SelectedDayComponent_div_0_div_34_i_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 34);
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, "rotate(" + ctx_r12.selectedHourForecast.windDirection + "deg)"));
  }
}
function SelectedDayComponent_div_0_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Vent :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " :\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "br", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " :\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, SelectedDayComponent_div_0_div_34_i_11_Template, 1, 3, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, SelectedDayComponent_div_0_div_34_i_12_Template, 1, 3, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "br", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r8.selectedHourForecast.windSpeed, " km/h ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.selectedHourForecast.windSpeed > 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.selectedHourForecast.windSpeed < 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r8.getWindDirection(ctx_r8.selectedHourForecast.windDirection), " ");
  }
}
function SelectedDayComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SelectedDayComponent_div_0_span_4_Template, 2, 2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SelectedDayComponent_div_0_div_5_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SelectedDayComponent_div_0_div_6_Template, 2, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SelectedDayComponent_div_0_div_7_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, SelectedDayComponent_div_0_div_8_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, SelectedDayComponent_div_0_div_9_Template, 6, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9)(11, "div", 1)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Temp min :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 11)(20, "div", 12)(21, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Temp max :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 10)(27, "div", 11)(28, "div", 12)(29, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Humidit\u00E9 :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, SelectedDayComponent_div_0_div_32_Template, 3, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, SelectedDayComponent_div_0_div_34_Template, 16, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.currentLocation && !ctx_r0.chosenPlace);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.displayNameChosenPlace);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.selectedHourForecast);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.selectedHourForecast);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.selectedHourForecast);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.selectedHourForecast);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.sevenWeatherTempMin[ctx_r0.dayIndex], "\u00B0C");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.sevenWeatherTempMax[ctx_r0.dayIndex], "\u00B0C");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.selectedHourForecast);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.selectedHourForecast);
  }
}
class SelectedDayComponent {
  constructor(weatherService, searchService, siblingService) {
    this.weatherService = weatherService;
    this.searchService = searchService;
    this.siblingService = siblingService;
    this.date = new Date();
    this.currentHour = Number(this.date.getHours().toString().padStart(2, '0'));
    this.setIndexs();
  }
  setIndexs() {
    const url = window.location.pathname;
    const segments = url.split('/');
    if (segments.length === 4) {
      this.hourIndex = Number(segments[segments.length - 1]);
      this.dayIndex = Number(segments[segments.length - 2]) - 1;
    } else if (segments.length === 3) {
      this.dayIndex = Number(segments[segments.length - 1]) - 1;
      this.hourIndex = this.currentHour;
    }
  }
  ngOnInit() {
    this.searchService.getPlace().subscribe(osmObj => {
      this.chosenPlace = osmObj;
      if (this.chosenPlace) this.displayNameChosenPlace = this.chosenPlace.display_name.split(',').map(item => item.trim()).filter((_, index, array) => index === 0 || index === 1 || index === array.length - 2 || index === array.length - 1).join(', ');
      this.getDailyForecast();
      this.getHourlyForecast(this.dayIndex);
    });
    this.siblingService.getRefreshObservable().subscribe(() => {
      this.setIndexs();
      this.getHourlyForecast(this.dayIndex);
    });
  }
  ngOnChanges(changes) {
    if (changes['currentLocation'] || changes['hourIndex']) {
      this.setIndexs();
      this.getDailyForecast();
      this.getHourlyForecast(this.dayIndex);
    }
  }
  formatDate(date) {
    const weekdays = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    const dateObj = new Date(date);
    const dayOfWeek = weekdays[dateObj.getDay()];
    const dayOfMonth = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    return `${dayOfWeek} ${dayOfMonth} ${month}`;
  }
  getDailyForecast() {
    if (this.chosenPlace) this.weatherService.getWeatherForecast(this.chosenPlace.lat, this.chosenPlace.lon).subscribe(weather => {
      this.dates = weather.daily.time;
      this.sevenWeatherTempMin = weather.daily.temperature_2m_min;
      this.sevenWeatherTempMax = weather.daily.temperature_2m_max;
      this.sevenWeatherApparentTempMin = weather.daily.apparent_temperature_min;
      this.sevenWeatherApparentTempMax = weather.daily.apparent_temperature_max;
      this.sevenWeatherPrecipitationProbabilityMean = weather.daily.precipitation_probability_mean;
      this.sevenWeatherDescriptions = weather.daily.weathercode.map(code => this.weatherService.getWeatherDescription(code));
      this.sevenWeatherIcons = weather.daily.weathercode.map(code => this.weatherService.getWeatherIcon(code));
      this.winddirection_10m = weather.daily.winddirection_10m_dominant;
      this.windspeed_10m = weather.daily.windspeed_10m_max;
      return this.dailyForecast = weather.daily;
    });else if (this.currentLocation) this.weatherService.getWeatherForecast(this.currentLocation.lat, this.currentLocation.lon).subscribe(weather => {
      this.dates = weather.daily.time;
      this.sevenWeatherTempMin = weather.daily.temperature_2m_min;
      this.sevenWeatherTempMax = weather.daily.temperature_2m_max;
      this.sevenWeatherApparentTempMin = weather.daily.apparent_temperature_min;
      this.sevenWeatherApparentTempMax = weather.daily.apparent_temperature_max;
      this.sevenWeatherPrecipitationProbabilityMean = weather.daily.precipitation_probability_mean;
      this.sevenWeatherDescriptions = weather.daily.weathercode.map(code => this.weatherService.getWeatherDescription(code));
      this.sevenWeatherIcons = weather.daily.weathercode.map(code => this.weatherService.getWeatherIcon(code));
      this.winddirection_10m = weather.daily.winddirection_10m_dominant;
      this.windspeed_10m = weather.daily.windspeed_10m_max;
      return this.dailyForecast = weather.daily;
    });
  }
  getHourlyForecast(dayIndex) {
    const startIndex = dayIndex * 24;
    const endIndex = startIndex + 24;
    if (this.chosenPlace) {
      this.weatherService.getWeatherForecast(this.chosenPlace.lat, this.chosenPlace.lon).subscribe(weather => {
        this.hourlyForecast = weather.hourly;
        this.hours = weather.hourly.time.slice(startIndex, endIndex).map(date => date.split('T')[1]);
        this.hourlyWeatherTemp = weather.hourly.temperature_2m.slice(startIndex, endIndex);
        this.hourlyWeatherApparentTemp = weather.hourly.apparent_temperature.slice(startIndex, endIndex);
        this.hourlyWeatherPrecipitationProbability = weather.hourly.precipitation_probability.slice(startIndex, endIndex);
        this.hourlyWeatherHumidity = weather.hourly.relativehumidity_2m.slice(startIndex, endIndex);
        this.hourlyWeatherDescriptions = weather.hourly.weathercode.slice(startIndex, endIndex).map(code => this.weatherService.getWeatherDescription(code));
        this.hourlyWeatherIsDay = this.hourlyForecast.is_day.slice(startIndex, endIndex);
        this.hourlyWeatherIcons = this.hourlyForecast.weathercode.slice(startIndex, endIndex).map(code => this.weatherService.getWeatherIcon(code));
        this.hourlyWeatherIconsNight = this.hourlyForecast.weathercode.slice(startIndex, endIndex).map(code => this.weatherService.getWeatherIconNight(code));
        this.winddirection_10m = weather.hourly.winddirection_10m.slice(startIndex, endIndex);
        this.windspeed_10m = weather.hourly.windspeed_10m.slice(startIndex, endIndex);
        this.selectedHourForecast = this.getSelectedHourForecast(this.hourIndex);
      });
    } else if (this.currentLocation) {
      this.weatherService.getWeatherForecast(this.currentLocation.lat, this.currentLocation.lon).subscribe(weather => {
        this.hourlyForecast = weather.hourly;
        this.hours = weather.hourly.time.slice(startIndex, endIndex).map(date => date.split('T')[1]);
        this.hourlyWeatherTemp = weather.hourly.temperature_2m.slice(startIndex, endIndex);
        this.hourlyWeatherApparentTemp = weather.hourly.apparent_temperature.slice(startIndex, endIndex);
        this.hourlyWeatherPrecipitationProbability = weather.hourly.precipitation_probability.slice(startIndex, endIndex);
        this.hourlyWeatherHumidity = weather.hourly.relativehumidity_2m.slice(startIndex, endIndex);
        this.hourlyWeatherDescriptions = weather.hourly.weathercode.slice(startIndex, endIndex).map(code => this.weatherService.getWeatherDescription(code));
        this.hourlyWeatherIsDay = this.hourlyForecast.is_day.slice(startIndex, endIndex);
        this.hourlyWeatherIcons = this.hourlyForecast.weathercode.slice(startIndex, endIndex).map(code => this.weatherService.getWeatherIcon(code));
        this.hourlyWeatherIconsNight = this.hourlyForecast.weathercode.slice(startIndex, endIndex).map(code => this.weatherService.getWeatherIconNight(code));
        this.winddirection_10m = weather.hourly.winddirection_10m.slice(startIndex, endIndex);
        this.windspeed_10m = weather.hourly.windspeed_10m.slice(startIndex, endIndex);
        this.selectedHourForecast = this.getSelectedHourForecast(this.hourIndex);
      });
    }
  }
  getSelectedHourForecast(i) {
    const selectedHourForecast = {
      hour: this.hours[i],
      temperature: this.hourlyWeatherTemp[i],
      apparentTemperature: this.hourlyWeatherApparentTemp[i],
      precipitationProbability: this.hourlyWeatherPrecipitationProbability[i],
      humidity: this.hourlyWeatherHumidity[i],
      description: this.hourlyWeatherDescriptions[i],
      isDay: this.hourlyWeatherIsDay[i],
      icon: this.hourlyWeatherIcons[i],
      iconNight: this.hourlyWeatherIconsNight[i],
      windDirection: this.winddirection_10m[i],
      windSpeed: this.windspeed_10m[i]
    };
    return selectedHourForecast;
  }
  getWindDirection(degrees) {
    if (degrees >= 348.75 || degrees < 11.25) {
      return 'Nord';
    } else if (degrees >= 11.25 && degrees < 33.75) {
      return 'Nord-Nord-Est';
    } else if (degrees >= 33.75 && degrees < 56.25) {
      return 'Nord-Est';
    } else if (degrees >= 56.25 && degrees < 78.75) {
      return 'Est-Nord-Est';
    } else if (degrees >= 78.75 && degrees < 101.25) {
      return 'Est';
    } else if (degrees >= 101.25 && degrees < 123.75) {
      return 'Est-Sud-Est';
    } else if (degrees >= 123.75 && degrees < 146.25) {
      return 'Sud-Est';
    } else if (degrees >= 146.25 && degrees < 168.75) {
      return 'Sud-Sud-Est';
    } else if (degrees >= 168.75 && degrees < 191.25) {
      return 'Sud';
    } else if (degrees >= 191.25 && degrees < 213.75) {
      return 'Sud-Sud-Ouest';
    } else if (degrees >= 213.75 && degrees < 236.25) {
      return 'Sud-Ouest';
    } else if (degrees >= 236.25 && degrees < 258.75) {
      return 'Ouest-Sud-Ouest';
    } else if (degrees >= 258.75 && degrees < 281.25) {
      return 'Ouest';
    } else if (degrees >= 281.25 && degrees < 303.75) {
      return 'Ouest-Nord-Ouest';
    } else if (degrees >= 303.75 && degrees < 326.25) {
      return 'Nord-Ouest';
    } else {
      return 'Nord-Nord-Ouest';
    }
  }
}
SelectedDayComponent.ɵfac = function SelectedDayComponent_Factory(t) {
  return new (t || SelectedDayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_0__.WeatherService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_search_service__WEBPACK_IMPORTED_MODULE_1__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_sibling_service__WEBPACK_IMPORTED_MODULE_2__.SiblingService));
};
SelectedDayComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SelectedDayComponent,
  selectors: [["app-selected-day"]],
  inputs: {
    currentLocation: "currentLocation",
    chosenLocation: "chosenLocation",
    weather: "weather",
    dailyForecast: "dailyForecast",
    dates: "dates",
    sevenWeather: "sevenWeather",
    sevenWeatherDescriptions: "sevenWeatherDescriptions",
    sevenWeatherIcons: "sevenWeatherIcons",
    sevenWeatherTempMin: "sevenWeatherTempMin",
    sevenWeatherTempMax: "sevenWeatherTempMax",
    sevenWeatherApparentTempMin: "sevenWeatherApparentTempMin",
    sevenWeatherApparentTempMax: "sevenWeatherApparentTempMax",
    sevenWeatherPrecipitationProbabilityMean: "sevenWeatherPrecipitationProbabilityMean",
    winddirection_10m: "winddirection_10m",
    windspeed_10m: "windspeed_10m"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
  decls: 1,
  vars: 1,
  consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "upper-data"], ["src", "../assets/alain.png", "alt", "background image", 1, "bg-img"], [1, "meteo-data"], ["ng", "", "class", "location", 4, "ngIf"], [4, "ngIf"], ["class", "temp", 4, "ngIf"], ["style", "text-align: center;", 4, "ngIf"], [1, "lower-data"], [1, "row"], [1, "col"], [1, "info-block"], [1, "info-label"], [1, "info-value"], [2, "height", "0.6vmax"], ["class", "info-value", 4, "ngIf"], ["class", "info-block-2", 4, "ngIf"], ["ng", "", 1, "location"], [1, "temp"], [2, "text-align", "center"], ["alt", "Weather Icon", 3, "src", 4, "ngIf"], ["alt", "Weather Icon", 3, "src"], [1, "fa-solid", "fa-droplet"], [1, "info-block-2"], [1, "info-label", "vent"], [1, "fa-solid", "fa-wind"], [1, "break-line"], [1, "info-direction"], [1, "fa-regular", "fa-compass"], ["class", "fa-solid fa-angles-down", 3, "ngStyle", 4, "ngIf"], ["class", "fa-solid fa-circle-down", 3, "ngStyle", 4, "ngIf"], [1, "break-line-2"], [1, "fa-solid", "fa-angles-down", 3, "ngStyle"], [1, "fa-solid", "fa-circle-down", 3, "ngStyle"]],
  template: function SelectedDayComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SelectedDayComponent_div_0_Template, 35, 10, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dailyForecast);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle],
  styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 2vh;\n  height: auto;\n  min-height: auto;\n  width: 75vw;\n  background-color: var(--blue2);\n  border-radius: 6px;\n  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;\n}\n\n.upper-data[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  width: 100%;\n  height: auto;\n  border-radius: 6px;\n}\n\n.lower-data[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: scroll;\n  padding: 2vw;\n  width: 100%;\n  height: auto;\n  display: flex;\n}\n\n.bg-img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -26vmax;\n  left: -50vmax;\n  width: 140vmax;\n  filter: brightness(0.6);\n}\n\n.meteo-data[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: large;\n}\n\n.location[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.2em;\n}\n\n.temp[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.6em;\n  font-weight: 900;\n}\n\n.info-label[_ngcontent-%COMP%] {\n  color: beige;\n  font-weight: 300;\n}\n\n.more-infos-label[_ngcontent-%COMP%] {\n  color: beige;\n}\n\n.more-infos-container[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: var(--blue2);\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.infos-block[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  flex-direction: row;\n}\n\n.infos-block-label[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.infos-block-label[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2em;\n}\n\n.infos-block-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  font-size: 0.8em;\n  display: flex;\n}\n\n.info-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.info-direction[_ngcontent-%COMP%], .info-block-2[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%], .vent[_ngcontent-%COMP%] {\n  padding-left: 10vw;\n  text-align: left;\n}\n\n.vent[_ngcontent-%COMP%] {\n  padding-left: 13vw;\n}\n\n.fa-solid[_ngcontent-%COMP%], .fa-regular[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.row[_ngcontent-%COMP%] {\n  align-items: center;\n  text-align: center;\n}\n\n.break-line[_ngcontent-%COMP%], .break-line-2[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 777px) {\n  .bg-img[_ngcontent-%COMP%] {\n    left: -70vmax;\n    width: 150vmax;\n  }\n  .break-line-2[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (max-width: 530px) {\n  .break-line[_ngcontent-%COMP%] {\n    display: block;\n  }\n  h3[_ngcontent-%COMP%] {\n    font-size: 5vw;\n  }\n  .meteo-data[_ngcontent-%COMP%] {\n    font-size: 5vw;\n  }\n  .location[_ngcontent-%COMP%] {\n    font-size: 4vw;\n  }\n  .temp[_ngcontent-%COMP%] {\n    font-size: 5vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZS9hcHAtcGFnZS9jb21wb25lbnRzL3Nob3J0LWZvcmVjYXN0L3NlbGVjdGVkLWRheS9zZWxlY3RlZC1kYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBQUNKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtBQUFKOztBQUdBO0VBQ0ksT0FBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFHQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLGNBQUE7RUFBTjtFQUVFO0lBQ0ksY0FBQTtFQUFOO0FBQ0Y7QUFFQTtFQUNJO0lBQ0ksY0FBQTtFQUFOO0VBR0U7SUFDSSxjQUFBO0VBRE47RUFHRTtJQUNJLGNBQUE7RUFETjtFQUdFO0lBQ0ksY0FBQTtFQUROO0VBR0U7SUFDSSxjQUFBO0VBRE47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogMnZoO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3NXZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUyKTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE4KSAwcHggMnB4IDRweDtcbn1cblxuXG4udXBwZXItZGF0YXtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmxvd2VyLWRhdGF7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgcGFkZGluZzogMnZ3O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYmctaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMjZ2bWF4O1xuICAgIGxlZnQ6IC01MHZtYXg7XG4gICAgd2lkdGg6IDE0MHZtYXg7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNik7XG59ICBcblxuLm1ldGVvLWRhdGF7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBmb250LXNpemU6bGFyZ2U7XG59XG5cbi5sb2NhdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbi50ZW1we1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi5pbmZvLWxhYmVse1xuICAgIGNvbG9yOmJlaWdlO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5tb3JlLWluZm9zLWxhYmVse1xuICAgIGNvbG9yOiBiZWlnZTtcbn1cblxuLm1vcmUtaW5mb3MtY29udGFpbmVye1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZTIpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5pbmZvcy1ibG9ja3tcbiAgICB3aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmluZm9zLWJsb2NrLWxhYmVse1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbmZvcy1ibG9jay1sYWJlbCBpbWcge1xuICAgIHdpZHRoOiAyZW07XG59XG5cbi5pbmZvcy1ibG9jay1sYWJlbCBzcGFuIHtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmluZm8tdmFsdWV7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmluZm8tZGlyZWN0aW9uLCAuaW5mby1ibG9jay0yIC5pbmZvLXZhbHVlLCAudmVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwdnc7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xufVxuXG4udmVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEzdnc7XG59XG5cbi5mYS1zb2xpZCwgLmZhLXJlZ3VsYXJ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucm93e1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnJlYWstbGluZSwgLmJyZWFrLWxpbmUtMntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzc3cHgpIHtcbiAgICAuYmctaW1nIHtcbiAgICAgICAgbGVmdDogLTcwdm1heDtcbiAgICAgICAgd2lkdGg6IDE1MHZtYXg7XG4gICAgfVxuICAgIC5icmVhay1saW5lLTJ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MzBweCkge1xuICAgIC5icmVhay1saW5le1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICBoM3tcbiAgICAgICAgZm9udC1zaXplOiA1dnc7XG4gICAgfVxuICAgIC5tZXRlby1kYXRhe1xuICAgICAgICBmb250LXNpemU6IDV2dztcbiAgICB9XG4gICAgLmxvY2F0aW9ue1xuICAgICAgICBmb250LXNpemU6IDR2dztcbiAgICB9XG4gICAgLnRlbXB7XG4gICAgICAgIGZvbnQtc2l6ZTogNXZ3O1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 313:
/*!**********************************************************************************!*\
  !*** ./src/app/page/app-page/components/short-forecast/short-forecast.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShortForecastModule": () => (/* binding */ ShortForecastModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _current_day_current_day_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-day/current-day.component */ 8137);
/* harmony import */ var _selected_day_selected_day_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selected-day/selected-day.component */ 6222);
/* harmony import */ var _hourly_forecast_hourly_forecast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hourly-forecast/hourly-forecast.component */ 2341);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class ShortForecastModule {}
ShortForecastModule.ɵfac = function ShortForecastModule_Factory(t) {
  return new (t || ShortForecastModule)();
};
ShortForecastModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ShortForecastModule
});
ShortForecastModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ShortForecastModule, {
    declarations: [_current_day_current_day_component__WEBPACK_IMPORTED_MODULE_0__.CurrentDayComponent, _selected_day_selected_day_component__WEBPACK_IMPORTED_MODULE_1__.SelectedDayComponent, _hourly_forecast_hourly_forecast_component__WEBPACK_IMPORTED_MODULE_2__.HourlyForecastComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
    exports: [_current_day_current_day_component__WEBPACK_IMPORTED_MODULE_0__.CurrentDayComponent, _selected_day_selected_day_component__WEBPACK_IMPORTED_MODULE_1__.SelectedDayComponent, _hourly_forecast_hourly_forecast_component__WEBPACK_IMPORTED_MODULE_2__.HourlyForecastComponent]
  });
})();

/***/ }),

/***/ 7733:
/*!*********************************************!*\
  !*** ./src/app/page/page-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageRoutingModule": () => (/* binding */ PageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_page_app_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-page/app-page.component */ 5417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: 'homepage',
  redirectTo: 'day/1'
}, {
  path: 'day',
  children: Array.from({
    length: 7
  }, (_, dayIndex) => {
    const dayChildren = Array.from({
      length: 24
    }, (_, hourIndex) => {
      return {
        path: `${hourIndex}`,
        component: _app_page_app_page_component__WEBPACK_IMPORTED_MODULE_0__.AppPageComponent
      };
    });
    return {
      path: `${dayIndex + 1}`,
      component: _app_page_app_page_component__WEBPACK_IMPORTED_MODULE_0__.AppPageComponent,
      children: dayChildren
    };
  })
}];
class PageRoutingModule {}
PageRoutingModule.ɵfac = function PageRoutingModule_Factory(t) {
  return new (t || PageRoutingModule)();
};
PageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PageRoutingModule
});
PageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5115:
/*!*************************************!*\
  !*** ./src/app/page/page.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageModule": () => (/* binding */ PageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _app_page_app_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-page/app-page.component */ 5417);
/* harmony import */ var _app_page_components_short_forecast_short_forecast_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-page/components/short-forecast/short-forecast.module */ 313);
/* harmony import */ var _app_page_components_long_forecast_long_forecast_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-page/components/long-forecast/long-forecast.module */ 3825);
/* harmony import */ var _app_page_components_long_forecast_seven_days_seven_days_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-page/components/long-forecast/seven-days/seven-days.component */ 6185);
/* harmony import */ var _app_page_components_short_forecast_current_day_current_day_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-page/components/short-forecast/current-day/current-day.component */ 8137);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-routing.module */ 158);
/* harmony import */ var _page_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-routing.module */ 7733);
/* harmony import */ var _core_search_search_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/search/search.module */ 4778);
/* harmony import */ var _core_search_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/search/search-bar/search-bar.component */ 5769);
/* harmony import */ var _services_sibling_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/sibling.service */ 6253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);












class PageModule {}
PageModule.ɵfac = function PageModule_Factory(t) {
  return new (t || PageModule)();
};
PageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: PageModule
});
PageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  providers: [_services_sibling_service__WEBPACK_IMPORTED_MODULE_9__.SiblingService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _app_page_components_short_forecast_short_forecast_module__WEBPACK_IMPORTED_MODULE_1__.ShortForecastModule, _app_page_components_long_forecast_long_forecast_module__WEBPACK_IMPORTED_MODULE_2__.LongForecastModule, _page_routing_module__WEBPACK_IMPORTED_MODULE_6__.PageRoutingModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule, _core_search_search_module__WEBPACK_IMPORTED_MODULE_7__.SearchModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](PageModule, {
    declarations: [_app_page_app_page_component__WEBPACK_IMPORTED_MODULE_0__.AppPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _app_page_components_short_forecast_short_forecast_module__WEBPACK_IMPORTED_MODULE_1__.ShortForecastModule, _app_page_components_long_forecast_long_forecast_module__WEBPACK_IMPORTED_MODULE_2__.LongForecastModule, _page_routing_module__WEBPACK_IMPORTED_MODULE_6__.PageRoutingModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule, _core_search_search_module__WEBPACK_IMPORTED_MODULE_7__.SearchModule],
    exports: [_app_page_components_short_forecast_current_day_current_day_component__WEBPACK_IMPORTED_MODULE_4__.CurrentDayComponent, _app_page_components_long_forecast_seven_days_seven_days_component__WEBPACK_IMPORTED_MODULE_3__.SevenDaysComponent, _app_page_app_page_component__WEBPACK_IMPORTED_MODULE_0__.AppPageComponent, _core_search_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__.SearchBarComponent]
  });
})();

/***/ }),

/***/ 2756:
/*!*****************************************************!*\
  !*** ./src/app/services/chosen-location.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChosenLocationService": () => (/* binding */ ChosenLocationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class ChosenLocationService {
  constructor(http) {
    this.http = http;
  }
  getLatAndLonFromSearch(q) {
    const url = `search_location_api_endpoint.php?q=${q}&format=jsonv2`;
    const latAndLon = this.http.get(url);
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
      latAndLon.subscribe(location => {
        observer.next(location);
        observer.complete();
      });
    });
    return latAndLon;
  }
}
ChosenLocationService.ɵfac = function ChosenLocationService_Factory(t) {
  return new (t || ChosenLocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
ChosenLocationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ChosenLocationService,
  factory: ChosenLocationService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5079:
/*!******************************************************!*\
  !*** ./src/app/services/current-location.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentLocationService": () => (/* binding */ CurrentLocationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class CurrentLocationService {
  constructor(http) {
    this.http = http;
  }
  getCurrentLocationFromBrowser() {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          this.getCurrentLocation(lat, lon).subscribe(location => {
            observer.next(location);
            observer.complete();
          });
        }, error => {
          observer.error('Erreur lors de la récupération de la position: ' + error.message);
        });
      } else {
        observer.error("La géolocalisation n'est pas prise en charge par ce navigateur.");
      }
    });
  }
  getCurrentLocation(lat, lon) {
    const url = `current_location_api_endpoint?lat=${lat}&lon=${lon}&format=json`;
    return this.http.get(url);
  }
}
CurrentLocationService.ɵfac = function CurrentLocationService_Factory(t) {
  return new (t || CurrentLocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
CurrentLocationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CurrentLocationService,
  factory: CurrentLocationService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8524:
/*!**************************************************!*\
  !*** ./src/app/services/location-img.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationImgService": () => (/* binding */ LocationImgService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class LocationImgService {
  constructor(http) {
    this.http = http;
  }
  getImgFromLoc(q) {
    const url = `https://api.unsplash.com/search/photos?query={${q}}&client_id=lp0WChyZl-mDw6uQ5O2RRXlw5pKnN409ObZdw54qIgw`;
    return this.http.get(url);
  }
}
LocationImgService.ɵfac = function LocationImgService_Factory(t) {
  return new (t || LocationImgService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
LocationImgService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: LocationImgService,
  factory: LocationImgService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4112:
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchService": () => (/* binding */ SearchService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class SearchService {
  constructor() {
    this.place$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
  }
  setPlace(osmObj) {
    this.place$.next(osmObj); // Émet une nouvelle valeur sur le Subject
  }

  getPlace() {
    return this.place$.asObservable(); // Renvoie l'Observable du Subject
  }
}

SearchService.ɵfac = function SearchService_Factory(t) {
  return new (t || SearchService)();
};
SearchService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SearchService,
  factory: SearchService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6253:
/*!*********************************************!*\
  !*** ./src/app/services/sibling.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiblingService": () => (/* binding */ SiblingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class SiblingService {
  constructor() {
    this.refreshSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined); // Utilise BehaviorSubject
  }

  refreshSibling() {
    this.refreshSubject.next(undefined);
  }
  getRefreshObservable() {
    return this.refreshSubject.asObservable();
  }
}
SiblingService.ɵfac = function SiblingService_Factory(t) {
  return new (t || SiblingService)();
};
SiblingService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SiblingService,
  factory: SiblingService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1834:
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherService": () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class WeatherService {
  constructor(http) {
    this.http = http;
    this.weatherDescriptions = {
      0: 'Ciel dégagé',
      1: 'Principalement dégagé',
      2: 'Partiellement nuageux',
      3: 'Couvert',
      45: 'Brouillard et givre',
      48: 'Brouillard et givre',
      51: 'Bruine légère',
      53: 'Bruine modérée',
      55: 'Bruine dense',
      56: 'Bruine verglaçante légère',
      57: 'Bruine verglaçante dense',
      61: 'Pluie légère',
      63: 'Pluie modérée',
      65: 'Pluie forte',
      66: 'Pluie verglaçante légère',
      67: 'Pluie verglaçante forte',
      71: 'Chute de neige légère',
      73: 'Chute de neige modérée',
      75: 'Chute de neige forte',
      77: 'Grains de neige',
      80: 'Averses de pluie légères',
      81: 'Averses de pluie modérées',
      82: 'Averses de pluie violentes',
      85: 'Averses de neige légères',
      86: 'Averses de neige fortes',
      95: 'Orage faible ou modéré',
      96: 'Orage avec grêle légère',
      99: 'Orage avec grêle forte'
    };
    this.weatherIcons = {
      0: 'clear_sky.png',
      1: 'light_clouds.png',
      2: 'partly_cloudy.png',
      3: 'cloudy.png',
      45: 'light_fog.png',
      48: 'dense_fog.png',
      51: 'drizzle.png',
      53: 'drizzle.png',
      55: 'drizzle.png',
      56: 'rain_snow_shower.png',
      57: 'rain_snow.png',
      61: 'rain.png',
      63: 'rain.png',
      65: 'rain.png',
      66: 'freezing_rain.png',
      67: 'freezing_rain.png',
      71: 'snow.png',
      73: 'snow.png',
      75: 'snow.png',
      77: 'snow.png',
      80: 'rain_shower.png',
      81: 'rain_shower.png',
      82: 'rain_shower.png',
      85: 'snow_shower.png',
      86: 'snow_shower.png',
      95: 'thunderstorms.png',
      96: 'thunderstorms.png',
      99: 'thunderstorms.png'
    };
    this.nightWeatherIcons = {
      0: 'clear_sky_night.png',
      1: 'light_clouds_night.png',
      2: 'partly_cloudy_night.png',
      3: 'cloudy_night.png',
      45: 'light_fog_night.png',
      48: 'dense_fog.png',
      51: 'drizzle.png',
      53: 'drizzle.png',
      55: 'drizzle.png',
      56: 'sleet_showers_night.png',
      57: 'rain_snow.png',
      61: 'rain.png',
      63: 'rain.png',
      65: 'rain.png',
      66: 'freezing_rain.png',
      67: 'freezing_rain.png',
      71: 'snow.png',
      73: 'snow.png',
      75: 'snow.png',
      77: 'snow.png',
      80: 'rain_showers_night.png',
      81: 'rain_showers_night.png',
      82: 'rain_showers_night.png',
      85: 'snow_showers_night.png',
      86: 'snow_showers_night.png',
      95: 'thunderstorms.png',
      96: 'thunderstorms.png',
      99: 'thunderstorms.png'
    };
  }
  getWeatherForecast(latitude, longitude) {
    const url = `weather_api_endpoint?latitude=${latitude}&longitude=${longitude}&elevation=44.812&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,pressure_msl,surface_pressure,cloudcover,cloudcover_low,cloudcover_mid,cloudcover_high,windspeed_10m,windspeed_80m,windspeed_120m,windspeed_180m,winddirection_10m,winddirection_80m,winddirection_120m,winddirection_180m,windgusts_10m,shortwave_radiation,direct_radiation,direct_normal_irradiance,diffuse_radiation,vapor_pressure_deficit,cape,evapotranspiration,et0_fao_evapotranspiration,precipitation,snowfall,precipitation_probability,rain,showers,weathercode,snow_depth,freezinglevel_height,visibility,soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_temperature_54cm,soil_moisture_0_1cm,soil_moisture_1_3cm,soil_moisture_3_9cm,soil_moisture_9_27cm,soil_moisture_27_81cm,is_day&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,precipitation_probability_min,precipitation_probability_mean,weathercode,sunrise,sunset,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration,uv_index_max,uv_index_clear_sky_max&current_weather=true&temperature_unit=celsius&windspeed_unit=kmh&precipitation_unit=mm&timezone=auto&forecast_days=7`;
    return this.http.get(url);
  }
  getWeatherDescription(code) {
    return this.weatherDescriptions[code] || '';
  }
  getWeatherIcon(code) {
    return this.weatherIcons[code] || '';
  }
  getWeatherIconNight(code) {
    return this.nightWeatherIcons[code] || '';
  }
}
WeatherService.ɵfac = function WeatherService_Factory(t) {
  return new (t || WeatherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
WeatherService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: WeatherService,
  factory: WeatherService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map