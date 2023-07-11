import { Component } from '@angular/core';

@Component({
    selector: 'angular-practice',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'angular practice';

    onKeyup(ref: any) {
        this.title = ref.value;
    }
}
