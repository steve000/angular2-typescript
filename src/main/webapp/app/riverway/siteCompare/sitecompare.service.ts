import { Injectable, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SiteCompareService {

	private riverurl = 'http://10.172.71.210:7080/fr/api/riverStation/60104500/data/hydroInfo?startTime=2017-01-01-01&endTime=2017-01-06-23';

    constructor(
        private http: Http
    ) {}

    getData(): Promise<any> {
        return this.http.get(this.riverurl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    };

    outDataY(): Promise<any> {
        return this.getData().then(data => {
            let Wlever: any[] = [];
            for ( var i = 0; i< data.length; i++ ) {
                Wlever.push(data[i].Z);
            }
            return Wlever;
        })
    };

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

}
