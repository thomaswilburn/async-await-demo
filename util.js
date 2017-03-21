install.patch(function() {

  var $ = (s, d = document) => Array.prototype.slice.call(d.querySelectorAll(s));

  $.one = (s, d = document) => d.querySelector(s);

  var logContainer = $.one(".log-output");
  var log = function(...values) {
    var maintainScroll = logContainer.scrollTop >= logContainer.scrollHeight - logContainer.offsetHeight;
    var output = values.map(v => `<div class="line ${typeof v}">${JSON.stringify(v, null, 2)}</div>`).join("\n");
    logContainer.innerHTML += output;
    if (maintainScroll) logContainer.scrollTop = logContainer.scrollHeight;
  };

  return { log, $ };

});