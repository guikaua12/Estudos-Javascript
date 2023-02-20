const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const router = require('./routes');
const {connect, connection} = require('./database');

const app = express();
const port = process.env.PORT || 3000;

connect();
console.log(connection)

const schema = new mongoose.Schema({
    name: String,
    age: Number
});

const Model = mongoose.model('Person', schema);
const model = new Model({name: 'Guizao', age: 19})
model.save().then(d => {
    console.log(d)
})

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/', router);

app.listen(port, e => {
    console.log('Servidor escutando na porta '+port);
});