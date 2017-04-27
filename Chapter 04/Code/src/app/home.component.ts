import { Component, OnInit } from '@angular/core';
import { FacebookService, FacebookInitParams } from 'ng2-facebook-sdk/dist';
import { FbsdkService } from './fbsdk.service';
declare var FB: any;

@Component({
    selector: 'home',
    templateUrl: './home.entryComponents.html',
    providers: [FacebookService, FbsdkService]
})
export class HomeComponent implements OnInit {

    public profile: any;
    public coverImage: string;
    public name: string;

    public selectedInde: number = 1;

    constructor(private fb: FacebookService, private fbService: FbsdkService) {
        this.fbService.loadSdk();
    }

    ngOnInit() {
        this.fbService.getProfile().then((json: any) => {
            this.profile = json;
            this.coverImage = json.cover.source;
            this.name = json.name;
        });
    }
}