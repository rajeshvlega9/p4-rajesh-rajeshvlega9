function vowelCount(text) {
  let vowelMap = new Map();
  let i = 0;
  var temp = text.toString();

  for (i = 0; i < temp.length; i++) {
    if (
      temp[i] == "a" ||
      temp[i] == "e" ||
      temp[i] == "i" ||
      temp[i] == "o" ||
      temp[i] == "u"
    ) {
      vowelMap.set(i, temp[i]);
    } else if (
      temp[i] == "A" ||
      temp[i] == "E" ||
      temp[i] == "I" ||
      temp[i] == "O" ||
      temp[i] == "U"
    ) {
      vowelMap.set(i, temp[i]);
    }
  }
  console.log("-------\n");
  console.log(vowelMap);
  console.log("-------\n");
  console.log(vowelMap.forEach(display));
  console.log("-------\n");
  console.log("Number of vowels present - " + vowelMap.size); //prints the count
}

function display(value, key, map) {
  console.log(`${key} <-> ${value}`);
}
var testV = "Rajesh Chowdary VelagA";
vowelCount(testV);
