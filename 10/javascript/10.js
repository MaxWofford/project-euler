function isPrime(num){
  for (var i = 2; i < Math.sqrt(num) + 1; i++){
    if (num === 2){
      return true;
    }
    if (num % i === 0){
      return false;
    }
  }
  return true;
}

sumOfShit = 0;

function answer(){
  for (var r = 2; r < 2000000; r++){
    if (isPrime(r)){
      sumOfShit += r;
    }
  }
  return sumOfShit;
}

var answer = answer();

console.log(answer);
