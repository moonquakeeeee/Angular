import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './basic/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: 'basic',
        loadChildren: () =>
            import('./basic/basic.module').then((m) => {
                return m.BasicModule;
            }),
    },
    {
        path: 'router-practice',
        loadChildren: () =>
            import('./router-practice/router-practice.module').then((m) => {
                return m.RouterPracticeModule;
            }),
    },
    {
        path: 'http-practice',
        loadChildren: () =>
            import('./http-practice/http-practice.module').then((m) => {
                return m.HttpPracticeModule;
            }),
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
    //重定向 ---> 系统默认页 (完全匹配'/' 会跳转到指定的默认页)
    {
        path: '',
        redirectTo: 'router-practice',
        pathMatch: 'full', //完全匹配
    },
    //通配符路由 ---> 路由使用“先到先得”策略,通配符路由放到最后. (当所有路由匹配不到的时候，会跳转到通配符路由指定的页面)
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
