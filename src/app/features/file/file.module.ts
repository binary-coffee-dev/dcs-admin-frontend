import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClipboardModule} from "ngx-clipboard";

import {MaterialModule} from "../../core/material/material.module";
import {ListComponent} from './list/list.component';
import {FileRoutingModule} from "./file-routing.module";
import {UploadFileModalComponent} from './list/upload-file.modal';

@NgModule({
    declarations: [ListComponent, UploadFileModalComponent],
    imports: [
        CommonModule,
        FileRoutingModule,
        MaterialModule,
        ClipboardModule
    ],
    entryComponents: [UploadFileModalComponent]
})
export class FileModule {
}
