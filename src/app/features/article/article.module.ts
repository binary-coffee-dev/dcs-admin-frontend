import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OverviewComponent} from './overview/overview.component';
import {ListComponent} from './list/list.component';
import {ArticleRoutingModule} from './article-routing.module';

@NgModule({
    declarations: [OverviewComponent, ListComponent],
    imports: [
        CommonModule,
        ArticleRoutingModule
    ]
})
export class ArticleModule {
}
