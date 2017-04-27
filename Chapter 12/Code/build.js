var os = require('os');
var release_windows = require('./buil.windows');
switch (os.platform()) {
    case 'darwin':
        // execute build.osx.js 
        break;
    case 'linux':
        //execute build.linux.js
        break;
    case 'win32':
        return release_windows.build();
};