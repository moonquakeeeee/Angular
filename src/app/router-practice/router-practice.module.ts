import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterPracticeRoutingModule } from './router-practice-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LayoutComponent } from './layout/layout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewsComponent } from './news/news.component';
import { CompanyComponent } from './company/company.component';
import { IndustryComponent } from './industry/industry.component';

@NgModule({
    declarations: [
        HomeComponent,
        AboutComponent,
        LayoutComponent,
        NavigationComponent,
        NewsComponent,
        CompanyComponent,
        IndustryComponent,
    ],
    imports: [
        CommonModule,
        RouterPracticeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
})
export class RouterPracticeModule {}
