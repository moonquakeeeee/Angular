import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpBasicComponent } from './http-basic/http-basic.component';

const routes: Routes = [
    {
        path: 'http-basic',
        component: HttpBasicComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HttpPracticeRoutingModule {}
