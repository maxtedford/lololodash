var _ = require("lodash");

var worker = function(orders) {
  var finalTotal = [];
  
  var groupedOrders = _.groupBy(orders, 'article');

  _.forEach(groupedOrders, function (value, key) {
    key = parseInt(key);
    var total = 0;
  
    if (value.length === 1) {
      total = value[0].quantity;
    } else {
      total = _.reduce(value, function(sum, value) {
        return sum + value.quantity;
      }, 0);
    }
  
    finalTotal.push({
      article: key,
      total_orders: total
    });
  });
  
  finalTotal = _.sortBy(finalTotal, 'total_orders').reverse();
  
  return finalTotal;
};

module.exports = worker;
