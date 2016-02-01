var express = require('express');
var router = express.Router();
const util = require('util');
var pgp = require("pg-promise")(/*options*/);

var db = pgp("postgres://atggqjgiuiqgjg:JrelYXLYHWswIyMAygn-324irB@ec2-107-22-197-152.compute-1.amazonaws.com:5432/d9nujs4eqrhqt7?ssl=true");

var mates = db.many("select * from users");
console.log(util.inspect(mates, { showHidden: true, colors: true, depth: null }));
console.log(mates);
/* GET home page. */
router.get('/', function (req, res) {
    res.render('eoddset', { title: 'eOddset', mates: mates, currentUrl: '/eoddset' });
    //console.log(mates);
    console.log(util.inspect(mates, { showHidden: false, colors: true, depth: null }));
    console.log();
});

module.exports = router;