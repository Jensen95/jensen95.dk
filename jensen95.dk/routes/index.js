var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express', currentUrl: '/', breaking: 'Tester'});
});

module.exports = router;