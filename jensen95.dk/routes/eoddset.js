﻿var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('eoddset', { title: 'eOddset', currentUrl: '/eoddset'});
});

module.exports = router;