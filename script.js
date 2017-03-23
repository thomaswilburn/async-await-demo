install.batch("fs", "wait", "util").then(async function([fs, wait, util]) {

  //code goes here
  
  console.log("hello");
  
  // quick intro to promises:
  // var p = wait.waitPromise(1000);
  // p.then(() => fs.readFilePromise())
  //   .then(file => console.log(file));
  
  // Promise.all() lets us coalesce multiple promises into a single super-promise
  // var all = Promise.all([
  //   fs.readFilePromise(),
  //   new Promise(ok => fs.readFileCallback(ok))
  // ]);
  
  // all.then(function([a, b]) {
  //   console.log(a, b);
  // });
  
  // await means that we can skip then() and go straight to the value
  // var file = await fs.readFilePromise();
  
  // we can also await a Promise.all() wrapper, to fire parallel requests
  // otherwise, multiple lines of `await` will be sequential (i.e., slow)
  try {
    var [a, b, c] = await Promise.all([
      fs.readFilePromise(),
      fs.readFilePromise(),
      fs.readFilePromise(),
      fs.readFilePromise()
    ]);
  } catch (err) {
    console.error(err);
  }
  
  console.log(a, b, c, d);
  
  // We can also use await with new browser APIs like fetch().
  // var [text, second] = await Promise.all([
  //   fetch("sample.txt").then(p => p.text()),
  //   fetch("fs.js").then(p => p.text())
  //   ]);
    
  // console.log(text, second.length);
  
  // finally, I built the module system for this presentation around `async` and `await`.
  var util = install("util");
  util.then(u => console.log(u));
  
  // random generator example - they were precursor to async functions, used for iteration
  function* generator(x) {
    yield x + 1;
  };

});
