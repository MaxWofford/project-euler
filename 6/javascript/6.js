/*The sum of the squares of the first ten natural numbers is,
 *
 * 1<sup>2</sup> + 2<sup>2</sup> + ... + 10<sup>2</sup> = 385
 *
 * The square of the sum of the first ten natural numbers is,
 *
 * (1 + 2 + ... + 10)<sup>2</sup> = 55<sup>2</sup> = 3025
 *
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 ![−](/var/lib/gems/1.9.1/gems/euler-manager-0.1.1/config/../data/images/symbol_minus.gif) 385 = 2640.
 *
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */
function sumOfSquares(num){
  var total = 0;
  for (var i = 0; i <= num; i++){
    total += (i * i);
  }
  return total;
}

function squareOfSum(num){
  var total = 0;
  for (var i = 0; i <= num; i++){
    total += i;
  }
  return total * total;
}
var answer = squareOfSum(100) - sumOfSquares(100);

console.log(answer);
