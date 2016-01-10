/*jslint white: true */
/*global
  $, alert, document
*/
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

  /*
   * zk: app namespace
   * zocken {vb} to game
   */

  var zk = {
    init: function() {
      alert("initializing");
    }
  };
  $(document).ready(function(){
    zk.init();
  });
  /*
  if (Modernizr.getusermedia){
    //alert("gUM in effect");
    //var gUM = Modernizr.prefixed('getUserMedia', navigator);
    //gUM({video: true}, function(){});
  }
  */
}());