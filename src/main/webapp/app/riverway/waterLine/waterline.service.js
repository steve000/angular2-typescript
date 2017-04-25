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
// import { WaterLineComponent } from 'waterline.component';
var WaterLineService = (function () {
    function WaterLineService() {
        this.riverurl = 'http://10.172.71.210:7080/fr/api/riverStation/60104500/data/hydroInfo';
    }
    // // private riverurl = 'http://10.172.71.210:7080/fr/api/riverStation/60104500/data/hydroInfo?startTime=2017-01-01-01&endTime=2017-01-06-23';
    //
    // private startTime= "2017-01-01-01";
    // private endTime= "2017-01-06-23";
    //
    // constructor(private http: Http) {}
    //
    // getData(): Promise<any> {
    //     var header = new Headers();
    //     header.append('Access-Control-Allow-Origin', '*');
    //     header.append('Content-Type','application/json');
    //     header.append('Accept','application/json');
    //
    //     return this.http.get(this.riverurl+'&startTime='+this.startTime+'&endTime='+this.endTime)
    //     // return this.http.get(this.riverurl)
    //         .toPromise()
    //         .then(response => response.json())
    //         .catch(this.handleError);
    // };
    WaterLineService.prototype.getPostList = function (startTime, endTime) {
        var url = this.riverurl;
        var params = new http_1.URLSearchParams();
        if (startTime)
            params.set('startTime', startTime);
        if (endTime)
            params.set('endTime', endTime);
        return this.http
            .get(url, { search: params })
            .map(function (res) {
            var result = res.json();
            console.log(result);
            return result;
        })
            .catch(function (error) { return Rx_1.Observable.threw(error || 'Sever error'); });
    };
    WaterLineService.prototype.outDataY = function (startTime, endTime) {
        return this.getPostList(startTime, endTime).then(function (data) {
            var Wlever = [];
            for (var i = 0; i < data.length; i++) {
                Wlever.push(data[i].Z);
            }
            return Wlever;
        });
    };
    ;
    WaterLineService = __decorate([
        core_1.Injectable()
    ], WaterLineService);
    return WaterLineService;
}());
exports.WaterLineService = WaterLineService;
