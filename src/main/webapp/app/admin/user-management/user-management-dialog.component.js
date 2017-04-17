"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var UserMgmtDialogComponent = (function () {
    function UserMgmtDialogComponent(activeModal, userService, eventManager) {
        this.activeModal = activeModal;
        this.userService = userService;
        this.eventManager = eventManager;
    }
    UserMgmtDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    UserMgmtDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    UserMgmtDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.user.id !== null) {
            this.userService.update(this.user).subscribe(function (response) { return _this.onSaveSuccess(response); }, function () { return _this.onSaveError(); });
        }
        else {
            this.user.langKey = 'en';
            this.userService.create(this.user).subscribe(function (response) { return _this.onSaveSuccess(response); }, function () { return _this.onSaveError(); });
        }
    };
    UserMgmtDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'userListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
    };
    UserMgmtDialogComponent.prototype.onSaveError = function () {
        this.isSaving = false;
    };
    UserMgmtDialogComponent = __decorate([
        core_1.Component({
            selector: 'jhi-user-mgmt-dialog',
            templateUrl: './user-management-dialog.component.html'
        })
    ], UserMgmtDialogComponent);
    return UserMgmtDialogComponent;
}());
exports.UserMgmtDialogComponent = UserMgmtDialogComponent;
var UserDialogComponent = (function () {
    function UserDialogComponent(route, userModalService) {
        this.route = route;
        this.userModalService = userModalService;
    }
    UserDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['login']) {
                _this.modalRef = _this.userModalService.open(UserMgmtDialogComponent, params['login']);
            }
            else {
                _this.modalRef = _this.userModalService.open(UserMgmtDialogComponent);
            }
        });
    };
    UserDialogComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    UserDialogComponent = __decorate([
        core_1.Component({
            selector: 'jhi-user-dialog',
            template: ''
        })
    ], UserDialogComponent);
    return UserDialogComponent;
}());
exports.UserDialogComponent = UserDialogComponent;
//# sourceMappingURL=user-management-dialog.component.js.map