import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { CompanyComponent } from './company/company.component';
import { IndustryComponent } from './industry/industry.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { ChildAccessGuard } from '../shared/guards/child-access.guard';
import { UnsaveGuard } from '../shared/guards/unsave.guard';
import { GetNameResolver } from '../shared/guards/get-name.resolver';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        canDeactivate: [UnsaveGuard],
        resolve: {
            nameInfo: GetNameResolver,
        },
    },
    {
        path: 'about/:age/:sex',
        component: AboutComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'news',
        component: NewsComponent,
        canActivateChild: [ChildAccessGuard],
        children: [
            {
                path: 'company',
                component: CompanyComponent,
                //outlet路由插座命名
                // outlet: 'left',
            },
            {
                path: 'industry',
                component: IndustryComponent,
                // outlet: 'right',
            },
        ],
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full', //完全匹配
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RouterPracticeRoutingModule {}
