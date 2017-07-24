
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var mongoose = require('mongoose');

//routes
var messages = require('./routes/messages.js');
var index = require('./routes/index.js');


/** ---------- MIDDLEWARE ---------- **/
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json()); // needed for angular requests

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/messages', messages);
app.use('/', index);


/** -------- MONGOOSE CONNECTION --------**/
var databaseUrl = 'mongodb://localhost:27017/messages';
mongoose.connect(databaseUrl , function(err){
  if(err){
    console.log('error connecting to the db', err);
  }else{
    console.log("Connected just fine!");
  }
});

mongoose.connection.on('connected', function() {
  console.log('mongoose connected to : ', databaseUrl);
});

mongoose.connection.on('error', function(err) {
  console.log('mongoose connection error: ', err);
});

/** ---------- START SERVER ---------- **/
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
