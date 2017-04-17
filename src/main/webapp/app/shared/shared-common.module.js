"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var ng_jhipster_1 = require('ng-jhipster');
var _1 = require('./');
function alertServiceProvider(sanitizer) {
    // set below to true to make alerts look like toast
    var isToast = false;
    return new ng_jhipster_1.AlertService(sanitizer, isToast);
}
exports.alertServiceProvider = alertServiceProvider;
var SchintacloudSharedCommonModule = (function () {
    function SchintacloudSharedCommonModule() {
    }
    SchintacloudSharedCommonModule = __decorate([
        core_1.NgModule({
            imports: [
                _1.SchintacloudSharedLibsModule
            ],
            declarations: [
                _1.JhiAlertComponent,
                _1.JhiAlertErrorComponent
            ],
            providers: [
                {
                    provide: ng_jhipster_1.AlertService,
                    useFactory: alertServiceProvider,
                    deps: [core_1.Sanitizer]
                },
                platform_browser_1.Title
            ],
            exports: [
                _1.SchintacloudSharedLibsModule,
                _1.JhiAlertComponent,
                _1.JhiAlertErrorComponent
            ]
        })
    ], SchintacloudSharedCommonModule);
    return SchintacloudSharedCommonModule;
}());
exports.SchintacloudSharedCommonModule = SchintacloudSharedCommonModule;
//# sourceMappingURL=shared-common.module.js.map