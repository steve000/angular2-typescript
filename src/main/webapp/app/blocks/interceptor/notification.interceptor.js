"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ng_jhipster_1 = require('ng-jhipster');
var Observable_1 = require('rxjs/Observable');
var NotificationInterceptor = (function (_super) {
    __extends(NotificationInterceptor, _super);
    function NotificationInterceptor() {
        _super.call(this);
    }
    NotificationInterceptor.prototype.requestIntercept = function (options) {
        return options;
    };
    NotificationInterceptor.prototype.responseIntercept = function (observable) {
        return observable.catch(function (error) {
            var arr = Array.from(error.headers._headers);
            var headers = [];
            var i;
            for (i = 0; i < arr.length; i++) {
                if (arr[i][0].endsWith('app-alert') || arr[i][0].endsWith('app-params')) {
                    headers.push(arr[i][0]);
                }
            }
            headers.sort();
            var alertKey = headers.length >= 1 ? error.headers.get(headers[0]) : null;
            if (typeof alertKey === 'string') {
            }
            return Observable_1.Observable.throw(error);
        });
    };
    return NotificationInterceptor;
}(ng_jhipster_1.HttpInterceptor));
exports.NotificationInterceptor = NotificationInterceptor;
//# sourceMappingURL=notification.interceptor.js.map