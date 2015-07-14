(function () {

'use strict';
  require('angular');
  require('angular-route');
  require('angular-animate');
  var mainCtrl = require('./controllers/mainctrl.js');
  var guideDictionaryService = require('./services/GuideDictionaryService.js');

  angular.module('SampleApp', ['ngRoute', 'ngAnimate'])

  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when("/", {
          templateUrl: "./partials/partial1.html",
          controller: "MainController"
        })
        .otherwise({
           redirectTo: '/'
        });
    }
  ])

  // Load the filter  
  // Load services
  .service('GuideDictionaryService', ['$http', guideDictionaryService])
  //Load controller
  .controller('MainController', ['$scope', 'GuideDictionaryService', mainCtrl]);


}());