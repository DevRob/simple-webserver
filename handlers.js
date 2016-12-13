exports.homepage = function(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.end("<h2>Hi There</h2>");
}

exports.profile = function(req, res) {
  var profile = {
    name: "Robert",
    age: "B-side running"
  }
  res.setHeader("Content-Type", "text/html"); //application/jason
  res.end("<span>" + JSON.stringify(profile) + "</span>");
}

exports.notFound = function(req, res) {
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/html");
  res.end("<h2>404 Not found!</h2>");
}
