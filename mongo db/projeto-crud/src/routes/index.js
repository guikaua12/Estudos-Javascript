const router = require('express').Router();

const CustomerController = require('../database/controllers/CustomerController');

router.get('/', function (req, res) {
    res.render('index', {
        title: 'Home'
    });
});

router.get('/register', function (req, res) {
    res.render('register', {
        title: 'Registro de clientes'
    });
});

router.post('/register/add', CustomerController.add);

router.use(function(req, res) {
    res.render('index', {
        title: 'Digital Tech - Home'
    });
});

module.exports = router;