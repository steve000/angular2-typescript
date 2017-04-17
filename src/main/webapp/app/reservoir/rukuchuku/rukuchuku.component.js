"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var RukuchukuComponent = (function () {
    function RukuchukuComponent(dataService) {
        this.dataService = dataService;
        this.options = {
            title: { text: '水位-入库-出库过程线' },
            series: [{
                    data: this.transData(this.rData)
                }]
        };
    }
    RukuchukuComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    ;
    RukuchukuComponent.prototype.getData = function () {
        var _this = this;
        this.dataService.getData().then(function (data) {
            _this.rData = data;
            console.log(data);
        });
    };
    ;
    RukuchukuComponent.prototype.transData = function (data) {
        console.log(data);
        var array = [];
        // for(var i=0;i<data.length;i++){
        // 	let d=data[i].RZ;
        // 	array.push(d);
        // }
        return array;
    };
    RukuchukuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ruku',
            templateUrl: 'rukuchuku.component.html'
        })
    ], RukuchukuComponent);
    return RukuchukuComponent;
}());
exports.RukuchukuComponent = RukuchukuComponent;
//# sourceMappingURL=rukuchuku.component.js.map