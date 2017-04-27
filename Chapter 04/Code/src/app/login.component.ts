import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ipcRenderer } from 'electron';
declare var FB: any;

@Component({
    selector: 'fb-login',
    template: `
    <style>
      .login_btn {
        position: absolute;
        top: 45%;
        background: #4080ff;
        border-radius: 3px;
        border-color: #4080ff;
        border-width: 1px;
        color: #fff;
        display: inline-block;
        font-family: Freight Sans, 'helvetica neue',helvetica,arial,'lucida grande',sans-serif;
        font-size: 14px;
        padding: 12px 20px 10px 20px;
        left: 30%;
      }
    </style>
	<div class="container">
      <button class="login_btn" (click)="login()">Login to FaceBook</button>
    </div>
    `
})
export class LoginComponent {

    constructor(private router: Router) {
        ipcRenderer.on('authenticated', (event, arg) => {
            this.router.navigate(['/home', {}])
        })
    }

    public login() {
        FB.init({
            appId: '1368474679860002',
            secret: '7a11a9527ddb702fadb96cc7500a0c5c',
            status: false,
            xfbml: false,
            version: 'v2.8'
        });
        ipcRenderer.send('facebook-button-clicked');
    }
}