install.patch(function() {

  var waitCallback = function(delay, c) {
    setTimeout(c, delay);
  };

  var waitPromise = function(delay) {
    return new Promise(ok => setTimeout(ok, delay));
  };

  return { waitCallback, waitPromise };

});