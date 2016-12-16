const axios = require("axios");
const _ = require('lodash');
const fs = require('fs');
exports.homepage = function(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.end("<h2>Hi There,</h2>");
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

exports.ipinfo = function(req, res) {
  var ipAddress = req.connection.remoteAddress;
  axios.get("http://freegeoip.net/json/" + ipAddress)
      .then((api_result) => {

    var ip = api_result.data["ip"],
        code = api_result.data["country_code"],
        country = api_result.data["country_name"],
        city = api_result.data["city"];

    res.setHeader("Content-Type", "text/html");
    res.end("<div>" +
      "<h2>Visiting from: " + country + "</h2>" +
      "<ul>" +
        "<li>IP: " + ip + "</li>" +
        "<li>code: " + code + "</li>" +
        "<li>city: " + city + "</li>" +
      "<ul/>" +
    "</div>");
    logIp(api_result.data);
  })
  .catch((error) => {
    console.log(error);
  });
}

function logIp(json_res) {
  fs.appendFile("./log.txt", JSON.stringify(json_res) + "\n", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("Log entered for request from: ", json_res["ip"]);
});
}
