"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var RiverWayComponent = (function () {
    function RiverWayComponent() {
        this.cities = [];
        this.cities.push({ label: '泸州', value: null });
        this.cities.push({ label: '朱沱', value: { id: 1, name: 'New York', code: 'NY' } });
        this.cities.push({ label: '寸滩', value: { id: 2, name: 'Rome', code: 'RM' } });
        this.cities.push({ label: '长寿', value: null });
        this.cities.push({ label: '清溪场', value: null });
        this.cities.push({ label: '忠县', value: null });
        this.cities.push({ label: '万县', value: null });
    }
    ;
    RiverWayComponent.prototype.ngOnInit = function () {
    };
    ;
    RiverWayComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'riverway-app',
            templateUrl: 'riverway.component.html',
            styleUrls: ['./riverway.component.css']
        })
    ], RiverWayComponent);
    return RiverWayComponent;
}());
exports.RiverWayComponent = RiverWayComponent;
//# sourceMappingURL=riverway.component.js.map