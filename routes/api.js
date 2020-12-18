var express = require('express');
var router = express.Router();

//RESTful routes for the dog 

const models = require('../models');

console.log(models)

//list all dogs
router.get('/dogs', async function(req, res, next) {

    // request comes in
    // db query
    // send back response

    let dogs = await models.Dog.findAll();
    console.log(dogs)

    res.json(dogs);

    res.render('index', { title: 'This should show all the dogs.' });
  });



  // list one dog with ID
  router.get('/dogs/:id', function(req, res, next) {
    res.render('index', { title: 'This should show a particular dog.' });
  });

  // create a dog
  router.post('/dogs', function(req, res, next) {
    res.render('index', { title: 'This should create a dog.' });
  });

  //update dog with ID 
  router.put('/dogs/:id', function(req, res, next) {
    res.render('index', { title: 'This should update a dog.' });
  });

  //delete dog with ID 
  router.delete('/dogs/:id', function(req, res, next) {
    res.render('index', { title: 'This should delete a dog.' });
  });




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;