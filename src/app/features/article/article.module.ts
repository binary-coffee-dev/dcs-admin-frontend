import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OverviewComponent} from './overview/overview.component';
import {ListComponent} from './list/list.component';
import {ArticleRoutingModule} from './article-routing.module';
import {MaterialModule} from "../../core/material/material.module";

@NgModule({
    declarations: [OverviewComponent, ListComponent],
    imports: [
        CommonModule,
        ArticleRoutingModule,
        MaterialModule
    ]
})
export class ArticleModule {
}
