function vowelCount(text) {
  let vowelMap = new Map();
  let i = 0;
  var vowels = 'aeiou';
  var temp = text.toString().toLowerCase();
  
  for (i = 0; i < temp.length; i++) {
    if( vowels.includes(temp[i]) ) { 
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
