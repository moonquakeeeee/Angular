import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'ng-practice-basic-second',
    templateUrl: './basic-second.component.html',
    styleUrls: ['./basic-second.component.scss'],
})
export class BasicSecondComponent implements OnInit {
    displayDate = new Date(2022, 2, 2);
    str1 = 'learn english';
    str2 = 'LEARN ENGLISH';
    number1 = 9.99;
    number2 = 0.99;
    arr = [
        {
            id: 1,
            name: 'abc',
        },
        {
            id: 2,
            name: 'def',
        },
        {
            id: 3,
            name: 'ghi',
        },
    ];
    obj = {
        id: 4,
        name: 'jkl',
    };
    constructor() {}

    ngOnInit(): void {}
}
