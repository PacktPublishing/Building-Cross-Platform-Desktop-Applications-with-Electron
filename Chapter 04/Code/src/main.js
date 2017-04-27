
const { app, BrowserWindow, ipcMain } = require('electron');
const installExtension = require('electron-devtools-installer');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

let mainWindow;
let authWindow;
let appUrl = 'file://' + __dirname + '/app/index.html';

function createElectronShell() {
	mainWindow = new BrowserWindow({ width: 800, height: 600 });
	mainWindow.on('closed', function () {
		mainWindow = null;
	});

	mainWindow.loadURL('http://localhost:808/");

	ipcMain.on("facebook-button-clicked", function (event, arg) {
			var options = {
				client_id: '1633225286959017',
				scopes: "public_profile",
				redirect_uri: "https://www.facebook.com/connect/login_success.html"
			};
			var authWindow = new BrowserWindow({ width: 450, height: 300, show: false, 'node-integration': false });
			var facebookAuthURL = "https://www.facebook.com/dialog/oauth?client_id=" + options.client_id + "&redirect_uri=" + options.redirect_uri + "&response_type=token,granted_scopes&scope=" + options.scopes + "&display=popup";
			authWindow.loadUrl(facebookAuthURL);
			authWindow.show();
			authWindow.webContents.on('did-get-redirect-request', function (event, oldUrl, newUrl) {
				var raw_code = /access_token=([^&]*)/.exec(newUrl) || null;
				access_token = (raw_code && raw_code.length > 1) ? raw_code[1] : null;
				error = /\?error=(.+)$/.exec(newUrl);
				if (access_token) {
					FB.setAccessToken(access_token);
					ipcMain.send('authenticated');
					authWindow.close();
				}
			});
		}

app.on('ready', createElectronShell);
	app.on('window-all-closed', () => {
		if (process.platform !== 'darwin') app.quit();
	});
	app.on('activate', () => {
		if (appShell == null) createElectronShell();
	});

	function createServer() {
		var config = require("../webpack.config.js");
		var compiler = webpack(config);
		var server = new WebpackDevServer(compiler, {});
		server.listen(8080);
	}
