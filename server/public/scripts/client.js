var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function($routeProvider) {

  // define our routes, point them at a controller and template (HTML)
  $routeProvider
    .when('/messages', {
      controller: 'MessagesController',
      controllerAs: 'mc',
      // templateUrl: '/views/templates/messages.html'
    })
    // 
    .otherwise({
      redirectTo: '/home',
      templateUrl: '/views/templates/home.html'
    });

});
