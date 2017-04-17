import { Component, OnInit } from '@angular/core';
import { SelectItem,MenuItem } from 'primeng/primeng';

@Component({
    moduleId: module.id,
    selector: 'jhi-blank',
    templateUrl: 'blank.component.html',
    styleUrls: [
        'blank.css'
    ]
})
export class BlankComponent implements OnInit {
    	cities: SelectItem[];
    constructor() {
    	this.cities = [];
        this.cities.push({label:'重庆市及周边预报', value:{id:1, name: 'zq', code: 'zq'}});
        this.cities.push({label:'中央气象台预报', value:{id:2, name: 'zy', code: 'zy'}});
    }

    ngOnInit() {
    }
}
