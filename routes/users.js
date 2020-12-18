var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// '/users' + '/name'
router.get('/name', function(req,res){
  res.send('Its John');
});

router.get('/name/:id', function(req,res){
  res.send('Its Params John');
});

router.post('/name', function(req,res){
  res.send('Its Post John');
});

module.exports = router;
