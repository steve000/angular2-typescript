import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'gctx',
    templateUrl: 'gongchengtexing.component.html'
})

export class GongchengtexingComponent implements OnInit {
    constructor() {
    	this.options = {
            title : { text : '水位-入库-出库过程线' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2],
            }]
        };
    }

    options:Object;
    
    ngOnInit() {
    }
}
