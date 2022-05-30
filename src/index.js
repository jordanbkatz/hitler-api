const express = require('express');
const quotes = require('./quotes.json');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    res.send(JSON.stringify(quote));
});

app.listen(port, function () {
    console.log(`Server running on port ${port}`);
});