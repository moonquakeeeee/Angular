import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicFirstComponent } from './basic/basic-first/basic-first.component';
import { BasicSecondComponent } from './basic/basic-second/basic-second.component';
import { BasicSummaryComponent } from './basic/basic-summary/basic-summary.component';
import { BasicThreeComponent } from './basic/basic-three/basic-three.component';
import { PageNotFoundComponent } from './basic/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'basic-summary', component: BasicSummaryComponent },
    { path: 'basic-first', component: BasicFirstComponent },
    { path: 'basic-second', component: BasicSecondComponent },
    { path: 'basic-three', component: BasicThreeComponent },
    //系统默认页
    { path: '', redirectTo: '/basic-summary', pathMatch: 'full' },
    //通配符路由 ---> 路由使用“先到先得”策略,通配符路由放到最后.
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
