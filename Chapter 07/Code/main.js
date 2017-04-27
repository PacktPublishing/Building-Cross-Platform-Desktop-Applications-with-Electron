const fs = require('fs');
const path = require('path');
const request = require('request');
const { app, BrowserWindow, ipcMain, protocol, session } = require('electron');

let settingsWindow = null;
let appShell;
let appUrl = 'file://' + __dirname + '/index.html';

function createElectronShell() {
    appShell = new BrowserWindow({ width: 800, height: 600 });
    appShell.loadURL(appUrl);
    appShell.on('closed', () => { appShell = null; });

    //shares the window size with global
    global.windowSize = appShell.getSize();

    interceptDownload();

    ipcMain.on('app-config-get-sync', (event, args) => {
        let config = readConfigurationSync();
        let response = null;
        if (args != null) {
            response = config[args];
        }
        event.returnValue = response;
    });

    // Handles the message asynchronously
    ipcMain.on('app-config-get-async', (event, args) => {
        readConfigurationAsync((config) => {
            let response = null;
            if (args != null)
                response = config[args];
            event.sender.send('app-config-read', response);
        });
    });

    protocol.registerFileProtocol('app', (request, callback) => {
        const requestedUrl = request.url.replace('app://', '');
        if (requestedUrl == 'settings') {
            settingsWindow = new BrowserWindow({ width: 500, height: 500 });
            settingsWindow.on('closed', () => { settingsWindow = null; });
            settingsWindow.loadURL('file://' + __dirname + '/settings.html');
        }
        else {
            callback({ path: path.normalize(`${__dirname}/${requestedUrl}`) });
            // Open the file with file api
            appShell.loadURL('file://' + __dirname + '/' + requestedUrl);
        }
    });

    ipcMain.on('app-settings', openSettingsWindow);

    // Get default session object
    const ses = appShell.webContents.session;
    console.log(ses.getUserAgent());
}

app.on('ready', createElectronShell);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});

app.on('activate', () => {
    if (appShell == null)
        createElectronShell();
});


function readConfigurationSync() {
    let config = fs.readFileSync('./config.json');
    return JSON.parse(config);
}

function readConfigurationAsync(callback) {
    fs.readFile('./config.json', (error, content) => {
        if (error)
            throw Error('Could not read file');
        if (callback)
            callback(JSON.parse(content));
    });
}

function openSettingsWindow(event, args) {
    settingsWindow = new BrowserWindow({ width: 450, height: 400 });
    settingsWindow.on('close', () => {
        settingsWindow = null
    });
    settingsWindow.loadURL(`file://${__dirname}/settings.html`);
}

let count = 0;
function interceptDownload() {
    session.defaultSession.on('will-download', (event, item, webContents) => {
        // File is blocked 
        event.preventDefault();
        count = count + 1;
        if (count < 3) {
            console.log('Downloading file from : ' + item.getURL() + ' is blocked');
        }
        else {
            downloadFileUsingRequestJs(item.getURL());
        }
    });


}
function downloadFileUsingRequestJs(url) {
    require('request')(url, (data) => {
        let filename = url.substr(url.lastIndexOf('/') + 1);
        require('fs').writeFileSync('./' + filename, data)
    });
}