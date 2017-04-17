import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'engine',
    templateUrl: 'enginecharacter.component.html',
})

export class EngineCharacterComponent implements OnInit {
    constructor() {
    	this.options = {
            title : { text : "工程特性" },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2],
            }]
        };
    }
    options: Object;

    ngOnInit() {
    }
}
