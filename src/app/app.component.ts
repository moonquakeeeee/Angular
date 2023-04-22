import { Component } from '@angular/core';

@Component({
    selector: 'angular-learn',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'angular learn';

    onKeyup(ref: any) {
        this.title = ref.value;
    }
}
