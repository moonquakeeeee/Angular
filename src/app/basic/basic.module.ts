import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicRoutingModule } from './basic-routing.module';
import { BasicFirstComponent } from './basic-first/basic-first.component';
import { BasicSecondComponent } from './basic-second/basic-second.component';
import { BasicThreeComponent } from './basic-three/basic-three.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BasicSummaryComponent } from './basic-summary/basic-summary.component';

@NgModule({
    declarations: [
        BasicFirstComponent,
        BasicSecondComponent,
        BasicThreeComponent,
        PageNotFoundComponent,
        BasicSummaryComponent,
    ],
    imports: [CommonModule, BasicRoutingModule],
})
export class BasicModule {}
