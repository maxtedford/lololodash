var _ = require("lodash");

var worker = function(collection) {
  var counted = [];
  var comments = _.groupBy(collection, 'username');
  
  _.forEach(comments, function(comment, name) {
    counted.push({
      username: name,
      comment_count: _.size(comment)
    })
  });
  
  return counted.reverse();
};

module.exports = worker;
