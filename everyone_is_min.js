var _ = require("lodash");

var worker = function(city) {

  var finalList = {
    hot: [],
    warm: []
  };

  function isOverNineteen (city) {
    return city > 19;
  }

  _.forEach(city, function (temps, townname) {

    if (_.every(temps, isOverNineteen)) {
      finalList.hot.push(townname);
    } else if (_.some(temps, isOverNineteen)) {
      finalList.warm.push(townname);
    }

  });

  return finalList;
};

module.exports = worker;
