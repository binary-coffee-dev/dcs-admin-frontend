import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgxsModule} from "@ngxs/store";

import {GraphQLModule} from "../graphql";
import {PostState} from "./states";
import {environment} from "../../../environments/environment";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        GraphQLModule,
        NgxsModule.forRoot([PostState], {
            developmentMode: !environment.production
        }),
    ]
})
export class ReduxModule {
}
