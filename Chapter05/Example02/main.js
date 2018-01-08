const { app, BrowserWindow } = require('electron');

let win = null;

// index.html flle path
let appUrl = `file://${__dirname}/build/index.html`;

// Configure Webpack Dev Server 
if (process.env.NODE_ENV == 'development') {
  console.log('Bundling webpack...');
  const webpack = require('webpack');
  const webpackDevServer = require('webpack-dev-server');
  let config = require('./webpack.config.js');
  config.entry.app = [
    "webpack-dev-server/client? http://localhost:8080/",
    "webpack/hot/dev-server",
    "./src/app.js"
  ];
  config.output.publicPath = '/';
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
  win = new BrowserWindow({ width: 800, height: 600, titleBarStyle: 'hidden', frame: false });
  // Load the html file into the browser window
  win.loadURL(appUrl);
  // Release the instance variable when the window is closed
  win.on('closed', () => {
    win = null;
  });

  // Open the chrome developer tools.
  win.webContents.openDevTools();
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

// Re-activate the window when the application is bring forward to the foreground
app.on('activate', () => {
  if (win == null) createElectronShell();
});