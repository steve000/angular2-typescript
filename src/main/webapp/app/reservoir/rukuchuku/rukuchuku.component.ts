import { Component, OnInit } from '@angular/core';
import { RukuchukuService } from './rukuchuku.service';

@Component({
    moduleId: module.id,
    selector: 'ruku',
    templateUrl: 'rukuchuku.component.html'
})

export class RukuchukuComponent implements OnInit {
    options:Object;

    rData:Object;

    constructor(private dataService: RukuchukuService) {
    	this.options = {
            title : { text : '水位-入库-出库过程线' },
            series: [{
                data:  this.transData(this.rData)
            }]
        };
    }

    ngOnInit() {
    	this.getData();
    };

    getData(): void {
		this.dataService.getData().then(data => {
			this.rData=data;
			console.log(data);
		});
	};

	transData(data){
		console.log(data);
		var array:any[]=[];
		// for(var i=0;i<data.length;i++){
		// 	let d=data[i].RZ;
		// 	array.push(d);
		// }
		return array;
	}


}
