var testNumber = 20;

function getAnswer(){
  while (true){
    if (isDivisable(testNumber)){
      return testNumber
    }
    testNumber++; 
  }
}

function isDivisable(num){
  var total = 0;
  for (var i = 1; i <= 20; i++){
    total += (num % i);
  }
  return (total == 0);
}

var answer = getAnswer();

console.log(answer);
