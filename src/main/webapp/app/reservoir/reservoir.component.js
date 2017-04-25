"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ReservoirComponent = (function () {
    function ReservoirComponent() {
        this.cities = [];
        this.cities.push({ label: '罗汉寺水库', value: null });
        this.cities.push({ label: '石岗水库', value: { id: 1, name: 'New York', code: 'NY' } });
        this.cities.push({ label: '曹家山水库', value: { id: 2, name: 'Rome', code: 'RM' } });
    }
    ReservoirComponent.prototype.ngOnInit = function () {
    };
    ;
    ReservoirComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'jhi-blank',
            templateUrl: 'reservoir.component.html'
        })
    ], ReservoirComponent);
    return ReservoirComponent;
}());
exports.ReservoirComponent = ReservoirComponent;
//# sourceMappingURL=reservoir.component.js.map