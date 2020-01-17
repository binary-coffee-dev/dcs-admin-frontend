import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MarkdownModule} from "ngx-markdown";

import {OverviewComponent} from './overview/overview.component';
import {ListComponent} from './list/list.component';
import {ArticleRoutingModule} from './article-routing.module';
import {MaterialModule} from "../../core/material/material.module";

@NgModule({
    declarations: [OverviewComponent, ListComponent],
    imports: [
        CommonModule,
        ArticleRoutingModule,
        MaterialModule,
        MarkdownModule.forRoot()
    ]
})
export class ArticleModule {
}
