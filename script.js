install.batch("fs", "wait", "util").then(async function([fs, wait, util]) {

  //code goes here
  
  console.log("hello");
  
  // var p = wait.waitPromise(1000);
  // p.then(() => fs.readFilePromise())
  //   .then(file => console.log(file));
  
  // var all = Promise.all([
  //   fs.readFilePromise(),
  //   new Promise(ok => fs.readFileCallback(ok))
  // ]);
  
  // all.then(function([a, b]) {
  //   console.log(a, b);
  // });
  
  // var file = await fs.readFilePromise();
  
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
  
  // console.log(a, b, c, d);
  
  // var [text, second] = await Promise.all([
  //   fetch("sample.txt").then(p => p.text()),
  //   fetch("fs.js").then(p => p.text())
  //   ]);
    
  // console.log(text, second.length);
  
  var util = install("util");
  util.then(u => console.log(u));
  
  function* generator(x) {
    yield x + 1;
  };

});