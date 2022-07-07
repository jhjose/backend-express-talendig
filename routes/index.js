var cors = require('cors');
var express = require('express');
const mysql = require("mysql");
var router = express.Router();

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'react_db_talendig'
});

connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.sendStatus(200);
});

router.post('/login', function(req, res, next) {
  let authorize = 0;
  let user_id;

  connection.query('SELECT * FROM users', function (error, results, fields) {
    if (error) throw error;

    results.forEach(function (user, index){
      console.log('req.body.email', req.body.email);

      if(user.email === req.body.email && user.password === req.body.password){
        res.status(200);
      }
    });

  });

  // if(authorize){
  //   res.setHeader("Content-Type", "application/json")
  //   res.status(200).send({
  //     'id': user_id,
  //     'error': 0,
  //     'message': 'Usuario validado correctamente',
  //     'token': '3asdf4as5df4as5df4xasdf354af5'
  //   });
  // }else{
  //   res.status(401).send('Usuario no autorizado');
  // }

});

module.exports = router;
