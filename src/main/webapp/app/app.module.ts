import './vendor.ts';
import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { SchintacloudSharedModule, UserRouteAccessService } from './shared';
import { SchintacloudHomeModule } from './home/home.module';
import { SchintacloudBlankModule } from './blank/blank.module';
import { SchintacloudReservoirModule } from './reservoir/reservoir.module';
import { SchintacloudRiverwayModule } from './riverway/riverway.module';
import { SchintacloudAdminModule } from './admin/admin.module';
import { SchintacloudAccountModule } from './account/account.module';
import { SchintacloudEntityModule } from './entities/entity.module';

import { LayoutRoutingModule } from './layouts';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';


import {
    JhiMainComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';


@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        SchintacloudSharedModule,
        SchintacloudHomeModule,
        SchintacloudBlankModule,
        SchintacloudAdminModule,
        SchintacloudAccountModule,
        SchintacloudEntityModule,
        SchintacloudReservoirModule,
        SchintacloudRiverwayModule,
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        SidebarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        { provide: Window, useValue: window },
        { provide: Document, useValue: document },
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class SchintacloudAppModule {}
