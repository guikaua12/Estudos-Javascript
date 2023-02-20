const express = require('express');
const path = require('path');
const router = require('./routes');
const database = require('./database');

const app = express();
const port = process.env.PORT || 3000;

database.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/', router);

app.listen(port, e => {
    console.log('Servidor escutando na porta '+port);
});