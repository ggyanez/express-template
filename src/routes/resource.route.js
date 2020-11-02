var express = require('express');
var router = express.Router();
const resourceController = require('../controllers/resource.controller');

router.get('/', function (req, res) {
    res.redirect('https://github.com/ggyanez/');
});

router.post('/resource/', resourceController.function);

router.get('/resource/', resourceController.function);

module.exports = router;