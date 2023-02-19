const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
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