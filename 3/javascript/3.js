/*The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143?
 */

var input = 600851475143
// Find primes between 1 and x using a prime sleive
function primesFromOneTo(num) {

  // Make a list of potential primes
  var primes = [];
  for (var a = 0; a < num; a++) {
    primes[a] = a + 1;
  }

  // Iterate through the array and check if higher numbers should be taken out
  for (var b = 0; true; b++) {
    // Stop if we've reached the end of the array
    if (b > primes.length) {
      break;
    }

    // Denominator is the current prime we are testing everything against
    denominator = primes[b];
    // Go through the array starting after the denominator and remove anything
    // that modulus denominator === 0
    for (var c = b + 1; c < primes.length; c++) {
      if (primes[c] % denominator === 0) {
        primes.splice(c, 1)
      }
    }
  }
  return primes;
}

function test(possibleSolutions) {
  for (var d = possibleSolutions.length; d > 0; d++) {
    if (input % d === 0) {
      return d;
    }
  }
}

var largestPossibleSolution = Math.round(Math.sqrt(input));

var possibleSolutions = primesFromOneTo(largestPossibleSolution);

var answer = test(possibleSolutions);

console.log(answer);
