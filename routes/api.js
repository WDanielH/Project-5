var express = require('express');
var router = express.Router();

//RESTful routes for the dog 
// 58:49

const models = require('../models');

console.log(models)

//list all dogs - works 
router.get('/dogs', async function(req, res, next) {

    // request comes in
    // db query
    // send back response

    let dogs = await models.Dog.findAll();
    console.log(dogs)

    res.json(dogs);

    res.render('index', { title: 'This should show all the dogs.' });
  });



  // list one dog with ID - works
  router.get('/dogs/:id', async function(req, res, next) {

    console.log(req.params);

    let dog = await models.Dog.findOne({where: {id: req.params.id}});

    res.json(dog);

    res.render('index', { title: 'This should show a particular dog.' });
  });

  // create a dog ----------------------------------- works
// send info about dog (name) 


  router.post('/dogs', async function(req, res, next) {
    console.log(req.body);

    let dog = await models.Dog.create( {Name: req.body.name});

    res.json(dog);
  });



  //update dog with ID ------------------------------------------- works
  router.put('/dogs/:id', async function(req, res, next) {

let dog = await models.Dog.update(req.body, {where: {id: req.params.id}});
res.json(dog);

    res.render('index', { title: 'This should update a dog.' });
  });

  //delete dog with ID -------------------------- 

  router.delete('/dogs/:id', async function(req, res, next) {

    const dog = await models.Dog.destroy({where: {id: req.params.id}});
    res.json(dog);

    res.render('index', { title: 'This should delete a dog.' });
  });




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
