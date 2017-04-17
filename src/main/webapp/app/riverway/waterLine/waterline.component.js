"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var waterline_service_1 = require('./waterline.service');
var WaterLineComponent = (function () {
    function WaterLineComponent(waterlineService) {
        this.waterlineService = waterlineService;
        this.clicks = 0;
        this.options = {
            title: {
                text: '水位/流量过程线',
                align: 'left',
                style: { 'color': '#333333', 'fontSize': '18px', 'fontWeight': 'bold' }
            },
            series: [{
                    name: '水位(m)',
                    data: []
                }, {
                    name: '流量(m³/s)'
                }, {
                    name: '警戒水位'
                }, {
                    name: '保证水位'
                }, {
                    name: '最高水位'
                }],
            xAxis: {
                // tickInterval: 3600 * 1000, // 坐标轴刻度间隔为一小时
                categories: [],
                tickWidth: 0,
                gridLineWidth: 1,
                labels: {
                    align: 'left',
                    x: 3,
                    y: -3
                },
                // 时间格式化字符
                // 默认会根据当前的刻度间隔取对应的值，即当刻度间隔为一周时，取 week 值
                dateTimeLabelFormats: {
                    hour: '%Y-%m-%d'
                }
            },
            yAxis: [{
                    title: {
                        text: '水位(m)'
                    },
                    labels: {
                        align: 'left',
                        x: 3,
                        y: 16,
                        format: '{value:.,0f}'
                    },
                    showFirstLabel: false
                }, {
                    linkedTo: 0,
                    gridLineWidth: 0,
                    opposite: true,
                    title: {
                        text: '流量(m³/s)'
                    },
                    labels: {
                        align: 'right',
                        x: -3,
                        y: 16,
                        format: '{value:.,0f}'
                    },
                    showFirstLabel: false
                }],
            chart: {
                type: 'line'
            }
        };
    }
    ;
    WaterLineComponent.prototype.ngOnInit = function () {
        this.outDataY();
        this.en = {
            firstDayOfWeek: 1,
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        };
        this.endTime = new Date();
    };
    ;
    WaterLineComponent.prototype.outDataY = function () {
        var _this = this;
        this.waterlineService
            .outDataY()
            .then(function (data) {
            _this.chart.series[0].setData(data);
        });
    };
    ;
    WaterLineComponent.prototype.saveChart = function (chart) {
        this.chart = chart;
    };
    ;
    WaterLineComponent.prototype.onclick = function () {
        this.clicks++;
        this.aa = (new Date(this.startTime)).toISOString().slice(0, 10);
        return this.aa;
    };
    WaterLineComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'waterline',
            templateUrl: 'waterline.component.html',
            styleUrls: ['./waterline.component.css'],
            providers: [waterline_service_1.WaterLineService]
        })
    ], WaterLineComponent);
    return WaterLineComponent;
}());
exports.WaterLineComponent = WaterLineComponent;
//# sourceMappingURL=waterline.component.js.map