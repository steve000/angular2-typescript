"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var RukuchukuService = (function () {
    //    private headers = new Headers({'Access-Control-Allow-Origin': '*'});
    // private url='http://10.172.71.210:7080/fr/api/riverStation/60104500/data/hydroInfo?startTime=2017-01-01-01&endTime=2017-01-17-23&chazhiData=ZQ';
    function RukuchukuService(http) {
        this.http = http;
        this.url = 'http://10.172.71.210:7080/fr/api/reservoirStation/605AA629/data/hydroInfo?startTime=2016-06-01-01&endTime=2016-06-30-23';
    }
    RukuchukuService.prototype.getData = function () {
        return this.http.get(this.url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RukuchukuService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    RukuchukuService = __decorate([
        core_1.Injectable()
    ], RukuchukuService);
    return RukuchukuService;
}());
exports.RukuchukuService = RukuchukuService;
//# sourceMappingURL=rukuchuku.service.js.map