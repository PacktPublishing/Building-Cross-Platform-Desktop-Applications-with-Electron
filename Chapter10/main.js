
const { app, BrowserWindow } = require('electron');
const server = require('./server')
let win = null;

// index.html flle path
const appUrl = `https://localhost:3000/`;

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


  // Add this two line of code
  const contents = win.webContents;
  contents.inspectServiceWorker();
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