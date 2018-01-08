const { ipcRenderer, protocol } = require('electron');
const { BrowserWindow, getGlobal } = require('electron').remote;
const { getConfig } = require('electron').remote.require('./shared');

const settingsWindow = null;

document.addEventListener('DOMContentLoaded', () => {
    let version = ipcRenderer.sendSync('app-config-get-sync', 'version');
    console.log('Application configuration version is ' + version);

    // Reads configuration from remote modules.
    let config = getConfig();
    console.log('Configuration : ' + JSON.stringify(config));

    let windowSize = getGlobal('windowSize');
    console.log('Window size is : ' + windowSize);

    // Listen for main process to send app-config-get-async 
    // event with version in argument field
    ipcRenderer.on('app-config-read', (event, args) => {
        document.getElementById('version').innerHTML = args;
        console.log('configuration version : ' + args);
    });

    // Send asynchronous message to main process
    ipcRenderer.send('app-config-get-async', 'version');

    // Opens settings window from the main process
    let settingsBtn = document.querySelector('#settings-btn');
    settingsBtn.addEventListener('click', () => {
        ipcRenderer.send('app-settings')
    });

    // Opens settins window using remote process
    let settingsBtnRemote = document.querySelector('#settings-btn-remote');

    settingsBtnRemote.addEventListener('click', () => {
        settingsWindow = new BrowserWindow({ width: 450, height: 400 });
        settingsWindow.on('close', () => { settingsWindow = null });
        settingsWindow.loadURL(`file://${__dirname}/settings.html`);
    });
});