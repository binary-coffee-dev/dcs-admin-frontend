import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MarkdownModule} from "ngx-markdown";

import {OverviewComponent} from './overview/overview.component';
import {ListComponent} from './list/list.component';
import {ArticleRoutingModule} from './article-routing.module';
import {MaterialModule} from "../../core/material/material.module";
import { SelectImageModalComponent } from './overview/select-image-modal/select-image-modal.component';

@NgModule({
    declarations: [OverviewComponent, ListComponent, SelectImageModalComponent],
    imports: [
        CommonModule,
        ArticleRoutingModule,
        MaterialModule,
        MarkdownModule.forRoot()
    ],
    entryComponents: [SelectImageModalComponent]
})
export class ArticleModule {
}
