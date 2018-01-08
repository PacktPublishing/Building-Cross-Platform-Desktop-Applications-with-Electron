const fs = require('fs');
const { app, BrowserWindow, globalShortcut, dialog } = require('electron');

let shortcut;
let appShell;
let appUrl = 'file://' + __dirname + '/index.html';

function createElectronShell() {
  appShell = new BrowserWindow({ width: 800, height: 600 });
  appShell.loadURL(appUrl);
  appShell.on('closed', () => { appShell = null; });

  let contents = appShell.webContents;

  contents.addListener('did-start-loading', function (e) {
    console.log('Started loading the web page')
  });

  contents.addListener('did-finish-load', function (e) {
    console.log('Webpage content loaded');
  });

  contents.addListener('did-stop-loading', function (e) {
    console.log('Finished/Stopped the the page load');
  });

  // If the url contains the word google.com then block the navigation  
  contents.addListener('will-navigate', function (e, url) {
    if (url.indexOf('google.com') != -1) {
      console.log('Navigation to google.com is blocked');
      e.preventDefault();
    }
  });

  // Naviating to the page is finished  
  contents.addListener('did-navigate-in-page', function (e) {
    console.log('Finished navigation')
  });

  contents.addListener('login', function (e, request, authInfo, callback) {
    callback('username', 'password');
  });

  contents.on('dom-ready', (e) => {
    setTimeout(function () {
      contents.capturePage((img) => {
        saveImage(img, '/Users/Jasim/Desktop/capture.png');
      });
      // captures specific area on screen
      contents.capturePage({ x: 10, y: 10, height: 400, width: 500 }, (img) => {
        saveImage(img, '/Users/Jasim/Desktop/capture-partial.png');
      });
    }, 5000);
  });

  shortcut = globalShortcut.register('CommandOrControl+S', () => {
    let path = dialog.showSaveDialog({});
    if (path && path != "") {
      appShell.webContents.savePage(path, 'HTMLComplete', (error) => {
        if (!error)
          console.log('Save page successfully')
      });
    }
  });

  if (!shortcut) {
    console.log('Could not register the shortcut')
  }

  globalShortcut.register('CommandOrControl+P', () => {
    let option = dialog.showMessageBox({
      buttons: ["Paper", "Pdf", "Cancel"], title: 'Select a type'
    });
    switch (option) {
      case 0:
        appShell.webContents.print({
          silent: true, printBackground: true
        });
        break;
      case 1: savePageToPdf();
        break;
    }
  });
}

app.on('ready', createElectronShell);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')
    app.quit();
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});

app.on('activate', () => {
  if (appShell == null)
    createElectronShell();
});

function saveImage(img, path) {
  fs.writeFile(path, img.toPng(), (error) => {
    if (error) throw error;
    console.log('Screenshot captured');
  });
}

function savePageToPdf() {
  let path = dialog.showSaveDialog({});
  if (path) {
    appShell.webContents.printToPDF({
      marginType: 0,
      printBackground: false,
      printSelectionOnly: false,
      landscape: false,
      pageSize: 'A4'
    }, (error, data) => {
      if (error) throw error;
      fs.writeFile(path, data, (error) => {
        if (error) throw error
        console.log('Successfully written to pdf!');
      });
    });
  }
}