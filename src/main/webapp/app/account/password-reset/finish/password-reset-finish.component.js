"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var PasswordResetFinishComponent = (function () {
    function PasswordResetFinishComponent(passwordResetFinish, loginModalService, route, elementRef, renderer) {
        this.passwordResetFinish = passwordResetFinish;
        this.loginModalService = loginModalService;
        this.route = route;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    PasswordResetFinishComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.key = params['key'];
        });
        this.resetAccount = {};
        this.keyMissing = !this.key;
    };
    PasswordResetFinishComponent.prototype.ngAfterViewInit = function () {
        if (this.elementRef.nativeElement.querySelector('#password') != null) {
            this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#password'), 'focus', []);
        }
    };
    PasswordResetFinishComponent.prototype.finishReset = function () {
        var _this = this;
        this.doNotMatch = null;
        this.error = null;
        if (this.resetAccount.password !== this.confirmPassword) {
            this.doNotMatch = 'ERROR';
        }
        else {
            this.passwordResetFinish.save({ key: this.key, newPassword: this.resetAccount.password }).subscribe(function () {
                _this.success = 'OK';
            }, function () {
                _this.success = null;
                _this.error = 'ERROR';
            });
        }
    };
    PasswordResetFinishComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    PasswordResetFinishComponent = __decorate([
        core_1.Component({
            selector: 'jhi-password-reset-finish',
            templateUrl: './password-reset-finish.component.html'
        })
    ], PasswordResetFinishComponent);
    return PasswordResetFinishComponent;
}());
exports.PasswordResetFinishComponent = PasswordResetFinishComponent;
//# sourceMappingURL=password-reset-finish.component.js.map