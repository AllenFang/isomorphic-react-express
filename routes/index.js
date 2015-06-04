var express = require('express');
var router = express.Router();
require("babel/register");
var React = require("react");
var App = React.createFactory(require("../public/javascripts/components/app"));

/* GET home page. */
router.get('/', function(req, res) {
  var markup = React.renderToString(App());
  res.render('index', {
    title: 'Express',
    markup: markup
  });
});

module.exports = router;
