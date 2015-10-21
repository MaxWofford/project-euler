var input = 2;
var answer = 0;

for (var i = 1; i < 999; i++) {
  input = input * 2;
}
input = input.toString();
for (var b = 0; b < input.length; b++) {
  answer += parseInt(input[b]);
}

console.log(answer);
