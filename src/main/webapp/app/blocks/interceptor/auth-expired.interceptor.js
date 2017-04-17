"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ng_jhipster_1 = require('ng-jhipster');
var Observable_1 = require('rxjs/Observable');
var auth_service_1 = require('../../shared/auth/auth.service');
var principal_service_1 = require('../../shared/auth/principal.service');
var AuthExpiredInterceptor = (function (_super) {
    __extends(AuthExpiredInterceptor, _super);
    function AuthExpiredInterceptor(injector) {
        _super.call(this);
        this.injector = injector;
    }
    AuthExpiredInterceptor.prototype.requestIntercept = function (options) {
        return options;
    };
    AuthExpiredInterceptor.prototype.responseIntercept = function (observable) {
        var self = this;
        return observable.catch(function (error, source) {
            if (error.status === 401) {
                var principal = self.injector.get(principal_service_1.Principal);
                if (principal.isAuthenticated()) {
                    var auth = self.injector.get(auth_service_1.AuthService);
                    auth.authorize(true);
                }
            }
            return Observable_1.Observable.throw(error);
        });
    };
    return AuthExpiredInterceptor;
}(ng_jhipster_1.HttpInterceptor));
exports.AuthExpiredInterceptor = AuthExpiredInterceptor;
//# sourceMappingURL=auth-expired.interceptor.js.map