import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SchintacloudSharedModule } from '../shared';

import { RESERVOIR_ROUTE, ReservoirComponent, RukuchukuService, ReservoirService, RukuchukuComponent, ShuiweiguochengComponent, GongchengtexingComponent } from './';

import { ChartModule } from 'angular2-highcharts';

@NgModule({
    imports: [
        SchintacloudSharedModule,
        RouterModule.forRoot([ RESERVOIR_ROUTE ], { useHash: true }),
        ChartModule.forRoot(require('highcharts'))
    ],
    declarations: [
        ReservoirComponent,
        RukuchukuComponent,
        ShuiweiguochengComponent,
        GongchengtexingComponent
    ],
    entryComponents: [

    ],
    providers: [
        ReservoirService,
        RukuchukuService
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class SchintacloudReservoirModule {}
