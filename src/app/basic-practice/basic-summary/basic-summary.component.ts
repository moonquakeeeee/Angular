import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import { mockData } from 'src/mock/mock-data';
import { BasicFirstComponent } from '../basic-first/basic-first.component';

@Component({
    selector: 'ng-practice-basic-summary',
    templateUrl: './basic-summary.component.html',
    styleUrls: ['./basic-summary.component.scss'],
})
export class BasicSummaryComponent implements OnInit, AfterViewInit {
    public courseData = mockData;

    // ViewChild实现方式1
    @ViewChild(BasicFirstComponent, { read: ElementRef })
    public singleData!: ElementRef;

    // ViewChild实现方式2
    // @ViewChild('courseRef')
    // public singleData!: BasicFirstComponent;

    @ViewChildren(BasicFirstComponent, { read: ElementRef })
    allData!: QueryList<ElementRef>;

    // @ViewChildren('courseRef')
    // allData!: QueryList<BasicFirstComponent>;

    constructor() {}

    add() {
        this.courseData.push({
            id: 5,
            description: 'test',
            iconUrl:
                'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
            longDescription: 'test',
            category: 'test',
            lessonsCount: 100,
        });
    }

    onClick(result: any) {
        console.log(this.singleData);
        console.log(this.allData);
        // alert(result);
    }

    ngAfterViewInit(): void {
        this.allData.changes.subscribe((result: any) => {
            console.log(result);
        });
    }

    ngOnInit(): void {}
}
