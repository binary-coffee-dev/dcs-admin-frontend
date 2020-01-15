import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'admin/dashboard',
        pathMatch: 'full',
    }, {
        path: 'admin',
        redirectTo: 'admin/dashboard',
        pathMatch: 'full',
    }, {
        path: 'admin',
        children: [{
            path: '',
            loadChildren: './features/layouts/admin-layout/admin-layout.module#AdminLayoutModule'
        }]
    }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    exports: [],
})
export class AppRoutingModule {
}
