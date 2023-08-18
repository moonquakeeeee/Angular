import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CanComponentLeave } from 'src/app/shared/guards/unsave.guard';

@Component({
    selector: 'ng-practice-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, CanComponentLeave {
    accountForm: FormGroup = new FormGroup({
        username: new FormControl(),
    });

    constructor(private router: Router, private route: ActivatedRoute) {}

    canLeave() {
        return !this.accountForm.get('username')!.dirty;
    }

    jump() {
        // 跳转传递 动态参数
        this.router.navigate(['/about', '20', 'woman'], {
            // 查询参数
            queryParams: {
                name: 'sheep',
                age: '18',
            },
        });
    }

    ngOnInit(): void {
        console.log(this.route.snapshot.data['nameInfo']);
    }
}
