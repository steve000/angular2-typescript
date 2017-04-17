"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ng_jhipster_1 = require('ng-jhipster');
var AuthInterceptor = (function (_super) {
    __extends(AuthInterceptor, _super);
    function AuthInterceptor(localStorage, sessionStorage) {
        _super.call(this);
        this.localStorage = localStorage;
        this.sessionStorage = sessionStorage;
    }
    AuthInterceptor.prototype.requestIntercept = function (options) {
        var token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
        if (!!token) {
            options.headers.append('Authorization', 'Bearer ' + token);
        }
        return options;
    };
    AuthInterceptor.prototype.responseIntercept = function (observable) {
        return observable; // by pass
    };
    return AuthInterceptor;
}(ng_jhipster_1.HttpInterceptor));
exports.AuthInterceptor = AuthInterceptor;
//# sourceMappingURL=auth.interceptor.js.map