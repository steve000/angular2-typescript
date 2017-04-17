import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RukuchukuService {
	private url = 'http://10.172.71.210:7080/fr/api/reservoirStation/605AA629/data/hydroInfo?startTime=2016-06-01-01&endTime=2016-06-30-23';

 //    private headers = new Headers({'Access-Control-Allow-Origin': '*'});

    // private url='http://10.172.71.210:7080/fr/api/riverStation/60104500/data/hydroInfo?startTime=2017-01-01-01&endTime=2017-01-17-23&chazhiData=ZQ';

    constructor(private http: Http) {
    }

    getData(): Promise<any> {
    	return this.http.get(this.url)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
    }

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

}
