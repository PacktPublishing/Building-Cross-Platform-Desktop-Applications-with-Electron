webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(2);
	var core_1 = __webpack_require__(4);
	var app_module_ts_1 = __webpack_require__(24);
	if (process.env.ENV === 'production') {
	    core_1.enableProdMode();
	}
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_ts_1.AppModule);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var platform_browser_1 = __webpack_require__(22);
	var app_component_ts_1 = __webpack_require__(25);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                platform_browser_1.BrowserModule
	            ],
	            declarations: [
	                app_component_ts_1.AppComponent
	            ],
	            bootstrap: [app_component_ts_1.AppComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var AppComponent = (function () {
	    function AppComponent() {
	        this.nodeVersion = "process.versions.node";
	        this.chromeVersion = process.platform;
	        this.electronVersion = process.versions.electron;
	        console.log(process);
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'electron-app',
	            template: "\n\t\t<div style=\"margin:100px;\"> Angular Bootstrapped {{ electronVersion }}</div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNEQUF1QyxDQUFtQyxDQUFDO0FBQzNFLGtDQUE4QixDQUFlLENBQUM7QUFDOUMsMkNBQTBCLEVBQWlCLENBQUM7QUFFNUMsR0FBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQztLQUNyQyxxQkFBYyxFQUFFLENBQUM7QUFDbkIsRUFBQztBQUVELGtEQUFzQixFQUFFLENBQUMsZUFBZSxDQUFDLHlCQUFTLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JwRCxrQ0FBeUIsQ0FBZSxDQUFDO0FBQ3pDLDhDQUErQixFQUEyQixDQUFDO0FBQzNELDhDQUE2QixFQUFvQixDQUFDO0FBV2xEO0tBQUE7S0FBeUIsQ0FBQztLQVQxQjtTQUFDLGVBQVEsQ0FBQzthQUNSLE9BQU8sRUFBRTtpQkFDUCxnQ0FBYTtjQUNkO2FBQ0QsWUFBWSxFQUFFO2lCQUNaLCtCQUFZO2NBQ2I7YUFDRCxTQUFTLEVBQUUsQ0FBRSwrQkFBWSxDQUFFO1VBQzVCLENBQUM7O2tCQUFBO0tBQ3VCLGdCQUFDO0FBQUQsRUFBQztBQUFiLGtCQUFTLFlBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2IxQixrQ0FBMEIsQ0FBZSxDQUFDO0FBUzFDO0tBTUM7U0FKTyxnQkFBVyxHQUFXLHVCQUF1QixDQUFDO1NBQzlDLGtCQUFhLEdBQVcsT0FBTyxDQUFDLFFBQVEsQ0FBQztTQUN6QyxvQkFBZSxHQUFXLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1NBRzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO0tBQ3JCLENBQUM7S0FkRjtTQUFDLGdCQUFTLENBQUM7YUFDVCxRQUFRLEVBQUUsY0FBYzthQUN4QixRQUFRLEVBQUUsMEZBRVQ7VUFDRixDQUFDOztxQkFBQTtLQVdGLG1CQUFDO0FBQUQsRUFBQztBQVZZLHFCQUFZLGVBVXhCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAubW9kdWxlLnRzJztcblxuaWYgKHByb2Nlc3MuZW52LkVOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGVuYWJsZVByb2RNb2RlKCk7XG59XG5cbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9hcHAudHNcbiAqKi8iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9ICBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudC50cyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudFxuICBdLFxuICBib290c3RyYXA6IFsgQXBwQ29tcG9uZW50IF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9zcmMvYXBwL2FwcC5tb2R1bGUudHNcbiAqKi8iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbGVjdHJvbi1hcHAnLFxuICB0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgc3R5bGU9XCJtYXJnaW46MTAwcHg7XCI+IEFuZ3VsYXIgQm9vdHN0cmFwcGVkIHt7IGVsZWN0cm9uVmVyc2lvbiB9fTwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IFxuXHRcblx0cHVibGljIG5vZGVWZXJzaW9uOiBTdHJpbmcgPSBcInByb2Nlc3MudmVyc2lvbnMubm9kZVwiO1xuXHRwdWJsaWMgY2hyb21lVmVyc2lvbjogU3RyaW5nID0gcHJvY2Vzcy5wbGF0Zm9ybTtcblx0cHVibGljIGVsZWN0cm9uVmVyc2lvbjogU3RyaW5nID0gcHJvY2Vzcy52ZXJzaW9ucy5lbGVjdHJvbjtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRjb25zb2xlLmxvZyhwcm9jZXNzKVxuXHR9XG5cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==