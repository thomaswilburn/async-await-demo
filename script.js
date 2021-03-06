install.batch("fs", "wait", "util").then(async function([fs, wait, util]) {

  //code goes here
  
  console.log("hello");
  
  // quick intro to promises:
  var p = wait.waitPromise(1000);
  p.then(() => fs.readFilePromise())
    .then(file => console.log("promise file", file));
  
  // Promise.all() lets us coalesce multiple promises into a single super-promise
  var all = Promise.all([
    fs.readFilePromise(),
    new Promise(ok => fs.readFileCallback(ok))
  ]);
  
  all.then(function([a, b]) {
    console.log("all", a, b);
  });
  
  // await means that we can skip then() and go straight to the value
  var file = await fs.readFilePromise();
  console.log("await for file", file);
  
  // we can also await a Promise.all() wrapper, to fire parallel requests
  // otherwise, multiple lines of `await` will be sequential (i.e., slow)
  try {
    var [a, b, c, d] = await Promise.all([
      fs.readFilePromise(),
      fs.readFilePromise(),
      fs.readFilePromise(),
      fs.readFilePromise()
    ]);
  } catch (err) {
    console.error(err);
  }
  
  console.log("using all with await", a, b, c);
  
  // We can also use await with new browser APIs like fetch().
  var [text, second] = await Promise.all([
    fetch("sample.txt").then(p => p.text()),
    fetch("fs.js").then(p => p.text())
    ]);
    
  console.log("fetch example", text, second.length);
  
  // finally, I built the module system for this presentation around `async` and `await`.
  // `await install("module")` is basically an async `require("module")` from CommonJS
  var util = await install("util");

});
