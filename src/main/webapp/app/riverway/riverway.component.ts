import { Component, OnInit } from '@angular/core';
import { TabMenuModule, MenuItem, SelectItem, TabViewModule } from 'primeng/primeng';

import * as Highcharts from 'highcharts';

@Component({
    moduleId: module.id,
    selector: 'riverway-app',
    templateUrl: 'riverway.component.html',
    styleUrls: ['./riverway.component.css'],
})

export class RiverWayComponent implements OnInit {

    constructor() {
        this.cities = [];
        this.cities.push({ label: '泸州', value: null });
        this.cities.push({ label: '朱沱', value: {id: 1, name: 'New York', code: 'NY' }});
        this.cities.push({ label: '寸滩', value: { id: 2, name: 'Rome', code: 'RM' }});
        this.cities.push({ label: '长寿', value: null });
        this.cities.push({ label: '清溪场', value: null });
        this.cities.push({ label: '忠县', value: null });
        this.cities.push({ label: '万县', value: null });
    };

    cities: SelectItem[];

    ngOnInit() {

    };
}
