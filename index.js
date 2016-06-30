Array.prototype.groupBy = function(callback){
var results = {};
  this.forEach(function (el){
    var key = callback(el);
    if (key in results === false) {
      results[key] = [];
    }
    results[key].push(el);
 });
  return Object.keys(results).map(function(key) {
    return {
      key: key,
      values: results[key]
    };
  });
};

var grouped = [1,2,3,4,5,6,7,8,9,10].groupBy(function(v, i, arr){
  return (v % 2 === 0) ? 'even' : 'odd';
});

console.log(grouped);
