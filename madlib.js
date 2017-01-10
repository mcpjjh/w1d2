/*

Given that I have a sentence with blank spaces
I want to provide words for each blank spaces
So that I can have a laugh

I see there is a ___. You wouldn't believe how ___ is sitting on a ___!

1. Split sentence at the blanks
2. Get words from the command line
3. Ensure we have the same numeber of words as we have blanks
4. Add words to sentence
5. Print to console

*/
//1. Split sentence at the blanks
let sentence = "I see there is a ___. You wouldn't believe how ___ is sitting on a ___!"
let splitSentence = sentence.split('___');

//2. Get words from the command line
let words = process.argv.slice(2);

//3. Ensure we have the same number of words as we have blanks
if (words.length !== 3) {
  console.log("You need to provide three words!");
  console.log("Sentence:", sentence);
  process.exit();
}
// can also write it as console.log("Sentence:" + sentence);

//4. Add words to sentence
//let finalSentence = splitSentence[0] + words[0] + splitSentence[1] + words[1] + splitSentence [2] + words[2]

//or

let finalSentence = "";
for (let i = 0; i <= 2; i++) {
  // console.log(splitSentence[i]);
  // console.log(words[i]);
  finalSentence += splitSentence[i] + words[i];
}
finalSentence += splitSentence[splitSentence.length - 1];

//5. Print to console
console.log(finalSentence);
