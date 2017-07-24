console.log("messages route working");

var express = require('express');
var router = express.Router();
var Messages = require('../models/messages.schema.js');

//get messages
router.get('/', function(req, res) {
  // find (select) all documents in our collection
  Messages.find({}, function(err, data) {
    if(err) {
      console.log('find error:', err);
      res.sendStatus(500);
    } else {
      res.send(data);
      // res.send(result.rows)
      console.log(data);
    }
  });
});

//add messages
router.post('/', function(req, res) {
  console.log('log the data: ', req.body);
  var addMessages = new Messages(req.body);
  // insert into the messags collection
  addMessages.save(function(err, data) {
    console.log('saved data:', data);
    if(err) {
      console.log('save error: ', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});//end of post

module.exports = router;
