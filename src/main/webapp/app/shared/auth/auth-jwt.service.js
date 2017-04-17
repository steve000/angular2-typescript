"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var AuthServerProvider = (function () {
    function AuthServerProvider(http, $localStorage, $sessionStorage) {
        this.http = http;
        this.$localStorage = $localStorage;
        this.$sessionStorage = $sessionStorage;
    }
    AuthServerProvider.prototype.getToken = function () {
        return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
    };
    AuthServerProvider.prototype.login = function (credentials) {
        var _this = this;
        var data = new http_1.URLSearchParams();
        data.append('grant_type', 'password');
        data.append('username', credentials.username);
        data.append('password', credentials.password);
        var headers = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic d2ViX2FwcDo='
        });
        return this.http.post('schintauaa/oauth/token', data, {
            headers: headers
        }).map(function (resp) {
            var accessToken = resp.json()['access_token'];
            if (accessToken) {
                _this.storeAuthenticationToken(accessToken, credentials.rememberMe);
            }
            return accessToken;
        });
    };
    AuthServerProvider.prototype.loginWithToken = function (jwt, rememberMe) {
        if (jwt) {
            this.storeAuthenticationToken(jwt, rememberMe);
            return Promise.resolve(jwt);
        }
        else {
            return Promise.reject('auth-jwt-service Promise reject'); // Put appropriate error message here
        }
    };
    AuthServerProvider.prototype.storeAuthenticationToken = function (jwt, rememberMe) {
        if (rememberMe) {
            this.$localStorage.store('authenticationToken', jwt);
        }
        else {
            this.$sessionStorage.store('authenticationToken', jwt);
        }
    };
    AuthServerProvider.prototype.logout = function () {
        var _this = this;
        return new Rx_1.Observable(function (observer) {
            _this.$localStorage.clear('authenticationToken');
            _this.$sessionStorage.clear('authenticationToken');
            observer.complete();
        });
    };
    AuthServerProvider = __decorate([
        core_1.Injectable()
    ], AuthServerProvider);
    return AuthServerProvider;
}());
exports.AuthServerProvider = AuthServerProvider;
//# sourceMappingURL=auth-jwt.service.js.map