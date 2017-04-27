
import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from "rxjs/Rx";
import { Http } from '@angular/http';

declare var FB: any;

@Injectable()
export class FbsdkService {
    public ready = new BehaviorSubject<boolean>(false);
    public endpointBase = 'http://graph.facebook.com';
    constructor(private zone: NgZone, private http: Http) {
    }

    public loadSdk() {
        this.loadAsync(() => { });
    }

    public loadAsync(callback: () => void) {
        window.fbAsyncInit = () => this.zone.run(callback);

        const s = "script";
        const id = "facebook-jssdk";
        var js: any, fjs = document.getElementsByTagName(s)[0];
        if (document.getElementById(id)) return;
        js = document.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }

    public getLoginStatus() {
        FB.getLoginStatus((response: any) => { console.log(response); });
    }

    public getProfile() {
        return new Promise((resolve, reject) => {
            let fields = [
                "id", "name", "email", "cover", "birthday"
            ];
            FB.api(`/me?fields=${fields.toString()}`, (response: any) => {
                resolve(response);
            });
        });
    }

}