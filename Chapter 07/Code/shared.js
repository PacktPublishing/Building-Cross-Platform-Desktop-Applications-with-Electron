const fs = require('fs');
//in your main process
exports.getConfig = () => {
    return readConfigurationSync();
}

function readConfigurationSync() {
    let config = fs.readFileSync('./config.json');
    return JSON.parse(config);
}
