import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ng-practice-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.queryParamMap.subscribe((params) => {
            //查询参数获取
            console.log(params.get('name'));
        });
        this.route.paramMap.subscribe((params) => {
            //动态参数获取
            console.log(params.get('age'));
        });
    }
}
