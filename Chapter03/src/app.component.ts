import { Component, OnInit } from '@angular/core';
import * as os from 'os';
import { remote, desktopCapturer } from 'electron';
const { Menu, MenuItem } = remote;

import './style.css';

@Component({
	selector: 'electron-app',
	template: `
		<div id="shellInfo">
			<h1> Angular Bootstrapped </h1>
			<div id="processInfo">
				<table>
					<tr>
						<td>Node Version</td>
						<td>{{nodeVersion}}</td>
					</tr>
					<tr>
						<td>Platform</td>
						<td>{{platform}}</td>
					</tr>
					<tr>
						<td>Home Directory</td>
						<td>{{homedir}}</td>
					</tr>
				</table>
			</div>
			<video>
			</video>
		</div>
	`
})
export class AppComponent implements OnInit {
	public platform = os.platform();
	public homedir = os.homedir();
	public nodeVersion = process.versions.node;

	public ngOnInit() {
		const menu = new Menu()
		menu.append(new MenuItem({ label: 'MenuItem1', click() { console.log('item 1 clicked') } }))
		menu.append(new MenuItem({ type: 'separator' }))
		menu.append(new MenuItem({ label: 'MenuItem2', type: 'checkbox', checked: true }))

		window.addEventListener('contextmenu', (e) => {
			e.preventDefault()
			menu.popup(remote.getCurrentWindow())
		}, false)
	}
}