var express = require('express');
var router = express.Router();
require("babel/register");
var React = require("react");
var Demo = React.createFactory(require("../app/components/Demo"));

/* GET home page. */
router.get('/', function(req, res) {
  var markup = React.renderToString(Demo());
  res.render('index', {
    title: 'Express',
    markup: markup
  });
});

module.exports = router;
