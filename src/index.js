module.exports = function getZerosCount(number, base) {
  var j = 1;
  var i = 2;
  var a = new Array();
  var det;
  do
  {
   if (base % i == 0) // "x" - Число, которое нам требуется разложить. Должно задаваться заранее.
   {
    a[j] = i;
    j++;
    base = base / i;
   }
   else
   {
    i++;
   }
  }
  while (i < base);
  a[j] = i; // В массиве "a" содержатся вычисленные множители.


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
