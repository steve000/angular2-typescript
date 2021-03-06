import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SchintacloudSharedModule } from '../shared';

import { BLANK_ROUTE, BlankComponent, BlankService } from './';


@NgModule({
    imports: [
        SchintacloudSharedModule,
        RouterModule.forRoot([ BLANK_ROUTE ], { useHash: true })
    ],
    declarations: [
        BlankComponent
    ],
    entryComponents: [
    ],
    providers: [
        BlankService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SchintacloudBlankModule {}
