const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Server is up and running on port 8080');
});

app.get('*', (req, res) => {
    res.send('<p>Server is running on port 8080</p>');
});

app.listen(8080, () => {
    console.log('The server is running in port 8080');
});