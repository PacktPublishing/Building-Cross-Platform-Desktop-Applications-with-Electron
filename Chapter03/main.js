
const { app, BrowserWindow, Menu, globalShortcut } = require('electron');
const { default: installExtension,
	ANGULARJS_BATARANG,
	VUEJS_DEVTOOLS,
	REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer')

let win;
const template = [{
	label: 'File',
	submenu: [
		{
			// similar to role: 'reload'. The code is just for demo
			// purpose. For reloading the window content in menu used
			// the role reload. 
			label: 'Reload',
			accelerator: 'CmdOrCtrl+R',
			click(item, focusedWindow) {
				if (focusedWindow)
					focusedWindow.reload()
			}
		},
		{
			// This section can be replaced with role: toggledevtools   
			//as there is a role available to do the same. 
			label: 'Toggle Developer Tools',
			accelerator: process.platform === 'darwin' ?
				'Alt+Command+I' : 'Ctrl+Shift+I',
			click(item, focusedWindow) {
				if (focusedWindow)
					focusedWindow.webContents.toggleDevTools()
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
		}
	]
}];

// Get the environment variables
require('dotenv').config();

// index.html flle path
let appUrl = `file://${__dirname}/build/index.html`;


// Configure Webpack Dev Server 
if (process.env.NODE_ENV == 'development') {
	const webpack = require('webpack');
	const webpackDevServer = require('webpack-dev-server');
	let config = require('./webpack.config.js');
	config.entry.app = [
		"webpack-dev-server/client? http://localhost:8080/",
		"webpack/hot/dev-server",
		"./src/app.ts"
	];
	config.output.publicPath = '/build';
	config.plugins.push(new webpack.HotModuleReplacementPlugin())
	const compiler = webpack(config);
	const devServer = new webpackDevServer(compiler, { hot: true });
	devServer.listen(8080);

	// Change the application file path to the dev server url
	appUrl = 'http://localhost:8080/';
}

/**
 * Create Electron Browser Window instance.
 * @return {BrowserWindow} win
 */
function createElectronShell() {
	// Initializes the new browser window
	win = new BrowserWindow({ width: 800, height: 600 });
	// Load the html file into the browser window
	win.loadURL(appUrl);
	// Release the instance variable when the window is closed
	win.on('closed', () => {
		win = null;
	});

	// Open the chrome developer tools.
	win.webContents.openDevTools();

	// Initializes the Menubar from the template
	const menu = Menu.buildFromTemplate(template);
	Menu.setApplicationMenu(menu);

	// Install developer tools extension
	installExtension(ANGULARJS_BATARANG);

	// Installing the devtron 
	require('devtron').install()

	// Register Global Shortcut
	globalShortcut.register('CommandOrControl+X', () => {
		console.log('CommandOrControl+X is pressed')
	});
}
/**
 * Create the BrowserWindow instance and open the main window when the 
 * Electron's app module emits the ready event.
 */
app.on('ready', createElectronShell);

/*
 * The app module should exit when all the windows are closed. 
 * The app.quit method should be explicitely called on Mac machine. 
 */
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});

/**
 * Unregister the shortcut
 */
app.on('will-quit', () => {
	globalShortcut.unregister('CommandOrControl+X');
});

// Re-activate the window when the application is bring forward to the foreground
app.on('activate', () => {
	if (win == null) createElectronShell();
});