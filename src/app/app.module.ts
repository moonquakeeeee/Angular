import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicFirstComponent } from './basic/basic-first/basic-first.component';
import { BasicSecondComponent } from './basic/basic-second/basic-second.component';
import { BasicThreeComponent } from './basic/basic-three/basic-three.component';
import { PageNotFoundComponent } from './basic/page-not-found/page-not-found.component';
import { BasicSummaryComponent } from './basic/basic-summary/basic-summary.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './router/home/home.component';
import { AboutComponent } from './router/about/about.component';
import { LayoutComponent } from './router/layout/layout.component';
import { NavigationComponent } from './router/navigation/navigation.component';
import { NewsComponent } from './router/news/news.component';
import { CompanyComponent } from './router/company/company.component';
import { IndustryComponent } from './router/industry/industry.component';
import { AuthInterceptor } from './http-practice/interceptor/auth.interceptor';

registerLocaleData(zh);

@NgModule({
    declarations: [
        AppComponent,
        BasicFirstComponent,
        BasicSecondComponent,
        BasicThreeComponent,
        PageNotFoundComponent,
        BasicSummaryComponent,
        HomeComponent,
        AboutComponent,
        LayoutComponent,
        NavigationComponent,
        NewsComponent,
        CompanyComponent,
        IndustryComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
        { provide: NZ_I18N, useValue: zh_CN },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
