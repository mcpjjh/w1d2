for (var num = 100; num <=200; num++) {
  output = "";
  if (num % 3 === 0) {
    output += "loopy";
  }
  if (num % 4 === 0) {
    output += "lighthouse";
  }
  if (output === "") {
    console.log(num);
  }
  else {
    console.log(output);
  }
}