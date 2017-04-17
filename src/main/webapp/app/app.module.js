"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
require('./vendor.ts');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var ng2_webstorage_1 = require('ng2-webstorage');
var shared_1 = require('./shared');
var home_module_1 = require('./home/home.module');
var blank_module_1 = require('./blank/blank.module');
var reservoir_module_1 = require('./reservoir/reservoir.module');
var riverway_module_1 = require('./riverway/riverway.module');
var admin_module_1 = require('./admin/admin.module');
var account_module_1 = require('./account/account.module');
var entity_module_1 = require('./entities/entity.module');
var layouts_1 = require('./layouts');
var http_provider_1 = require('./blocks/interceptor/http.provider');
var uib_pagination_config_1 = require('./blocks/config/uib-pagination.config');
var layouts_2 = require('./layouts');
var SchintacloudAppModule = (function () {
    function SchintacloudAppModule() {
    }
    SchintacloudAppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                layouts_1.LayoutRoutingModule,
                ng2_webstorage_1.Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
                shared_1.SchintacloudSharedModule,
                home_module_1.SchintacloudHomeModule,
                blank_module_1.SchintacloudBlankModule,
                admin_module_1.SchintacloudAdminModule,
                account_module_1.SchintacloudAccountModule,
                entity_module_1.SchintacloudEntityModule,
                reservoir_module_1.SchintacloudReservoirModule,
                riverway_module_1.SchintacloudRiverwayModule,
            ],
            declarations: [
                layouts_2.JhiMainComponent,
                layouts_2.NavbarComponent,
                layouts_2.SidebarComponent,
                layouts_2.ErrorComponent,
                layouts_2.PageRibbonComponent,
                layouts_2.FooterComponent
            ],
            providers: [
                layouts_2.ProfileService,
                { provide: Window, useValue: window },
                { provide: Document, useValue: document },
                http_provider_1.customHttpProvider(),
                uib_pagination_config_1.PaginationConfig,
                shared_1.UserRouteAccessService
            ],
            bootstrap: [layouts_2.JhiMainComponent]
        })
    ], SchintacloudAppModule);
    return SchintacloudAppModule;
}());
exports.SchintacloudAppModule = SchintacloudAppModule;
//# sourceMappingURL=app.module.js.map