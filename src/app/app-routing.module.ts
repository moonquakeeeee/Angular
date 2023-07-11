import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicFirstComponent } from './basic/basic-first/basic-first.component';
import { BasicSecondComponent } from './basic/basic-second/basic-second.component';
import { BasicSummaryComponent } from './basic/basic-summary/basic-summary.component';
import { BasicThreeComponent } from './basic/basic-three/basic-three.component';
import { PageNotFoundComponent } from './basic/page-not-found/page-not-found.component';
import { HomeComponent } from './router/home/home.component';
import { AboutComponent } from './router/about/about.component';
import { NewsComponent } from './router/news/news.component';
import { CompanyComponent } from './router/company/company.component';
import { IndustryComponent } from './router/industry/industry.component';
import { AuthGuard } from './guards/auth.guard';
import { ChildAccessGuard } from './guards/child-access.guard';
import { UnsaveGuard } from './guards/unsave.guard';
import { GetNameResolver } from './guards/get-name.resolver';

const routes: Routes = [
    {
        path: 'basic-summary',
        component: BasicSummaryComponent,
    },
    {
        path: 'basic-first',
        component: BasicFirstComponent,
    },
    {
        path: 'basic-second',
        component: BasicSecondComponent,
    },
    {
        path: 'basic-three',
        component: BasicThreeComponent,
    },
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
        path: 'user',
        //loadChildren 路由懒加载，访问时获取模块对应路由组件。
        loadChildren: () =>
            import('./user/user.module').then((m) => {
                // m ---> 获取路由模块集合
                console.log(m);
                return m.UserModule;
            }),
    },
    //重定向 ---> 系统默认页
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full', //完全匹配
    },
    //通配符路由 ---> 路由使用“先到先得”策略,通配符路由放到最后.
    {
        path: '**',
        component: PageNotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
