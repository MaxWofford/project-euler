function findTriplet(){
  for (var i = 1; i < 1000; i++){
    for (var r = i; r < 1000; r++){
      for (var b = r; b < 1000; b++){
        if (i * i + r * r === b * b && i + r + b === 1000){
          return i*r*b;
        }
      }
    }
  }
}

var answer = findTriplet();

console.log(answer);
