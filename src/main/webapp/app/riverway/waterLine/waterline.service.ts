import { Injectable, OnInit } from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Rx';
// import { WaterLineComponent } from 'waterline.component';

@Injectable()
export class WaterLineService {

    private riverurl = 'http://10.172.71.210:7080/fr/api/riverStation/60104500/data/hydroInfo';
    // // private riverurl = 'http://10.172.71.210:7080/fr/api/riverStation/60104500/data/hydroInfo?startTime=2017-01-01-01&endTime=2017-01-06-23';
    //
    // private startTime= "2017-01-01-01";
    // private endTime= "2017-01-06-23";
    //
    // constructor(private http: Http) {}
    //
    // getData(): Promise<any> {
    //     var header = new Headers();
    //     header.append('Access-Control-Allow-Origin', '*');
    //     header.append('Content-Type','application/json');
    //     header.append('Accept','application/json');
    //
    //     return this.http.get(this.riverurl+'&startTime='+this.startTime+'&endTime='+this.endTime)
    //     // return this.http.get(this.riverurl)
    //         .toPromise()
    //         .then(response => response.json())
    //         .catch(this.handleError);
    // };

    public getPostList(startTime: string, endTime: string): Observable<Post[]> {
        let url = this.riverurl;
        let params = new URLSearchParams();
        if (startTime) params.set('startTime', startTime);
        if (endTime) params.set('endTime', endTime);

        return this.http
            .get(url,{search: params})
            .map((res: Response) => {
                let result = res.json();
                console.log(result);
                return result;
            })
            .catch((error:any) => Observable.threw(error || 'Sever error'));
    }

    outDataY(startTime: string, endTime: string): Promise<any> {
        return this.getPostList(startTime, endTime).then(data => {
            let Wlever: any[] = [];
            for ( var i = 0; i< data.length; i++ ) {
                Wlever.push(data[i].Z);
            }
            return Wlever;
        })
    };

    // private handleError(error: any): Promise<any> {
     //    console.error('An error occurred', error);
	// 	return Promise.reject(error.message || error);
	// }

}
