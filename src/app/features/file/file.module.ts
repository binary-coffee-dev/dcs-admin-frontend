import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListComponent} from './list/list.component';
import {FileRoutingModule} from "./file-routing.module";
import {MaterialModule} from "../../core/material/material.module";

@NgModule({
    declarations: [ListComponent],
    imports: [
        CommonModule,
        FileRoutingModule,
        MaterialModule
    ]
})
export class FileModule {
}
