import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListComponent} from './list/list.component';
import {FileRoutingModule} from "./file-routing.module";

@NgModule({
    declarations: [ListComponent],
    imports: [
        CommonModule,
        FileRoutingModule
    ]
})
export class FileModule {
}
