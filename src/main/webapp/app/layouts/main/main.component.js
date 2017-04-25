"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var JhiMainComponent = (function () {
    function JhiMainComponent(titleService, router, $storageService) {
        this.titleService = titleService;
        this.router = router;
        this.$storageService = $storageService;
    }
    JhiMainComponent.prototype.getPageTitle = function (routeSnapshot) {
        var title = (routeSnapshot.data && routeSnapshot.data['pageTitle']) ? routeSnapshot.data['pageTitle'] : 'schintacloudApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    };
    JhiMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.titleService.setTitle(_this.getPageTitle(_this.router.routerState.snapshot.root));
            }
            if (event instanceof router_1.RoutesRecognized) {
                var params = {};
                var destinationData = {};
                var destinationName = '';
                var destinationEvent = event.state.root.firstChild.children[0];
                if (destinationEvent !== undefined) {
                    params = destinationEvent.params;
                    destinationData = destinationEvent.data;
                    destinationName = destinationEvent.url[0].path;
                }
                var from = { name: _this.router.url.slice(1) };
                var destination = { name: destinationName, data: destinationData };
                _this.$storageService.storeDestinationState(destination, params, from);
            }
        });
    };
    JhiMainComponent.prototype.toggleSidebar = function () {
        this.isSidebarCollapsed = !this.isSidebarCollapsed;
    };
    JhiMainComponent = __decorate([
        core_1.Component({
            selector: 'jhi-main',
            templateUrl: './main.component.html',
            styleUrls: [
                'main.css'
            ]
        })
    ], JhiMainComponent);
    return JhiMainComponent;
}());
exports.JhiMainComponent = JhiMainComponent;
//# sourceMappingURL=main.component.js.map