var _ = require("lodash");

var worker = function(data) {
  var outputString = "Hello <%= name %> (logins: <%= login.length %>)";
  
  return _.template(outputString)(data)
};

module.exports = worker;
