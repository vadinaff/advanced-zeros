module.exports = function getZerosCount(number, base) {
  var number, base;
var zerosCount=0;
var k=0;
    while (number >= base) {
     number =  parseInt(number / base);
     k = k + number;
     
    }
    zerosCount=k;
  return zerosCount;
  }
