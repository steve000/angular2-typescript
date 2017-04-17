"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// import { WaterLineComponent } from 'waterline.component';
var WaterLineService = (function () {
    // private startTime= "2017-01-01-01";
    // private endTime= "2017-01-06-23";
    function WaterLineService(http) {
        this.http = http;
        // private riverurl = 'http://10.172.71.210:7080/fr/api/riverStation/60104500/data/hydroInfo';
        this.riverurl = 'http://10.172.71.210:7080/fr/api/riverStation/60104500/data/hydroInfo?startTime=2017-01-01-01&endTime=2017-01-06-23';
    }
    WaterLineService.prototype.getData = function () {
        // var header = new Headers();
        // header.append('Access-Control-Allow-Origin', '*');
        // header.append('Content-Type','application/json');
        // header.append('Accept','application/json');
        // return this.http.get(this.riverurl+'&startTime='+this.startTime+'&endTime='+this.endTime)
        return this.http.get(this.riverurl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    WaterLineService.prototype.outDataY = function () {
        return this.getData().then(function (data) {
            var Wlever = [];
            for (var i = 0; i < data.length; i++) {
                Wlever.push(data[i].Z);
            }
            return Wlever;
        });
    };
    ;
    /*ngOnInit() {
        this.getTime();
    }

    getTime(): void {
        this.waterLineComponent
            .onclick()
            .then(data => {
                console.log(data);
            });
    };*/
    WaterLineService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    WaterLineService = __decorate([
        core_1.Injectable()
    ], WaterLineService);
    return WaterLineService;
}());
exports.WaterLineService = WaterLineService;
//# sourceMappingURL=waterline.service.js.map