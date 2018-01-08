'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const api = require('./api/api');

const app = express();
const ROOT = path.resolve(__dirname);

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(ROOT, 'views'));
app.set('view option', { layout: false });
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(cookieParser('Electron Service Worker'));
app.use(bodyParser.json());

app.use('/assets', express.static(path.join(__dirname, 'assets'), { maxAge: 30 }));
app.get('/api', api);
app.use('/', (request, response) => {
    console.log('Rendering views/index.html as home page');
    response.render('index.html', {});
});

let options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
    passphrase: 'password'
};
let server = require('spdy')
    .createServer(options, app)
    .listen(app.get('port'), () => {
        console.log(`Listening on:https://localhost:${server.address().port}`);
    });