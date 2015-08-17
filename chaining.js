var _ = require("lodash");

var worker = function(words) {
  return _.chain(words)
    .map(function(word) {
      return word + 'chained';
    })
    .map(function(word) {
      return word.toUpperCase();
    })
    .sort()
};

module.exports = worker;
