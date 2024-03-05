import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicSecondComponent } from './basic-second/basic-second.component';
import { BasicThreeComponent } from './basic-three/basic-three.component';
import { BasicSummaryComponent } from './basic-summary/basic-summary.component';

const routes: Routes = [
    {
        path: 'basic-summary',
        component: BasicSummaryComponent,
    },
    {
        path: 'basic-second',
        component: BasicSecondComponent,
    },
    {
        path: 'basic-three',
        component: BasicThreeComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BasicRoutingModule {}
