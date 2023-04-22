import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-basic-first',
    templateUrl: './basic-first.component.html',
    styleUrls: ['./basic-first.component.scss'],
})
export class BasicFirstComponent implements OnInit {
    @Input() course: any;
    @Input() index: any;
    @Output('courseSelected') courseClick = new EventEmitter();

    constructor() {}

    viewButton(item: any) {
        this.courseClick.emit(item.category);
    }

    ngOnInit(): void {
        // console.log('course', this.course);
    }
}
