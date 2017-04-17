import { Component, OnInit } from '@angular/core';
import { WaterLineService } from './waterline.service';

@Component({
    moduleId: module.id,
    selector: 'waterline',
    templateUrl: 'waterline.component.html',
    styleUrls: ['./waterline.component.css'],
    providers: [WaterLineService],
})

export class WaterLineComponent implements OnInit {
    options: Object;

    chart: any;

    startTime: Date;
    endTime: Date;
    en: any;

    constructor(private waterlineService: WaterLineService) {
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
                name: '流量(m³/s)',
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
        }
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
        this.waterlineService
            .outDataY()
            .then(data => {
                this.chart.series[0].setData(data);
            });
    };

    saveChart(chart) {
        this.chart = chart;
    };

    clicks: number = 0;
    aa: string;
    onclick() {
        this.clicks++;
        this.aa = (new Date(this.startTime)).toISOString().slice(0,10);
        return this.aa;
    }
}
