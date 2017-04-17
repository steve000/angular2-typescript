"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var historycompare_service_1 = require('./historycompare.service');
var HistoryCompareComponent = (function () {
    function HistoryCompareComponent(historyCompareService) {
        this.historyCompareService = historyCompareService;
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
                    name: '实时水位(m)'
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
        this.years = [];
        this.years.push({ label: '请输入年份...', value: null });
        this.years.push({ label: '2007年', value: { id: 1, name: 'New York', code: 'NY' } });
        this.years.push({ label: '2008年', value: { id: 2, name: 'Rome', code: 'RM' } });
        this.years.push({ label: '2009年', value: { id: 3, name: 'London', code: 'LDN' } });
        this.years.push({ label: '2010年', value: { id: 4, name: 'Istanbul', code: 'IST' } });
        this.years.push({ label: '2011年', value: { id: 5, name: 'Paris', code: 'PRS' } });
        this.years.push({ label: '2012年', value: { id: 6, name: 'Paris', code: 'PRS' } });
        this.years.push({ label: '2013年', value: { id: 7, name: 'Paris', code: 'PRS' } });
        this.years.push({ label: '2014年', value: { id: 8, name: 'Paris', code: 'PRS' } });
        this.years.push({ label: '2015年', value: { id: 9, name: 'Paris', code: 'PRS' } });
        this.years.push({ label: '2016年', value: { id: 10, name: 'Paris', code: 'PRS' } });
        this.years.push({ label: '2017年', value: { id: 11, name: 'Paris', code: 'PRS' } });
    }
    ;
    HistoryCompareComponent.prototype.ngOnInit = function () {
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
    HistoryCompareComponent.prototype.outDataY = function () {
        var _this = this;
        this.historyCompareService
            .outDataY()
            .then(function (data) {
            _this.chart.series[0].setData(data);
        });
    };
    ;
    HistoryCompareComponent.prototype.saveChart = function (chart) {
        this.chart = chart;
    };
    ;
    HistoryCompareComponent.prototype.onclick = function () {
        this.aa = (new Date(this.startTime)).toISOString().slice(0, 10);
        return this.aa;
    };
    ;
    HistoryCompareComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'historycompare',
            templateUrl: 'historycompare.component.html',
            styleUrls: ['./historycompare.component.css'],
            providers: [historycompare_service_1.HistoryCompareService]
        })
    ], HistoryCompareComponent);
    return HistoryCompareComponent;
}());
exports.HistoryCompareComponent = HistoryCompareComponent;
//# sourceMappingURL=historycompare.component.js.map