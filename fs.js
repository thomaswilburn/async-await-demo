install.patch(async function() {

  var { waitCallback, waitPromise } = await install("wait");

  var fileContents = `this space intentionally left blank.`;

  var readFileCallback = function(c) {
    waitCallback(Math.random() * 300 + 1000, function() {
      c(null, fileContents);
    });
  };

  var readFilePromise = function() {
    return waitPromise(Math.random() * 300 + 1000).then(function() {
      return fileContents;
    });
  };

  return { readFileCallback, readFilePromise };

})