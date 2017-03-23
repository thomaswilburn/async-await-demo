install.patch(async function() {

  var { waitCallback, waitPromise } = await install("wait");

  var fileContents = `this space intentionally left blank.`;

  var readFileCallback = function(c) {
    waitCallback(Math.random() * 300 + 1000, function() {
      c(null, fileContents);
    });
  };

  var readFilePromise = async function() {
    await waitPromise(Math.random() * 300 + 1000);
    // if (Math.random() > .8) throw new Error(Date.now());
    return fileContents;
  };

  return { readFileCallback, readFilePromise };

})