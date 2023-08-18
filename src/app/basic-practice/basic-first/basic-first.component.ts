import {
    AfterViewInit,
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';

@Component({
    selector: 'ng-practice-basic-first',
    templateUrl: './basic-first.component.html',
    styleUrls: ['./basic-first.component.scss'],
})
export class BasicFirstComponent implements OnInit, AfterViewInit {
    @Input() course: any;
    @Input() index: any;
    @Output('courseSelected') courseClick = new EventEmitter();
    // 获取ng-content内部的数据，用法和ViewChild及ViewChildren相似。
    @ContentChild('contentRef') content!: ElementRef;

    constructor() {}

    viewButton(item: any) {
        this.courseClick.emit(item.category);
    }

    ngAfterViewInit(): void {
        // console.log('contentRef', this.content);
    }

    ngOnInit(): void {
        // console.log('course', this.course);
    }
}
