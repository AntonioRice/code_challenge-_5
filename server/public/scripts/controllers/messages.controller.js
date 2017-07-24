myApp.controller('MessagesController', ['$http', function($http) {
  console.log("Messages Controller loaded");

  var mc = this;
  mc.newMessages = {};

getMessages(); //will act as a page refresh messages

//initial function to get all messages
function getMessages(){
  $http.get('/messages').then(function(response){
      console.log(response.data);
      mc.messages = response.data;
  });
};
//need to post/add  new message
mc.addMessages = function(){
  $http.post('/messages', mc.newMessages)
  .then(function(response){
    console.log('MESSAGE ADDED', response);
    getMessages(); //refresh
  });
} //end of add

}]); //end of controller
