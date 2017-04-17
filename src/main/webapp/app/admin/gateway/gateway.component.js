"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var gateway_routes_service_1 = require('./gateway-routes.service');
var JhiGatewayComponent = (function () {
    function JhiGatewayComponent(gatewayRoutesService) {
        this.gatewayRoutesService = gatewayRoutesService;
    }
    JhiGatewayComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    JhiGatewayComponent.prototype.refresh = function () {
        var _this = this;
        this.updatingRoutes = true;
        this.gatewayRoutesService.findAll().subscribe(function (gatewayRoutes) {
            _this.gatewayRoutes = gatewayRoutes;
            _this.updatingRoutes = false;
        });
    };
    JhiGatewayComponent = __decorate([
        core_1.Component({
            selector: 'jhi-gateway',
            templateUrl: './gateway.component.html',
            providers: [gateway_routes_service_1.GatewayRoutesService]
        })
    ], JhiGatewayComponent);
    return JhiGatewayComponent;
}());
exports.JhiGatewayComponent = JhiGatewayComponent;
//# sourceMappingURL=gateway.component.js.map