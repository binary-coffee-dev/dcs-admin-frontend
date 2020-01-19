import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClipboardModule} from "ngx-clipboard";

import {ListComponent} from './list/list.component';
import {FileRoutingModule} from "./file-routing.module";
import {MaterialModule} from "../../core/material/material.module";

@NgModule({
    declarations: [ListComponent],
    imports: [
        CommonModule,
        FileRoutingModule,
        MaterialModule,
        ClipboardModule
    ]
})
export class FileModule {
}
