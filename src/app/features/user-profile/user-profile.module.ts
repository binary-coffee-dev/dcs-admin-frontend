import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MaterialModule} from "../../core/material/material.module";
import {UserProfileComponent} from "./user-profile.component";
import {UserProfileRoutingModule} from "./user-profile-routing.module";

@NgModule({
    declarations: [UserProfileComponent],
    imports: [
        CommonModule,
        UserProfileRoutingModule,
        MaterialModule
    ]
})
export class UserProfileModule {
}
