"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var win;
// index.html flle path
var appUrl = "file://" + __dirname + "/index.html";
/**
 * Create Electron Browser Window instance.
 * @return {BrowserWindow} win
 */
function createElectronShell() {
    // Initializes the new browser window
    win = new electron_1.BrowserWindow({ width: 800, height: 600 });
    // Load the html file into the browser window
    win.loadURL(appUrl);
    // Release the instance variable when the window is closed
    win.on('closed', function () {
        win = null;
    });
}
/**
 * Create the BrowserWindow instance and open the main window when the
 * Electron's app module emits the ready event.
 */
electron_1.app.on('ready', createElectronShell);
/*
 * The app module should exit when all the windows are closed.
 * The app.quit method should be explicitely called on Mac machine.
 */
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
});
// Re-activate the window when the application is bring forward to the foreground
electron_1.app.on('activate', function () {
    if (win == null)
        createElectronShell();
});
//# sourceMappingURL=main.js.map