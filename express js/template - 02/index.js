const express = require('express');
const app = express();
const stringify = require('json-stringify-safe');

const port = process.env.PORT || 3000;


// parâmetro por GET
app.get('/', function (req, res) {
    const user = req.query.user;
    // res.send(`Olá, seja bem vindo ${user}`);
    res.send(req.query);
});

// parâmetro por POST
app.post('/', function (req, res) {
    const user = req.headers.user;
    res.send(`Olá, seja bem vindo ${user}`);
});

// parâmetro por URL
app.get('/:user', function (req, res) {
    const user = req.params.user;
    res.send(`Olá, seja bem vindo ${user}`);
});


app.listen(port, e => {
    console.log('Servidor escutando na porta '+port)
});