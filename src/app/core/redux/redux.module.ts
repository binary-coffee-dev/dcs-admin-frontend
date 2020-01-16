import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgxsModule} from "@ngxs/store";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";

import {GraphQLModule} from "../graphql";
import {AuthState, PostState} from "./states";
import {environment} from "../../../environments/environment";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        GraphQLModule,
        NgxsModule.forRoot([PostState, AuthState], {
            developmentMode: !environment.production
        }),
        NgxsReduxDevtoolsPluginModule.forRoot()
    ]
})
export class ReduxModule {
}
