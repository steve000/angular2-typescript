import { Component, OnInit } from '@angular/core';
import { TabMenuModule,MenuItem,SelectItem,TabViewModule } from 'primeng/primeng';

import * as Highcharts from 'highcharts'

@Component({
    moduleId: module.id,
    selector: 'jhi-blank',
    templateUrl: 'reservoir.component.html'
})

export class ReservoirComponent implements OnInit {

    constructor() { 
        this.cities = [];
        this.cities.push({label:'罗汉寺水库', value:null});
        this.cities.push({label:'石岗水库', value:{id:1, name: 'New York', code: 'NY'}});
        this.cities.push({label:'曹家山水库', value:{id:2, name: 'Rome', code: 'RM'}});
        
    }

    cities: SelectItem[];

    ngOnInit() {
    };
}
