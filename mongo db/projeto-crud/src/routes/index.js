const router = require('express').Router();

const CustomerController = require('../database/controllers/CustomerController');

router.get('/', function (req, res) {
    res.render('index', {
        title: 'Home'
    });
});

router.get('/register', function (req, res) {
    const { success, message } = req.query;
    res.render('register', {
        title: 'Registro de clientes',
        success,
        message
    });
});

router.get('/list', async function (req, res) {
    const customers = await CustomerController.getAll();

    res.render('listar', {
        title: 'Listagem de clientes',
        customers
    });
});

router.post('/register/add', CustomerController.add);

router.use(function(req, res) {
    res.render('index', {
        title: 'Digital Tech - Home'
    });
});

module.exports = router;