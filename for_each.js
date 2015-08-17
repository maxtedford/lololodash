var _ = require("lodash");

var worker = function(cities) {
  return _.forEach(cities, function(city) {
    if (city.population >= 1) {
      city.size = 'big'
    } else if (city.population < 0.5) {
      city.size = 'small'
    } else {
      city.size = 'med' 
    }
  })
};

module.exports = worker;
