const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
    res.render('index');
});

app.listen(port, e => {
    console.log('Servidor escutando na porta '+port);
});