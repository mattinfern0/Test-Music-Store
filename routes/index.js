var express = require('express');
var router = express.Router();

/* GET home page. */

navOptions = [
  {text: "Music", link: "/in-dev"},
  {text: "Instruments", link: "/in-dev"},
  {text: "Orders", link: "/in-dev"},
  {text: "Lessons", link: "/in-dev"},
  {text: "Reserve A Room", link: "/reserve"},
  {text: "About Us", link: "/in-dev"},

]
router.use(function (req, res, next){
  res.locals.navigation = navOptions;
  res.locals.title = "Jak's Music Store";
  next();
})


router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/reserve', function(req, res, next){
  res.render('form');
});

router.get('/in-dev', function(req, res, next){
  res.render('in-dev')
})

module.exports = router;
