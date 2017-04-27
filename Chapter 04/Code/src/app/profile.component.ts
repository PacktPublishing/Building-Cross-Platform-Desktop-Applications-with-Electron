import { Component, Input } from '@angular/core';

@Component({
    selector: 'user-profile',
    templateUrl: './profile.component.html'
})
export class Profile {
    @Input('data') data: any = {};
    constructor() { }
}