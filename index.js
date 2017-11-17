var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var api = require('./api.js');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var frases = [
    'Whats sup motherfucker',
    'Hey nigga boy',
    'Just like a pussy man'
];

app.get('/api', (req,res) => {
    res.json({
        msg: 'working'
    });
});

app.get('/api/frases', (req, res) => {
    res.json({
        msg: 'List sended',
        frases: frases
    });
});

app.use('/js', express.static('public/js'));
app.use('/style', express.static('public/style'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(4000);