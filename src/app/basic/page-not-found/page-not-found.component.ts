import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ng-practice-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
    // engContext = { $implicit: 'World' };
    svkContext = { $implicit: 'Yang', localAge: '18' };

    constructor() {}

    ngOnInit(): void {}
}
