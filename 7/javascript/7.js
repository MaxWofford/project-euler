/*By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 *
 * What is the 10 001st prime number?
 */
var primes = [2];

function numberIsPrime(num){
  for (var i = 3; i < num; i = i + 2){
    if (num % i == 0){
      return false;
    }
  }
  return true;
}

var counter = 3;

while (primes.length <= 10001){
  if (numberIsPrime(counter)){
    primes.push(counter);
  }
  counter = counter + 2;
}

console.log(primes[10000]);
