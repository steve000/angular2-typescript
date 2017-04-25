"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var SiteCompareService = (function () {
    function SiteCompareService(http) {
        this.http = http;
        this.riverurl = 'http://10.172.71.210:7080/fr/api/riverStation/60104500/data/hydroInfo?startTime=2017-01-01-01&endTime=2017-01-06-23';
    }
    SiteCompareService.prototype.getData = function () {
        return this.http.get(this.riverurl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    SiteCompareService.prototype.outDataY = function () {
        return this.getData().then(function (data) {
            var Wlever = [];
            for (var i = 0; i < data.length; i++) {
                Wlever.push(data[i].Z);
            }
            return Wlever;
        });
    };
    ;
    SiteCompareService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    SiteCompareService = __decorate([
        core_1.Injectable()
    ], SiteCompareService);
    return SiteCompareService;
}());
exports.SiteCompareService = SiteCompareService;
//# sourceMappingURL=Sitecompare.service.js.map