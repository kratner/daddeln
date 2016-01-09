/*jslint white: true */
/*global
  alert, angular
*/
var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
  '$scope',
  function($scope){
    "use strict";
    $scope.test = 'Hello world!';
  }
]);

(function(){
  "use strict";
  /*
  function hasGetUserMedia() {
    return !!(navigator.getUserMedia || 
      navigator.webkitGetUserMedia || 
      navigator.mozGetUserMedia || 
      navigator.msGetUserMedia);
  }
  if (hasGetUserMedia) {
  	alert("getUserMedia is in effect!");
  }
  */
  if (Modernizr.getusermedia){
    //alert("gUM in effect");
    //var gUM = Modernizr.prefixed('getUserMedia', navigator);
    //gUM({video: true}, function(){});
  }
}());