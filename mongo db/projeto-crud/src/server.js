const express = require('express');
const path = require('path');

const db = require('./database/');

const app = express();
const port = process.env.PORT || 3000;

db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Digital Tech - Home'
    });
});

app.get('/posts', function (req, res) {
    res.render('posts', {
        title: 'Digital Tech - Posts'
    });
});

app.use(function(req, res) {
    res.render('index', {
        title: 'Digital Tech - Home'
    });
})

app.listen(port, e => {
    console.log('Servidor escutando na porta '+port);
});