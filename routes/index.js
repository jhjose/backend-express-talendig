// var app = require('../app');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.sendStatus(200);
});

router.post('/login', function(req, res, next) {
  console.log('Email:', req.body.email);
  console.log('Password:', req.body.password);
  let isValid = 0;

  if(isValid){
    res.status(200).send({
      'id': 1,
      'email': 'test@test.test',
      'token': '3asdf4as5df4as5df4xasdf354af5'
    });
  }else{
    res.status(401).send('Usuario no autorizado');
  }

});

module.exports = router;
