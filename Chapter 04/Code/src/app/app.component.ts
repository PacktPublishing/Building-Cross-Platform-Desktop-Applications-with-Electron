import { Component, OnInit } from '@angular/core';
import { FacebookService, FacebookInitParams } from 'ng2-facebook-sdk/dist';
import { FbsdkService } from './fbsdk.service';
declare var FB: any;

@Component({
	selector: 'electron-app',
	template: '<router-outlet></router-outlet>',
	providers: [FacebookService, FbsdkService]
})
export class AppComponent implements OnInit {
	public profile: any = {};
	public coverImage: String = "";
	public name: String = "Done";

	public access_token = `EAACEdEose0cBAIVNvdpnKtyBRmrB4M8CDeMo48H3jk8I7U6ZCpm2ZAm8D
	SZCqjan9IFC5UN0tLYbrb9iYk3KXsuGHXb5nbZCAghZArIw4gm4s4CsVjxaZA0U88bfzB2HwvzXHWUg6QZAoyc
	GfjzGpEHZCE0quqrmdAFSrfXXqFTd5QZDZD`;

	constructor(private fb: FacebookService, private fbService: FbsdkService) {
		this.fbService.loadSdk();
	}

	ngOnInit() {

	}

}