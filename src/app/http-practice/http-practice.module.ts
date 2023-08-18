import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpPracticeRoutingModule } from './http-practice-routing.module';
import { HttpBasicComponent } from './http-basic/http-basic.component';

@NgModule({
    declarations: [HttpBasicComponent],
    imports: [CommonModule, HttpPracticeRoutingModule],
})
export class HttpPracticeModule {}
