//returns a random number between 1 (inclusive) and 6 (inclusive)
var numberOfRolls = process.argv[2] || 1;

function getRandomIntInclusive() {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollDice(numberOfRolls) {
  var output = [];
  var i = 0;
  while (i < numberOfRolls) {
    output.push(getRandomIntInclusive())
      i++;
  }
  var finalOutput = output.join(", ")
  // return "Rolled " + numberOfRolls + " dice: " + output.join(", ");
  return `Rolled ${numberOfRolls} dice: ${finalOutput}`;
  //return `Rolled ${numberOfRolls} dice: ${output.join(", ")}`;

}

console.log(rollDice(numberOfRolls))


  //var output = ""

  //for (var)


  //return Math.round(.random() * (7 - 1) + 1);


/*
1.
2. Get number from command line
3. Print amount of numbers mentioned in command line
*/