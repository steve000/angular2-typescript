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
var waterline_service_1 = require('./waterLine/waterline.service');
var waterline_component_1 = require('./waterLine/waterline.component');
var waterlever_service_1 = require('./waterLever/waterlever.service');
var waterlever_component_1 = require('./waterLever/waterlever.component');
var enginecharacter_service_1 = require('./engineCharacter/enginecharacter.service');
var enginecharacter_component_1 = require('./engineCharacter/enginecharacter.component');
var historycompare_service_1 = require('./historyCompare/historycompare.service');
var historycompare_component_1 = require('./historyCompare/historycompare.component');
var sitecompare_service_1 = require('./siteCompare/sitecompare.service');
var sitecompare_component_1 = require('./siteCompare/sitecompare.component');
var valuecompare_service_1 = require('./valueCompare/valuecompare.service');
var valuecompare_component_1 = require('./valueCompare/valuecompare.component');
var angular2_highcharts_1 = require('angular2-highcharts');
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
// import { DropdownModule } from 'primeng/primeng';
var SchintacloudRiverwayModule = (function () {
    function SchintacloudRiverwayModule() {
    }
    SchintacloudRiverwayModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_1.SchintacloudSharedModule,
                router_1.RouterModule.forRoot([_1.RiverWayRouting], { useHash: true }),
                angular2_highcharts_1.ChartModule.forRoot(require('highcharts')),
                primeng_1.CalendarModule,
                primeng_2.ButtonModule,
            ],
            declarations: [
                _1.RiverWayComponent,
                waterline_component_1.WaterLineComponent,
                waterlever_component_1.WaterLeverComponent,
                enginecharacter_component_1.EngineCharacterComponent,
                historycompare_component_1.HistoryCompareComponent,
                sitecompare_component_1.SiteCompareComponent,
                valuecompare_component_1.ValueCompareComponent
            ],
            entryComponents: [],
            providers: [
                _1.RiverWayService,
                waterline_service_1.WaterLineService,
                waterlever_service_1.WaterLeverService,
                enginecharacter_service_1.EngineCharacterService,
                historycompare_service_1.HistoryCompareService,
                sitecompare_service_1.SiteCompareService,
                valuecompare_service_1.ValueCompareService
            ],
            schemas: [
                core_1.CUSTOM_ELEMENTS_SCHEMA
            ]
        })
    ], SchintacloudRiverwayModule);
    return SchintacloudRiverwayModule;
}());
exports.SchintacloudRiverwayModule = SchintacloudRiverwayModule;
//# sourceMappingURL=riverway.module.js.map