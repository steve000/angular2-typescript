"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var shared_1 = require('../shared');
var _1 = require('./');
var angular2_highcharts_1 = require('angular2-highcharts');
var SchintacloudReservoirModule = (function () {
    function SchintacloudReservoirModule() {
    }
    SchintacloudReservoirModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_1.SchintacloudSharedModule,
                router_1.RouterModule.forRoot([_1.RESERVOIR_ROUTE], { useHash: true }),
                angular2_highcharts_1.ChartModule.forRoot(require('highcharts'))
            ],
            declarations: [
                _1.ReservoirComponent,
                _1.RukuchukuComponent,
                _1.ShuiweiguochengComponent,
                _1.GongchengtexingComponent
            ],
            entryComponents: [],
            providers: [
                _1.ReservoirService,
                _1.RukuchukuService
            ],
            schemas: [
                core_1.CUSTOM_ELEMENTS_SCHEMA
            ]
        })
    ], SchintacloudReservoirModule);
    return SchintacloudReservoirModule;
}());
exports.SchintacloudReservoirModule = SchintacloudReservoirModule;
//# sourceMappingURL=reservoir.module.js.map