var assert = require('assert');
var Application = require('spectron').Application;

describe('Application launch', function () {
    this.timeout(10000);

    beforeEach(function () {
        this.app = new Application({
            path: './node_modules/.bin/spectron',
            args: ['index.js']
        });
        return this.app.start();
    });

    afterEach(function () {
        if (this.app && this.app.isRunning()) {
            return this.app.stop();
        }
    });

    it('Shows an initial window', function () {
        return this.app.client.getWindowCount().then(function (count) {
            assert.equal(count, 1);
        });
    });
});