import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SchintacloudSharedModule } from '../shared';

import { RiverWayRouting, RiverWayComponent, RiverWayService } from './';
import {  WaterLineService } from './waterLine/waterline.service';
import {  WaterLineComponent } from './waterLine/waterline.component';
import {  WaterLeverService } from './waterLever/waterlever.service';
import {  WaterLeverComponent } from './waterLever/waterlever.component';
import {  EngineCharacterService } from './engineCharacter/enginecharacter.service';
import {  EngineCharacterComponent } from './engineCharacter/enginecharacter.component';

import {  HistoryCompareService } from './historyCompare/historycompare.service';
import {  HistoryCompareComponent } from './historyCompare/historycompare.component';
import {  SiteCompareService } from './siteCompare/sitecompare.service';
import {  SiteCompareComponent } from './siteCompare/sitecompare.component';
import {  ValueCompareService } from './valueCompare/valuecompare.service';
import {  ValueCompareComponent } from './valueCompare/valuecompare.component';

import { ChartModule } from 'angular2-highcharts';
import { CalendarModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
// import { DropdownModule } from 'primeng/primeng';

@NgModule({
    imports: [
        SchintacloudSharedModule,
        RouterModule.forRoot([ RiverWayRouting ], { useHash: true }),
        ChartModule.forRoot(require('highcharts')),
        CalendarModule,
        ButtonModule,
        // DropdownModule
    ],
    declarations: [
        RiverWayComponent,
        WaterLineComponent,
        WaterLeverComponent,
        EngineCharacterComponent,
        HistoryCompareComponent,
        SiteCompareComponent,
        ValueCompareComponent
    ],
    entryComponents: [

    ],
    providers: [
        RiverWayService,
        WaterLineService,
        WaterLeverService,
        EngineCharacterService,
        HistoryCompareService,
        SiteCompareService,
        ValueCompareService
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class SchintacloudRiverwayModule { }
