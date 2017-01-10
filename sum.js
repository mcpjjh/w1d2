/*
Given that I have some numbers
And I'm on the terminal
I'd like to sum them up
So that I can know the result

*/

//console.log(process.argv);

function sumArray(arrayofNumbers) {
  var result = 0;
  for (var i = 2; i < arrayofNumbers.length; i += 1) {

    result += Number(arrayofNumbers[i]);
  }
  return result;
}

//console.log(sumArray([1, 1, 1]) === 3);
//console.log(sumArray([1, -1, 10]) === 10);
// both answers should be true and true

//option 1 - more legiible option
var numbers = process.argv.slices(2);
var result = sumArray(numbers);
console.log(result);
//option 2 - less legible option, but quickest
console.log(sumArray(process.argv.slice(2)));



}

var result = 0;
for (var i = 2; i < process.argv.length; i += 1) {
  //var result = 0 (if this were to be included in the loop,
  //var would be set to zero every time it loops, defeating the purpose of the addition loop
  //- place it outside of the loop as seen in line 11 )
  result += Number(process.argv[i]);
}

console.log(result);