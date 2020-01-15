import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {ListComponent} from './list/list.component';
import {OverviewComponent} from './overview/overview.component';

const routes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: '',
        component: OverviewComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ArticleRoutingModule {
}
