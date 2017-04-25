import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SchintacloudSharedModule } from '../shared';

import { BLANK_ROUTE, BlankComponent, BlankService, ChildComponent, ChildService } from './';


@NgModule({
    imports: [
        SchintacloudSharedModule,
        RouterModule.forRoot([ BLANK_ROUTE ], { useHash: true })
    ],
    declarations: [
        BlankComponent,
        ChildComponent
    ],
    entryComponents: [
    ],
    providers: [
        BlankService,
        ChildService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SchintacloudBlankWithChildModule {}
