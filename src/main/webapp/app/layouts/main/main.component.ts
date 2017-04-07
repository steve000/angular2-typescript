import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, NavigationEnd, RoutesRecognized } from '@angular/router';

import { Title } from '@angular/platform-browser';
import { StateStorageService } from '../../shared';

@Component({
    selector: 'jhi-main',
    templateUrl: './main.component.html',
    styleUrls: [
        'main.css'
    ]
})
export class JhiMainComponent implements OnInit {
    var data={{
        NAME: '安居~中和', d1: '10~20', d2: '20~30', d3: '30~35'
    },{
        NAME: '射洪~小河坝', d1: '10~20', d2: '20~30', d3: '30~35'
    },{
        NAME: '小河坝~合川', d1: '10~20', d2: '20~30', d3: '30~35'
    },{
        NAME: '合川~北碚', d1: '10~20', d2: '20~30', d3: '30~35'
    },{
        NAME: '南充~武胜', d1: '10~20', d2: '20~30', d3: '30~35'
    },{
        NAME: '武胜~合川', d1: '10~20', d2: '20~30', d3: '30~35'
    },{
        NAME: '罗渡溪~合川', d1: '10~20', d2: '20~30', d3: '30~35'
    }}; 
    
    constructor(
        private titleService: Title,
        private router: Router,
        private $storageService: StateStorageService,
    ) {}

    private getPageTitle(routeSnapshot: ActivatedRouteSnapshot) {
        let title: string = (routeSnapshot.data && routeSnapshot.data['pageTitle']) ? routeSnapshot.data['pageTitle'] : 'schintacloudApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    }

    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                 this.titleService.setTitle(this.getPageTitle(this.router.routerState.snapshot.root));
            }
            if (event instanceof RoutesRecognized) {
                let params = {};
                let destinationData = {};
                let destinationName = '';
                let destinationEvent = event.state.root.firstChild.children[0];
                if (destinationEvent !== undefined) {
                    params = destinationEvent.params;
                    destinationData = destinationEvent.data;
                    destinationName = destinationEvent.url[0].path;
                }
                let from = {name: this.router.url.slice(1)};
                let destination = {name: destinationName, data: destinationData};
                this.$storageService.storeDestinationState(destination, params, from);
            }
        });
    }
}
