"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var UserMgmtDetailComponent = (function () {
    function UserMgmtDetailComponent(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    UserMgmtDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['login']);
        });
    };
    UserMgmtDetailComponent.prototype.load = function (login) {
        var _this = this;
        this.userService.find(login).subscribe(function (user) {
            _this.user = user;
        });
    };
    UserMgmtDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    UserMgmtDetailComponent = __decorate([
        core_1.Component({
            selector: 'jhi-user-mgmt-detail',
            templateUrl: './user-management-detail.component.html'
        })
    ], UserMgmtDetailComponent);
    return UserMgmtDetailComponent;
}());
exports.UserMgmtDetailComponent = UserMgmtDetailComponent;
//# sourceMappingURL=user-management-detail.component.js.map