const test = require('ava')
const { Application } = require('spectron');

test.beforeEach(async t => {
    t.context.app = new Application({
        path: '/Applications/MyApp.app/Contents/MacOS/MyApp'
    });

    await t.context.app.start();
});

test.afterEach.always(async t => {
    await t.context.app.stop();
});

test(async t => {
    const app = t.context.app;
    await app.client.waitUntilWindowLoaded();

    const win = app.browserWindow;
    t.is(await app.client.getWindowCount(), 1);
    t.false(await win.isMinimized());
    t.false(await win.isDevToolsOpened());
    t.true(await win.isVisible());
    t.true(await win.isFocused());

    const { width, height } = await win.getBounds();
    t.true(width > 0);
    t.true(height > 0);
});