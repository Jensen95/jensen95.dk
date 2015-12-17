var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('schedule', { title: 'Schedule for NET' });
});

module.exports = router;