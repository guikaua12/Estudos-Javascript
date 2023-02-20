const router = require('express').Router();

router.get('/', function (req, res) {
    res.render('index', {
        title: 'Digital Tech - Home'
    });
});

router.get('/posts', function (req, res) {
    res.render('posts', {
        title: 'Digital Tech - Posts'
    });
});

router.use(function(req, res) {
    res.render('index', {
        title: 'Digital Tech - Home'
    });
});

module.exports = router;