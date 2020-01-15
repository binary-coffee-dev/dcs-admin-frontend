import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdminLayoutComponent} from './admin-layout.component';

const routes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'user-profile',
                loadChildren: () => import('../../user-profile/user-profile.module').then(m => m.UserProfileModule)
            },
            {
                path: 'articles',
                loadChildren: () => import('../../article/article.module').then(m => m.ArticleModule)
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AdminLayoutRoutingModule {
}
