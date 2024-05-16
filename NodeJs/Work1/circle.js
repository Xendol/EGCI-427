var circle = require('./circle.js');
console.log(circle.area(50));
// circle.js
var PI = Math.PI;
exports.area = function(r) {
return PI*r*r;
};