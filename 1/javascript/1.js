/*
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
*/

var answer = 0;

var total = 0;
function sumArray(arr){
  for(var i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return total;
}

var multipules = [];

for(var i = 0; i < 1000; i++){
  if(i % 3 == 0 || i % 5 == 0){
    multipules.push(i);
  }
}

answer = sumArray(multipules);

console.log(answer);
