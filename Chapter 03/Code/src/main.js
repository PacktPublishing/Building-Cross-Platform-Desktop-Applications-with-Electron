
const { app, BrowserWindow, Menu, globalShortcut } = require('electron');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

let appShell;
let appUrl = 'http://localhost:3000';

const template = [
	{
		label: 'Edit',
		submenu: [
			{
				role: 'undo'
			},
			{
				role: 'redo'
			},
			{
				type: 'separator'
			},
			{
				role: 'cut'
			},
			{
				role: 'copy'
			},
			{
				role: 'paste'
			},
			{
				role: 'pasteandmatchstyle'
			},
			{
				role: 'delete'
			},
			{
				role: 'selectall'
			}
		]
	},
	{
		label: 'View',
		submenu: [
			{
				label: 'Reload',
				accelerator: 'CmdOrCtrl+R',
				click(item, focusedWindow) {
					if (focusedWindow) focusedWindow.reload()
				}
			},
			{
				label: 'Toggle Developer Tools',
				accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
				click(item, focusedWindow) {
					if (focusedWindow) focusedWindow.webContents.toggleDevTools()
				}
			},
			{
				type: 'separator'
			},
			{
				role: 'resetzoom'
			},
			{
				role: 'zoomin'
			},
			{
				role: 'zoomout'
			},
			{
				type: 'separator'
			},
			{
				role: 'togglefullscreen'
			}
		]
	},
	{
		role: 'window',
		submenu: [
			{
				role: 'minimize'
			},
			{
				role: 'close'
			}
		]
	},
	{
		role: 'help',
		submenu: [
			{
				label: 'Learn More',
				click() { require('electron').shell.openExternal('http://electron.atom.io') }
			}
		]
	}
]

function createElectronShell() {
	appShell = new BrowserWindow({ width: 800, height: 600 });
	appShell.loadURL(appUrl);
	appShell.on('closed', () => { appShell = null });
	const menu = Menu.buildFromTemplate(template);
	Menu.setApplicationMenu(menu);
	require('devtron').install()
	const ret = globalShortcut.register('CommandOrControl+X', () => {
		console.log('CommandOrControl+X is pressed')
	});
	//require('devtron').install();
	//BrowserWindow.addDevToolsExtension('/Users/Jasim/Library/Application Support/Google/Chrome/Default/Extensions/elgalmkoelokbchhkhacckoklkejnhcd/1.2.1_0');
	createWebpackServer();
}

app.on('ready', createElectronShell);
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
	if (appShell == null) createElectronShell();
});

function createWebpackServer() {
	var config = require("../devutils/webpack/webpack.config.js");
	var compiler = webpack(config);
	var server = new webpackDevServer(compiler, {
		hot: true
	});
	server.listen(3000);

}