import { Component, OnInit } from '@angular/core';
import { HistoryCompareService } from './historycompare.service';
import { SelectItem } from 'primeng/primeng';

@Component({
    moduleId: module.id,
    selector: 'historycompare',
    templateUrl: 'historycompare.component.html',
    styleUrls: ['./historycompare.component.css'],
    providers: [HistoryCompareService],
})

export class HistoryCompareComponent implements OnInit {
    options: Object;

    chart: any;

    startTime: Date;
    endTime: Date;
    en: any;

    years: SelectItem[];
    selectedYear: string;

    constructor(private historyCompareService: HistoryCompareService) {
        this.options = {
            title : {
                text : '水位/流量过程线',
                align: 'left',
                style: { 'color': '#333333', 'fontSize': '18px', 'fontWeight': 'bold'},
            },
            series: [{
                name: '水位(m)',
                data: [],
            }, {
                name: '实时水位(m)',
            }, {
                name: '警戒水位',
            }, {
                name: '保证水位',
            }, {
                name: '最高水位',
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
            yAxis: [{ // 第一个 Y 轴，放置在左边（默认在坐标）
                title: {
                    text: '水位(m)',
                },
                labels: {
                    align: 'left',
                    x: 3,
                    y: 16,
                    format: '{value:.,0f}'
                },
                showFirstLabel: false
            }, {    // 第二个坐标轴，放置在右边
                linkedTo: 0,
                gridLineWidth: 0,
                opposite: true,  // 通过此参数设置坐标轴显示在对立面
                title: {
                    text: '流量(m³/s)',
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
                type: 'line',
            }
        };
        this.years = [];
        this.years.push({label:'请输入年份...', value:null});
        this.years.push({label:'2007年', value:{id:1, name: 'New York', code: 'NY'}});
        this.years.push({label:'2008年', value:{id:2, name: 'Rome', code: 'RM'}});
        this.years.push({label:'2009年', value:{id:3, name: 'London', code: 'LDN'}});
        this.years.push({label:'2010年', value:{id:4, name: 'Istanbul', code: 'IST'}});
        this.years.push({label:'2011年', value:{id:5, name: 'Paris', code: 'PRS'}});
        this.years.push({label:'2012年', value:{id:6, name: 'Paris', code: 'PRS'}});
        this.years.push({label:'2013年', value:{id:7, name: 'Paris', code: 'PRS'}});
        this.years.push({label:'2014年', value:{id:8, name: 'Paris', code: 'PRS'}});
        this.years.push({label:'2015年', value:{id:9, name: 'Paris', code: 'PRS'}});
        this.years.push({label:'2016年', value:{id:10, name: 'Paris', code: 'PRS'}});
        this.years.push({label:'2017年', value:{id:11, name: 'Paris', code: 'PRS'}});
    };

    ngOnInit() {
        this.outDataY();
        this.en = {
            firstDayOfWeek: 1,
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"],
            monthNames: [ "January","February","March","April","May","June","July","August","September","October","November","December" ],
            monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
        };
        this.endTime = new Date();
    };

    outDataY(): void {
        this.historyCompareService
            .outDataY()
            .then(data => {
                this.chart.series[0].setData(data);
            });
    };

    saveChart(chart) {
        this.chart = chart;
    };

    aa: string;
    onclick() {
        this.aa = (new Date(this.startTime)).toISOString().slice(0,10);
        return this.aa;
    };

    // checkyear() {
    //     return this.chart.series[0].name('水位(m)');
    // }

}
