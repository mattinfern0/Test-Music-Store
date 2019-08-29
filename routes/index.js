var express = require('express');
var router = express.Router();

/* GET home page. */

navOptions = [
  {text: ""}
]
router.get('/', function(req, res, next) {
  res.render('index', { title: "Jak's Music Store"});
});

module.exports = router;
