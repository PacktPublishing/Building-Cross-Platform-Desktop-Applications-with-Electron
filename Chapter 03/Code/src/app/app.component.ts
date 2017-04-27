import { Component, OnInit } from '@angular/core';
@Component({
	selector: 'electron-app',
	template: `
  	 	<div> Angular Bootstrapped </div>
	 	<div> We are using node  {{ nodeVersion }}, 
	 	Chrome {{ chromeVersion }} and Electron {{ electronVersion }} </div>
	`
})
export class AppComponent {
	public chromeVersion = process.versions.chrome;
	public electronVersion = process.versions.electron;
	public nodeVersion = process.versions.node;
}