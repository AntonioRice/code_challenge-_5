myApp.controller('MessagesController', ['$http', function($http) {
  console.log("Messages Controller loaded");

  var mc = this;
  mc.newMessages = {};

// getMessages(); //will act as a page referesh messages

//initial function to get all messages
function getMessages(){
  $http.get('/messages').then(function(response){
      console.log(response.data);
      mc.messages = response.data;
  });

};
