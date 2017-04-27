'use strict';
const electron, { Menu, MenuItem } = require('electron');
const argv = require('yargs').argv;
const app = electron.app;

// prevent window being garbage collected
let mainWindow;

function onClosed() {
	mainWindow = null;
}

function createMainWindow() {
	var win = new electron.BrowserWindow({
		width: 600,
		height: 400
	});

	if (argv.settingsWindow) {
		win.loadURL('file://${__dirname}/settings.html')
	} else {
		win.loadURL(`file://${__dirname}/index.html`);
	}
	win.on('closed', onClosed);

	manageRecentDocuments();

	win.on('app-command', (e, cmd) => {
		console.log(cmd)
	})

	// Add user tasks 
	setUserTasks();

	// Create custom dock menu
	setDockMenu();

	// set custom windows thumb bar buttons
	setThumbarButtons(win);

	// Add icon to tray
	configureTrayIcon();

	createServiceMenu();

	return win;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', () => {
	mainWindow = createMainWindow();
});

function setDockMenu() {
	const dockMenu = Menu.buildFromTemplate([
		{
			label: 'New Window',
			click() {
				console.log('New Window')
			}
		},
		{
			label: 'New Window with option',
			submenu: [
				{ label: 'Basic' },
				{ label: 'Pro' }
			]
		},
		{
			label: 'New Command....'
		}
	]);
	app.dock.setMenu(dockMenu);
}

function setThumbarButtons(win) {
	win.setThumbarButtons([
		{
			tooltip: 'button1',
			icon: path.join(__dirname, 'button1.png'),
			click() { console.log('button1 clicked') }
		},
		{
			tooltip: 'button2',
			icon: path.join(__dirname, 'button2.png'),
			flags: ['enabled', 'dismissonclick'],
			click() { console.log('button2 clicked.') }
		}
	])
}

function setUserTasks() {
	app.setUserTasks([
		{
			program: process.execPath,
			arguments: '-newWindow',
			iconPath: process.execPath,
			iconIndex: 0,
			title: 'New Window',
			description: 'Create a new window'
		},
		{
			program: process.execPath,
			arguments: '-openSettings',
			iconPath: process.execPath,
			iconIndex: 0,
			title: 'Open settings',
			description: 'Open the settings window'
		}
	])

}

function manageRecentDocuments() {
	app.clearRecentDocuments();
	app.addRecentDocument('/Users/uicoe/desktop/image001.png');
	app.addListener('open-file', (event, path) => {
		if (path != null) {
			let ext = path.substr(path.lastIndexOf('.'));
			if (['.png', '.jpg', '.gif', '.html', '.txt'].indexOf(ext) != -1) {
				let browserWindow = new electron.BrowserWindow({ width: 500, height: 500 });
				browserWindow.loadURL('file://' + path);
			}
		}
	});
}

function createServiceMenu() {
	const template = [
		{
			label: 'Service',
			submenu: [
				{
					label: 'Start service',
					click() {
						createService();
					}
				},
				{
					label: 'Stop service',
					click() {
						stopService();
					}
				}
			]
		}
	];
	const menu = Menu.buildFromTemplate(template)
	Menu.setApplicationMenu(menu);
}

var tray = null;
function configureTrayIcon() {
	tray = new Tray('/Users/Jasim/Workspace/Trash-48.png');
	const contextMenu = Menu.buildFromTemplate([
		{
			label: 'Show window',
			click: function () {
				appShell.show();
			}
		},
		{
			label: 'Hide Window',
			click: function () {
				appShell.hide();
			}
		},
		{ label: 'Quick action' },
		{
			label: 'Exit',
			accelerator: 'Command+Q',
			selector: 'terminate:',
		}
	])
	tray.setToolTip('This is my application.');
	tray.setContextMenu(contextMenu);
}

function createService() {
	if (!service) {
		service = new Service({
			name: 'Node JS Server',
			description: 'A simple node js server',
			script: path.join(__dirname, 'server.js'),
			env: {
				name: 'HOME',
				value: process.env['USERPROFILE']
			}
		});
		service.on('install', () => {
			service.start();
		});
		service.install();
	}
	else {
		service.start();
	}
}

function stopService() {
	if (service) {
		service.stop();
	}
}